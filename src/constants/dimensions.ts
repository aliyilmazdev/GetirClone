import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
export default {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
};
