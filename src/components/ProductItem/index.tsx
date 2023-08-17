import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models/Product";
import { useNavigation } from "@react-navigation/native";
import { ProductDetailScreenNavigationProp } from "../../models/NavigationModels";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/BasketSlice";

const index = ({ item }: { item: Product }) => {
  const navigation = useNavigation<ProductDetailScreenNavigationProp>();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetailScreen", { product: item })
      }
      style={{
        width: dimensions.SCREEN_WIDTH * 0.28,
        height: dimensions.SCREEN_HEIGHT * 0.25,
        marginHorizontal: 10,
        marginTop: 20,
      }}
    >
      <Image
        style={{
          width: dimensions.SCREEN_WIDTH * 0.28,
          height: dimensions.SCREEN_WIDTH * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: colors.mainPurple,
            marginLeft: 5,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 13, fontWeight: "600", marginTop: 4 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "500",
        }}
      >
        {item.miktar}
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(addToBasket(item));
        }}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgray",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 8,
          shadowColor: colors.mainPurple,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.08,
        }}
      >
        <Entypo name="plus" size={22} color={colors.mainPurple} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default index;
