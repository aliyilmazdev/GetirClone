import { View, Text } from "react-native";
import React from "react";
import { Product } from "../../models/Product";
import colors from "../../constants/colors";

const index = ({ product }: { product: Product }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: colors.mainPurple,
          fontWeight: "bold",
          marginTop: 12,
          fontSize: 18,
        }}
      >
        <Text>{"\u20ba"}</Text>
        {product.fiyatIndirimli}
      </Text>
      <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 12 }}>
        {product.name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "500",
          marginTop: 6,
          marginBottom: 18,
        }}
      >
        {product.miktar}
      </Text>
    </View>
  );
};

export default index;
