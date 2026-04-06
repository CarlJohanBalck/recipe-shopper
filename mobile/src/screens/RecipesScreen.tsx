import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRecipes } from "../hooks/useRecipes";
import { useShoppingList } from "../hooks/useShoppingList";
import { useSelection } from "../context/SelectionContext";
import RecipeCard from "../components/RecipeCard";
import { colors } from "../lib/colors";
import type { RootStackParamList } from "../navigation";
import type { RecipeSummary } from "../api/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Recipes">;
}

const filters = [
  { label: "Alla", value: "" },
  { label: "Vardag", value: "0" },
  { label: "Helg", value: "1" },
];

export default function RecipesScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [helg, setHelg] = useState("");
  const [page, setPage] = useState(1);
  const { selected, count, clear } = useSelection();
  const { data, isLoading } = useRecipes({ search: debouncedSearch, helg, page });
  const shoppingMutation = useShoppingList();

  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleSearch = useCallback((text: string) => {
    setSearch(text);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(text);
      setPage(1);
    }, 300);
  }, []);

  const handleFilter = useCallback((value: string) => {
    setHelg(value);
    setPage(1);
  }, []);

  const handleGenerate = () => {
    shoppingMutation.mutate(Array.from(selected), {
      onSuccess: (result) => {
        navigation.navigate("ShoppingList", { data: result });
      },
    });
  };

  const totalPages = data ? Math.ceil(data.total / 20) : 0;

  const renderItem = useCallback(
    ({ item }: { item: RecipeSummary }) => (
      <View style={styles.cardWrapper}>
        <RecipeCard
          recipe={item}
          onPress={() => navigation.navigate("RecipeDetail", { id: item.id })}
        />
      </View>
    ),
    [navigation]
  );

  const renderRow = useCallback(
    ({ item }: { item: RecipeSummary[] }) => (
      <View style={styles.row}>
        {item.map((recipe) => (
          <View key={recipe.id} style={styles.cardWrapper}>
            <RecipeCard
              recipe={recipe}
              onPress={() => navigation.navigate("RecipeDetail", { id: recipe.id })}
            />
          </View>
        ))}
        {item.length === 1 && <View style={styles.cardWrapper} />}
      </View>
    ),
    [navigation]
  );

  // Group recipes into rows of 2
  const rows: RecipeSummary[][] = [];
  const recipes = data?.recipes ?? [];
  for (let i = 0; i < recipes.length; i += 2) {
    rows.push(recipes.slice(i, i + 2));
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={styles.logo}>
            <Ionicons name="book-outline" size={22} color={colors.white} />
          </View>
          <Text style={styles.title}>Receptväljaren</Text>
          <TouchableOpacity
            style={styles.suggestBtn}
            onPress={() => navigation.navigate("IngredientSuggestions")}
          >
            <Ionicons name="bulb-outline" size={16} color={colors.emerald[700]} />
            <Text style={styles.suggestBtnText}>Hitta recept</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color={colors.slate[400]} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={handleSearch}
              placeholder="Sök recept..."
              placeholderTextColor={colors.slate[400]}
              returnKeyType="search"
            />
          </View>
        </View>

        <View style={styles.filterRow}>
          {filters.map((f) => (
            <TouchableOpacity
              key={f.value}
              style={[styles.filterBtn, helg === f.value && styles.filterBtnActive]}
              onPress={() => handleFilter(f.value)}
            >
              <Text style={[styles.filterText, helg === f.value && styles.filterTextActive]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Result count */}
      {data && (
        <Text style={styles.resultCount}>
          {data.total} recept{debouncedSearch ? ` för "${debouncedSearch}"` : ""}
        </Text>
      )}

      {/* Recipe grid */}
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.emerald[600]} />
        </View>
      ) : recipes.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="sad-outline" size={48} color={colors.slate[300]} />
          <Text style={styles.emptyTitle}>Inga recept hittades</Text>
          <Text style={styles.emptySubtitle}>Prova att ändra din sökning</Text>
        </View>
      ) : (
        <FlatList
          data={rows}
          renderItem={renderRow}
          keyExtractor={(_, i) => String(i)}
          contentContainerStyle={[styles.list, { paddingBottom: count > 0 ? 100 : 20 }]}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            totalPages > 1 ? (
              <View style={styles.pagination}>
                <TouchableOpacity
                  style={[styles.pageBtn, page === 1 && styles.pageBtnDisabled]}
                  onPress={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  <Text style={styles.pageBtnText}>Föregående</Text>
                </TouchableOpacity>
                <Text style={styles.pageInfo}>
                  Sida {page} av {totalPages}
                </Text>
                <TouchableOpacity
                  style={[styles.pageBtn, page === totalPages && styles.pageBtnDisabled]}
                  onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  <Text style={styles.pageBtnText}>Nästa</Text>
                </TouchableOpacity>
              </View>
            ) : null
          }
        />
      )}

      {/* Selection bar */}
      {count > 0 && (
        <View style={[styles.selectionBar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
          <View style={styles.selectionLeft}>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{count}</Text>
            </View>
            <Text style={styles.selectionText}>
              {count === 1 ? "recept valt" : "recept valda"}
            </Text>
            <TouchableOpacity onPress={clear}>
              <Text style={styles.clearText}>Rensa</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.generateBtn}
            onPress={handleGenerate}
            disabled={shoppingMutation.isPending}
          >
            <Text style={styles.generateText}>
              {shoppingMutation.isPending ? "Genererar..." : "Skapa inköpslista"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[50],
  },
  header: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderBottomWidth: 1,
    borderBottomColor: colors.slate[200],
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
  },
  suggestBtn: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: colors.emerald[50],
    borderWidth: 1,
    borderColor: colors.emerald[200],
  },
  suggestBtnText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.emerald[700],
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.emerald[600],
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.slate[900],
  },
  searchRow: {
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.slate[200],
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.slate[900],
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.slate[200],
  },
  filterBtnActive: {
    backgroundColor: colors.emerald[600],
    borderColor: colors.emerald[600],
  },
  filterText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.slate[600],
  },
  filterTextActive: {
    color: colors.white,
  },
  resultCount: {
    fontSize: 13,
    color: colors.slate[400],
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  list: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  cardWrapper: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: colors.slate[400],
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.slate[400],
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 12,
  },
  pageBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.slate[200],
  },
  pageBtnDisabled: {
    opacity: 0.3,
  },
  pageBtnText: {
    fontSize: 13,
    color: colors.slate[600],
  },
  pageInfo: {
    fontSize: 13,
    color: colors.slate[500],
  },
  selectionBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderTopWidth: 1,
    borderTopColor: colors.slate[200],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },
  selectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  countBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.emerald[100],
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.emerald[700],
  },
  selectionText: {
    fontSize: 13,
    color: colors.slate[600],
  },
  clearText: {
    fontSize: 12,
    color: colors.slate[400],
    marginLeft: 4,
  },
  generateBtn: {
    backgroundColor: colors.emerald[600],
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  generateText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
  },
});
