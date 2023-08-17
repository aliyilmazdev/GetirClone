import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models/Category";
import CategoryItem from "../../components/CategoryItem";

const index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <View style={styles.listContainer}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
