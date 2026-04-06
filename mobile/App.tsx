import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SelectionProvider } from "./src/context/SelectionContext";
import RecipesScreen from "./src/screens/RecipesScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";
import type { RootStackParamList } from "./src/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60_000 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectionProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Recipes"
              component={RecipesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecipeDetail"
              component={RecipeDetailScreen}
              options={{
                title: "Recept",
                headerBackTitle: "Tillbaka",
              }}
            />
            <Stack.Screen
              name="ShoppingList"
              component={ShoppingListScreen}
              options={{
                title: "Inköpslista",
                headerBackTitle: "Tillbaka",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SelectionProvider>
    </QueryClientProvider>
  );
}
