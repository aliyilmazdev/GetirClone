import { View, Text } from "react-native";
import React, { useEffect } from "react";
import CategoryFilterBar from "../../components/CategoryFilterBar";
import { useRoute } from "@react-navigation/native";
import { CategoryFilterScreenRouteProp } from "../../models/NavigationModels";
import TypeFiltering from "../../components/TypeFiltering";
import ProductsContainer from "../../components/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { basketStateType } from "../../models/Basket";
import { setTotalBasket } from "../../redux/slices/BasketSlice";

const CategoryFilterScreen = () => {
  const route = useRoute<CategoryFilterScreenRouteProp>();
  const { category } = route.params;
  const dispatch = useDispatch();
  const { basketItems } = useSelector(
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
    <View>
      <CategoryFilterBar category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </View>
  );
};

export default CategoryFilterScreen;
