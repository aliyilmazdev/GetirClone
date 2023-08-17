import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";

const TypeBox = ({
  setActiveCategory,
  item,
  active,
}: {
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(item)}
      style={[
        {
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          alignSelf: "center",
          marginHorizontal: 9,
          borderRadius: 6,
        },
        item === active && { backgroundColor: "#5C3EBC" },
        item !== active && { borderColor: "#F2F1F7", borderWidth: 1 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, fontWeight: "600" },
          item === active ? { color: "white" } : { color: colors.mainPurple },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const index = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("Birlikte İyi Gider");
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={{
        width: "100%",
        backgroundColor: "white",
        height: dimensions.SCREEN_HEIGHT * 0.072,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.2,
      }}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu"].map((item) => (
        <TypeBox
          setActiveCategory={setActiveCategory}
          item={item}
          active={activeCategory}
          key={item}
        />
      ))}
    </ScrollView>
  );
};

export default index;
