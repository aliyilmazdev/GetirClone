import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/slices/BasketSlice";
import { BasketItemType } from "../../models/Basket";

const index = ({ basketItem }: { basketItem: BasketItemType }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        width: dimensions.SCREEN_WIDTH / 3,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: colors.mainPurple,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        justifyContent: "space-around",
        borderRadius: 10,
        marginBottom: 15,
      }}
    >
      <Pressable
        onPress={() => dispatch(decrementQuantity(basketItem.id))}
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          height: 50,
          justifyContent: "center",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: colors.mainPurple,
            fontWeight: "800",
          }}
        >
          -
        </Text>
      </Pressable>
      <View
        style={{
          backgroundColor: colors.mainPurple,
          flex: 1,
          alignItems: "center",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          {basketItem.quantity}
        </Text>
      </View>
      <Pressable
        onPress={() => dispatch(incrementQuantity(basketItem.id))}
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          height: 50,
          justifyContent: "center",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: colors.mainPurple,
            fontWeight: "bold",
          }}
        >
          +
        </Text>
      </Pressable>
    </View>
  );
};

export default index;
