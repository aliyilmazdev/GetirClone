import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import colors from "../../constants/colors";

const index = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text numberOfLines={1}>
          <Text style={styles.addressNameText}>{"Ev,  "}</Text>
          <Text numberOfLines={1} style={styles.addressText}>
            19 Mayıs, Kadıpaşa Sokak, 20, Kadıköy, İstanbul
          </Text>
        </Text>
        <Entypo name="chevron-down" size={24} color={colors.mainPurple} />
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.tvsText}>TVS</Text>
        <Text style={styles.tvsTime}>10dk</Text>
      </View>
    </View>
  );
};

export default index;
