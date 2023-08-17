import { View, Text, ScrollView } from "react-native";
import React from "react";
import productsGetir from "../../../assets/productsGetir";
import ProductItem from "../../components/ProductItem";

const index = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text
        style={{
          color: "gray",
          fontWeight: "bold",
          fontSize: 14,
          padding: 14,
          marginTop: 10,
        }}
      >
        Çubuk
      </Text>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default index;
