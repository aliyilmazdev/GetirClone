import { View, Text, ActivityIndicator, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDetailScreenRouteProp } from "../../models/NavigationModels";
import { Product } from "../../models/Product";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperties from "../../components/DetailProperties";
import CardButton from "../../components/CardButton";
import colors from "../../constants/colors";
import { useSelector } from "react-redux";
import { BasketItemType, basketStateType } from "../../models/Basket";
import AmountSetter from "../../components/AmountSetter";
import LoadingCardButton from "../../components/LoadingCardButton";

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { product } = route.params;
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [hideAddToBasketButton, setHideAddToBasketButton] = useState(false);
  const [basketProduct, setBasketProduct] = useState<BasketItemType>({
    fiyat: 0,
    fiyatIndirimli: 0,
    id: "",
    image: "",
    images: [],
    miktar: "",
    name: "",
    quantity: 0,
  });
  const { basketItems } = useSelector(
    (state: { BasketSlice: basketStateType }) => state.BasketSlice
  );

  const cardButtonOpacity = new Animated.Value(1);
  const amountSetterOpacity = new Animated.Value(0);

  useEffect(() => {
    if (basketProduct.quantity >= 1) {
      setHideAddToBasketButton(true);
    }
  }, [basketProduct]);

  useEffect(() => {
    setCurrentProduct(product);
  }, []);

  useEffect(() => {
    if (hideAddToBasketButton) {
      // CardButton'u fade-out yap ve AmountSetter'ı fade-in yap
      Animated.timing(cardButtonOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(amountSetterOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    } else {
      // AmountSetter'ı fade-out yap ve CardButton'u fade-in yap
      Animated.timing(amountSetterOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(cardButtonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [hideAddToBasketButton]);

  useEffect(() => {
    if (currentProduct) {
      const item = basketItems.find((item) => item.id === currentProduct.id);
      if (item) {
        setBasketProduct(item);
      }
    }
  }, [basketItems, currentProduct]);

  if (!currentProduct) {
    return <ActivityIndicator size={"large"} color={colors.mainPurple} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageCarousel images={currentProduct.images} />
      <DetailBox product={currentProduct} />
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 18,
          marginBottom: 10,
          color: "#808b99",
          fontWeight: "500",
        }}
      >
        Detaylar
      </Text>
      <DetailProperties product={currentProduct} />
      <View
        style={{
          height: 90,
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        {!hideAddToBasketButton ? (
          <Animated.View
            style={{
              opacity: cardButtonOpacity,
            }}
          >
            <CardButton
              product={currentProduct}
              setHideAddToBasketButton={setHideAddToBasketButton}
              hideAddToBasketButton={hideAddToBasketButton}
            />
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              opacity: amountSetterOpacity,
            }}
          >
            <AmountSetter basketItem={basketProduct} />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default ProductDetailScreen;
