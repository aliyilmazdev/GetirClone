import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Product } from "../../models/Product";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";
import { BasketItemType } from "../../models/Basket";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/slices/BasketSlice";

const index = ({ basketItem }: { basketItem: BasketItemType }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: dimensions.SCREEN_HEIGHT * 0.13,
          paddingHorizontal: 20,
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgrey",
          marginHorizontal: 10,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: basketItem.image }}
            style={{
              width: dimensions.SCREEN_HEIGHT * 0.09,
              height: dimensions.SCREEN_HEIGHT * 0.09,
              borderWidth: 0.4,
              borderColor: "lightgray",
              borderRadius: 8,
            }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: dimensions.SCREEN_WIDTH * 0.44,
              }}
            >
              {basketItem.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {basketItem.miktar}
            </Text>
            <Text
              style={{
                color: colors.mainPurple,
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              <Text>{"\u20ba"}</Text>
              {basketItem.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 80,
            height: 35,
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "lightgray",
          }}
        >
          <Pressable
            onPress={() => dispatch(decrementQuantity(basketItem.id))}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text>-</Text>
          </Pressable>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: colors.mainPurple,
              height: 35,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
              {basketItem.quantity}
            </Text>
          </View>
          <Pressable
            onPress={() => dispatch(incrementQuantity(basketItem.id))}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default index;
