import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Category } from "./Category";
import { Product } from "./Product";

type RootStackParamList = {
  CategoryFilterScreen: { category: Category };
  ProductDetailScreen: { product: Product };
  BasketScreen: {};
};

export type CategoryFilterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CategoryFilterScreen"
>;

export type CategoryFilterScreenRouteProp = RouteProp<
  RootStackParamList,
  "CategoryFilterScreen"
>;

export type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductDetailScreen"
>;

export type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetailScreen"
>;

export type BasketScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BasketScreen"
>;

export type BasketScreenRouteProp = RouteProp<
  RootStackParamList,
  "BasketScreen"
>;
