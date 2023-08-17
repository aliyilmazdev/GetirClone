import { View, Text } from "react-native";
import React, { useState } from "react";
import { Product } from "../../models/Product";
import { Feather } from "@expo/vector-icons";

const index = ({ product }: { product: Product }) => {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    index,
    detail,
  }: {
    index: number;
    detail: string;
  }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 16,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.7,
          borderBottomColor: "lightgray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: index === 0 ? "black" : "#687482",
            fontSize: index === 0 ? 12 : 14,
            fontWeight: index === 0 ? "400" : "500",
          }}
        >
          {detail}
        </Text>
        {index !== 0 && (
          <Feather name="chevron-down" size={24} color="#687482" />
        )}
      </View>
    );
  };

  return (
    <View style={{ paddingHorizontal: 16, backgroundColor: "white" }}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
};

export default index;
