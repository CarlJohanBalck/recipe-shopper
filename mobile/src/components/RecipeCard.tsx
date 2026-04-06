import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { RecipeSummary } from "../api/types";
import { useSelection } from "../context/SelectionContext";
import { colors } from "../lib/colors";

interface Props {
  recipe: RecipeSummary;
  onPress: () => void;
}

export default function RecipeCard({ recipe, onPress }: Props) {
  const { selected, toggle } = useSelection();
  const isSelected = selected.has(recipe.id);

  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        {recipe.image_url ? (
          <Image source={{ uri: recipe.image_url }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="image-outline" size={40} color={colors.slate[300]} />
          </View>
        )}
        <TouchableOpacity
          style={[styles.selectBtn, isSelected && styles.selectBtnActive]}
          onPress={() => toggle(recipe.id)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name={isSelected ? "checkmark" : "add"}
            size={18}
            color={isSelected ? colors.white : colors.slate[400]}
          />
        </TouchableOpacity>
        {recipe.helg && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Helg</Text>
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {recipe.name}
        </Text>
        {recipe.total_price > 0 && (
          <Text style={styles.price}>{recipe.total_price} kr</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardSelected: {
    borderColor: colors.emerald[500],
  },
  imageContainer: {
    aspectRatio: 4 / 3,
    backgroundColor: colors.slate[100],
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.85)",
    alignItems: "center",
    justifyContent: "center",
  },
  selectBtnActive: {
    backgroundColor: colors.emerald[500],
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: colors.amber[100],
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.amber[700],
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.slate[800],
    lineHeight: 18,
  },
  price: {
    fontSize: 12,
    color: colors.slate[400],
    marginTop: 4,
  },
});
