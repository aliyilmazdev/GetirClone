import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ViewToken,
} from "react-native";
import React, { useRef, useState } from "react";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";

const index = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    }
  );

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        height: dimensions.SCREEN_HEIGHT / 3.8,
        paddingBottom: 10,
      }}
    >
      <FlatList
        snapToInterval={dimensions.SCREEN_WIDTH}
        snapToAlignment="center"
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{
          width: dimensions.SCREEN_WIDTH * 0.5,
          height: dimensions.SCREEN_HEIGHT * 0.2,
        }}
        horizontal
        data={images}
        renderItem={(item) => {
          return (
            <Image
              source={{ uri: item.item }}
              style={{
                width: dimensions.SCREEN_WIDTH * 0.5,
                height: dimensions.SCREEN_HEIGHT * 0.2,
                marginTop: 20,
              }}
            />
          );
        }}
      />
      <View style={{ flexDirection: "row" }}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              { width: 8, height: 8, borderRadius: 4, marginHorizontal: 5 },
              index === activeIndex
                ? { backgroundColor: colors.mainPurple }
                : { backgroundColor: "gray" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default index;
