import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { formatAmount } from "../lib/utils";
import { colors } from "../lib/colors";
import type { RootStackParamList } from "../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "ShoppingList">;

function buildClipboardText(categories: Props["route"]["params"]["data"]["categories"]): string {
  const lines: string[] = ["Inköpslista", ""];
  for (const cat of categories) {
    for (const item of cat.items) {
      const amount = formatAmount(item.total_amount);
      const unit = item.unit || "";
      lines.push(`${item.name} — ${amount} ${unit}`.trimEnd());
    }
  }
  return lines.join("\n").trimEnd();
}

export default function ShoppingListScreen({ route, navigation }: Props) {
  const { data } = route.params;
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const toggleItem = useCallback((key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(buildClipboardText(data.categories));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalItems = data.categories.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = checked.size;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Inköpslista</Text>
        <TouchableOpacity
          style={[styles.copyBtn, copied && styles.copyBtnDone]}
          onPress={handleCopy}
        >
          <Ionicons
            name={copied ? "checkmark" : "copy-outline"}
            size={16}
            color={copied ? colors.emerald[700] : colors.slate[600]}
          />
          <Text style={[styles.copyText, copied && styles.copyTextDone]}>
            {copied ? "Kopierad!" : "Kopiera"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.progress}>
        {checkedCount} / {totalItems} klara
      </Text>

      {checkedCount > 0 && checkedCount < totalItems && (
        <View style={styles.progressBarBg}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${(checkedCount / totalItems) * 100}%` },
            ]}
          />
        </View>
      )}

      {data.categories.map((cat) => {
        const bgColor = colors.categoryBg[cat.category] || colors.categoryBg.övrigt;
        const textColor = colors.categoryText[cat.category] || colors.categoryText.övrigt;
        const borderColor = colors.categoryBorder[cat.category] || colors.categoryBorder.övrigt;

        return (
          <View
            key={cat.category}
            style={[styles.categoryCard, { backgroundColor: bgColor, borderColor }]}
          >
            <Text style={[styles.categoryTitle, { color: textColor }]}>
              {cat.category.toUpperCase()}
            </Text>
            {cat.items.map((item) => {
              const key = `${cat.category}:${item.name}:${item.unit}`;
              const isChecked = checked.has(key);
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.itemRow}
                  onPress={() => toggleItem(key)}
                  activeOpacity={0.6}
                >
                  <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                    {isChecked && (
                      <Ionicons name="checkmark" size={14} color={colors.white} />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.itemName,
                      { color: textColor },
                      isChecked && styles.itemChecked,
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.itemAmount,
                      { color: textColor, opacity: 0.7 },
                      isChecked && styles.itemChecked,
                    ]}
                  >
                    {formatAmount(item.total_amount)} {item.unit || ""}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}

      {checkedCount === totalItems && totalItems > 0 && (
        <View style={styles.doneCard}>
          <Text style={styles.doneTitle}>Allt klart!</Text>
          <Text style={styles.doneSubtitle}>Du har allt du behöver</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[50],
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.slate[900],
  },
  copyBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.slate[200],
  },
  copyBtnDone: {
    backgroundColor: colors.emerald[50],
    borderColor: colors.emerald[200],
  },
  copyText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.slate[600],
  },
  copyTextDone: {
    color: colors.emerald[700],
  },
  progress: {
    fontSize: 13,
    color: colors.slate[400],
    marginBottom: 12,
  },
  progressBarBg: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.slate[100],
    marginBottom: 16,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: colors.emerald[500],
  },
  categoryCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 7,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.slate[300],
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: colors.emerald[500],
    borderColor: colors.emerald[500],
  },
  itemName: {
    flex: 1,
    fontSize: 14,
  },
  itemAmount: {
    fontSize: 14,
  },
  itemChecked: {
    textDecorationLine: "line-through",
    opacity: 0.4,
  },
  doneCard: {
    marginTop: 12,
    padding: 24,
    borderRadius: 16,
    backgroundColor: colors.emerald[50],
    borderWidth: 1,
    borderColor: colors.emerald[100],
    alignItems: "center",
  },
  doneTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.emerald[700],
  },
  doneSubtitle: {
    fontSize: 14,
    color: colors.emerald[600],
    marginTop: 4,
  },
});
