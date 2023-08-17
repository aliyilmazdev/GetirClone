import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import HomeHeader from "../../components/HomeHeader";
import SliderCarousel from "../../components/SliderCarousel";
import MainCategories from "../../components/MainCategories";
import Constants from "expo-constants";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerSafeArea}>
        <HomeHeader />
        <ScrollView>
          <SliderCarousel />
          <MainCategories />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: colors.mainPurple,
  },
  innerSafeArea: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
});
