import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/BasketSlice";
import { BasketItemType } from "../../models/Basket";
import { Product } from "../../models/Product";

const index = ({
  product,
  hideAddToBasketButton,
  setHideAddToBasketButton,
}: {
  product: Product;
  hideAddToBasketButton: boolean;
  setHideAddToBasketButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setLoading(true);
        dispatch(addToBasket(product));
        setTimeout(() => {
          setLoading(false);
          setHideAddToBasketButton(true);
        }, 500);
      }}
      style={{
        backgroundColor: colors.mainPurple,
        width: dimensions.SCREEN_WIDTH * 0.85,
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
          Sepete Ekle
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default index;
