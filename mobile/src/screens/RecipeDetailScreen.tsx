import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { fetchRecipeDetail } from "../api/client";
import { useSelection } from "../context/SelectionContext";
import { formatAmount } from "../lib/utils";
import { colors } from "../lib/colors";
import type { RootStackParamList } from "../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "RecipeDetail">;

export default function RecipeDetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const { selected, toggle } = useSelection();
  const isSelected = selected.has(id);

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeDetail(id),
  });

  if (isLoading || !recipe) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Laddar...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {recipe.image_url && (
        <Image source={{ uri: recipe.image_url }} style={styles.image} />
      )}
      <View style={styles.body}>
        <Text style={styles.title}>{recipe.name}</Text>

        {recipe.helg && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Helgrecept</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>INGREDIENSER</Text>
          {recipe.ingredients.map((ing, i) => (
            <View key={i} style={styles.ingredientRow}>
              <Text style={styles.ingredientName}>{ing.name}</Text>
              <Text style={styles.ingredientAmount}>
                {formatAmount(ing.amount)} {ing.unit || ""}
              </Text>
            </View>
          ))}
        </View>

        {recipe.instructions && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>INSTRUKTIONER</Text>
            <Text style={styles.instructions}>{recipe.instructions}</Text>
          </View>
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionBtn, isSelected ? styles.removeBtn : styles.addBtn]}
            onPress={() => toggle(id)}
          >
            <Ionicons
              name={isSelected ? "close" : "add"}
              size={18}
              color={isSelected ? colors.red[600] : colors.white}
            />
            <Text style={[styles.actionText, isSelected ? styles.removeText : styles.addText]}>
              {isSelected ? "Ta bort från lista" : "Lägg till i lista"}
            </Text>
          </TouchableOpacity>

          {recipe.url && (
            <TouchableOpacity
              style={styles.sourceBtn}
              onPress={() => Linking.openURL(recipe.url!)}
            >
              <Ionicons name="open-outline" size={16} color={colors.slate[600]} />
              <Text style={styles.sourceText}>Källa</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingBottom: 40,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  loadingText: {
    fontSize: 16,
    color: colors.slate[400],
  },
  image: {
    width: "100%",
    height: 240,
  },
  body: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.slate[900],
    lineHeight: 28,
  },
  badge: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: colors.amber[100],
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.amber[700],
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.slate[700],
    letterSpacing: 1,
    marginBottom: 12,
  },
  ingredientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.slate[100],
  },
  ingredientName: {
    fontSize: 15,
    color: colors.slate[600],
    flex: 1,
  },
  ingredientAmount: {
    fontSize: 15,
    color: colors.slate[400],
  },
  instructions: {
    fontSize: 15,
    color: colors.slate[600],
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 28,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 12,
  },
  addBtn: {
    backgroundColor: colors.emerald[600],
  },
  removeBtn: {
    backgroundColor: colors.red[50],
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  addText: {
    color: colors.white,
  },
  removeText: {
    color: colors.red[600],
  },
  sourceBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.slate[200],
  },
  sourceText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.slate[600],
  },
});
