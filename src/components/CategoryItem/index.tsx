import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import dimensions from "../../constants/dimensions";
import { Category } from "../../models/Category";
import { useNavigation } from "@react-navigation/native";
import { CategoryFilterScreenNavigationProp } from "../../models/NavigationModels";

type CategoryItemProps = {
  item: Category;
};

const index = ({ item }: CategoryItemProps) => {
  const navigation = useNavigation<CategoryFilterScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryFilterScreen", { category: item })
      }
      style={{
        width: dimensions.SCREEN_WIDTH / 4,
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Image
        style={{
          width: dimensions.SCREEN_WIDTH / 5.2,
          height: dimensions.SCREEN_WIDTH / 5.2,
          borderRadius: 8,
          marginBottom: 5,
        }}
        source={{
          uri: item.src,
        }}
      />
      <Text style={{ fontSize: 12, color: "#616161" }}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default index;
