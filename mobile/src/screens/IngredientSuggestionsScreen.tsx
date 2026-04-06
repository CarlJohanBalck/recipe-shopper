import React, { useState, useMemo, useCallback, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useIngredients } from "../hooks/useIngredients";
import { useRecipeSuggestions } from "../hooks/useRecipeSuggestions";
import { useSelection } from "../context/SelectionContext";
import { colors } from "../lib/colors";
import type { RootStackParamList } from "../navigation";
import type { Ingredient, RecipeSuggestion } from "../api/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "IngredientSuggestions">;
}

const MAX_UNFILTERED = 60;

export default function IngredientSuggestionsScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const { toggle: toggleRecipe } = useSelection();

  const { data: ingredientsData, isLoading: loadingIngredients } = useIngredients();
  const selectedIds = useMemo(() => Array.from(selected), [selected]);
  const { data: suggestionsData, isLoading: loadingSuggestions } = useRecipeSuggestions(selectedIds);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedSearch(text), 200);
  }, []);

  const allIngredients = ingredientsData?.ingredients ?? [];

  const filtered = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    if (!q) return allIngredients.slice(0, MAX_UNFILTERED);
    return allIngredients.filter((i) => i.name.toLowerCase().includes(q));
  }, [allIngredients, debouncedSearch]);

  const selectedIngredients = useMemo(
    () => allIngredients.filter((i) => selected.has(i.id)),
    [allIngredients, selected]
  );

  const toggleIngredient = useCallback((ing: Ingredient) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(ing.id)) next.delete(ing.id);
      else next.add(ing.id);
      return next;
    });
  }, []);

  const suggestions = suggestionsData?.recipes ?? [];

  const renderSuggestion = useCallback(
    ({ item }: { item: RecipeSuggestion }) => (
      <TouchableOpacity
        style={styles.suggestionCard}
        onPress={() => navigation.navigate("RecipeDetail", { id: item.id })}
        activeOpacity={0.8}
      >
        <View style={styles.suggestionImageWrapper}>
          {item.image_url ? (
            <Image source={{ uri: item.image_url }} style={styles.suggestionImage} />
          ) : (
            <View style={styles.suggestionImagePlaceholder}>
              <Ionicons name="image-outline" size={28} color={colors.slate[300]} />
            </View>
          )}
          <View style={styles.matchBadge}>
            <Ionicons name="checkmark" size={10} color={colors.white} />
            <Text style={styles.matchBadgeText}>{item.match_count}</Text>
          </View>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => toggleRecipe(item.id)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons name="add" size={18} color={colors.slate[500]} />
          </TouchableOpacity>
        </View>
        <View style={styles.suggestionInfo}>
          <Text style={styles.suggestionName} numberOfLines={2}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ),
    [navigation, toggleRecipe]
  );

  const renderRow = useCallback(
    ({ item }: { item: RecipeSuggestion[] }) => (
      <View style={styles.row}>
        {item.map((recipe) => (
          <View key={recipe.id} style={styles.cardWrapper}>
            {renderSuggestion({ item: recipe })}
          </View>
        ))}
        {item.length === 1 && <View style={styles.cardWrapper} />}
      </View>
    ),
    [renderSuggestion]
  );

  const rows: RecipeSuggestion[][] = [];
  for (let i = 0; i < suggestions.length; i += 2) {
    rows.push(suggestions.slice(i, i + 2));
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={22} color={colors.slate[600]} />
          </TouchableOpacity>
          <Text style={styles.title}>Hitta recept</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={16} color={colors.slate[400]} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={handleSearch}
            placeholder="Sök ingredienser..."
            placeholderTextColor={colors.slate[400]}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => { setSearch(""); setDebouncedSearch(""); }}>
              <Ionicons name="close-circle" size={18} color={colors.slate[400]} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 16 }]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Selected chips */}
        {selectedIngredients.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionLabel}>Valda ({selectedIngredients.length})</Text>
              <TouchableOpacity onPress={() => setSelected(new Set())}>
                <Text style={styles.clearText}>Rensa alla</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.chipGroup}>
              {selectedIngredients.map((ing) => (
                <TouchableOpacity
                  key={ing.id}
                  style={styles.chipSelected}
                  onPress={() => toggleIngredient(ing)}
                >
                  <Text style={styles.chipSelectedText}>{ing.name}</Text>
                  <Ionicons name="close" size={14} color={colors.emerald[700]} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Ingredient picker */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Ingredienser</Text>
            {!debouncedSearch && allIngredients.length > MAX_UNFILTERED && (
              <Text style={styles.countHint}>
                Visar {MAX_UNFILTERED} av {allIngredients.length}
              </Text>
            )}
          </View>

          {loadingIngredients ? (
            <ActivityIndicator color={colors.emerald[600]} style={{ marginVertical: 12 }} />
          ) : filtered.length === 0 ? (
            <Text style={styles.emptyText}>Inga ingredienser hittades</Text>
          ) : (
            <View style={styles.chipGroup}>
              {filtered.map((ing) => {
                const isSelected = selected.has(ing.id);
                return (
                  <TouchableOpacity
                    key={ing.id}
                    style={[styles.chip, isSelected && styles.chipActive]}
                    onPress={() => toggleIngredient(ing)}
                  >
                    <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                      {ing.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

        {/* Suggestions */}
        <View style={styles.divider} />
        <View style={styles.section}>
          {selectedIds.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="bulb-outline" size={40} color={colors.slate[300]} />
              <Text style={styles.emptyStateTitle}>Välj ingredienser ovan</Text>
              <Text style={styles.emptyStateSubtitle}>Recept som matchar visas här</Text>
            </View>
          ) : loadingSuggestions ? (
            <ActivityIndicator size="large" color={colors.emerald[600]} style={{ marginVertical: 24 }} />
          ) : suggestions.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="sad-outline" size={40} color={colors.slate[300]} />
              <Text style={styles.emptyStateTitle}>Inga recept hittades</Text>
              <Text style={styles.emptyStateSubtitle}>Prova andra ingredienser</Text>
            </View>
          ) : (
            <>
              <Text style={styles.resultCount}>
                {suggestions.length} recept matchar dina ingredienser
              </Text>
              <FlatList
                data={rows}
                renderItem={renderRow}
                keyExtractor={(_, i) => String(i)}
                scrollEnabled={false}
              />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[50],
  },
  header: {
    backgroundColor: "rgba(255,255,255,0.97)",
    borderBottomWidth: 1,
    borderBottomColor: colors.slate[200],
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
  },
  backBtn: {
    marginLeft: -4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.slate[900],
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
    fontSize: 15,
    color: colors.slate[900],
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.slate[500],
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  clearText: {
    fontSize: 12,
    color: colors.slate[400],
  },
  countHint: {
    fontSize: 11,
    color: colors.slate[400],
  },
  chipGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.slate[200],
  },
  chipActive: {
    backgroundColor: colors.emerald[500],
    borderColor: colors.emerald[500],
  },
  chipText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.slate[700],
  },
  chipTextActive: {
    color: colors.white,
  },
  chipSelected: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: colors.emerald[100],
  },
  chipSelectedText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.emerald[700],
  },
  divider: {
    height: 1,
    backgroundColor: colors.slate[200],
    marginHorizontal: 16,
  },
  resultCount: {
    fontSize: 13,
    color: colors.slate[400],
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  cardWrapper: {
    flex: 1,
  },
  suggestionCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  suggestionImageWrapper: {
    aspectRatio: 4 / 3,
    backgroundColor: colors.slate[100],
  },
  suggestionImage: {
    width: "100%",
    height: "100%",
  },
  suggestionImagePlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  matchBadge: {
    position: "absolute",
    bottom: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: colors.emerald[600],
  },
  matchBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.white,
  },
  addBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.85)",
    alignItems: "center",
    justifyContent: "center",
  },
  suggestionInfo: {
    padding: 10,
  },
  suggestionName: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.slate[800],
    lineHeight: 17,
  },
  emptyText: {
    fontSize: 14,
    color: colors.slate[400],
    paddingVertical: 8,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 8,
  },
  emptyStateTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.slate[400],
  },
  emptyStateSubtitle: {
    fontSize: 13,
    color: colors.slate[400],
  },
});
