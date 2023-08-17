import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import BasketItem from "../../components/BasketItem";
import productsGetir from "../../../assets/productsGetir";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";
import { useDispatch, useSelector } from "react-redux";
import { basketStateType } from "../../models/Basket";
import { setTotalBasket } from "../../redux/slices/BasketSlice";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const { basketItems, totalBasket } = useSelector(
    (state: { BasketSlice: basketStateType }) => state.BasketSlice
  );

  useEffect(() => {
    let sumBasket = basketItems.reduce(
      (acc, item) => acc + item.fiyat * item.quantity,
      0
    );

    dispatch(setTotalBasket(sumBasket));
  }, [basketItems]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={basketItems}
        renderItem={({ item }) => <BasketItem basketItem={item} />}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "white",
          width: "100%",
          height: 100,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 50,
            flexDirection: "row",
            width: dimensions.SCREEN_WIDTH * 0.8,
            backgroundColor: "white",
            shadowColor: "lightgrey",
            shadowOpacity: 1,
            shadowRadius: 10,
            alignSelf: "center",
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: colors.mainPurple,
              width: dimensions.SCREEN_WIDTH * 0.55,
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 14 }}>
              Devam
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                color: colors.mainPurple,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              <Text>{"\u20ba"}</Text>
              {totalBasket.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketScreen;
