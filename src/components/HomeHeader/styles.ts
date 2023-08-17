import { StyleSheet, Dimensions } from "react-native";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  headerContainer: {
    width: dimensions.SCREEN_WIDTH,
    backgroundColor: colors.mainYellow,
    height: 50,
    flexDirection: "row",
  },
  headerLeft: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    paddingHorizontal: 10,
    paddingRight: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addressNameText: {
    color: colors.mainPurple,
    fontWeight: "bold",
    fontSize: 16,
  },
  tvsText: {
    fontSize: 10,
    color: colors.mainPurple,
  },
  tvsTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.mainPurple,
  },
  addressText: {
    fontSize: 13,
    fontWeight: "500",
  },
});

export default styles;
