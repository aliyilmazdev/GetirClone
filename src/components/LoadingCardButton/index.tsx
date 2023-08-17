import { View, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";
const index = () => {
  return (
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
      <View
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
        <ActivityIndicator size={"small"} color={"white"} />
      </View>
    </View>
  );
};

export default index;
