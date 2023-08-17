import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import dimensions from "../../constants/dimensions";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models/Category";
import colors from "../../constants/colors";

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          paddingHorizontal: 9,
          alignItems: "center",
        },
        item.name === active.name && {
          borderBottomColor: colors.mainYellow,
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item.name}
      </Text>
    </View>
  );
};

const CategoryFilterBar = ({ category }: { category: Category }) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      bounces={true}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: dimensions.SCREEN_HEIGHT * 0.065,
      }}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFilterBar;
