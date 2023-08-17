import { View, Text, Image, FlatList, ViewToken } from "react-native";
import React, { useState } from "react";
import dimensions from "../../constants/dimensions";

const index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState<string[]>([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  const onViewRef = React.useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index ?? 0);
      }
      //console.log(viewableItems);
    }
  );
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <FlatList
      data={banners}
      horizontal
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}
      showsHorizontalScrollIndicator={false}
      snapToInterval={dimensions.SCREEN_WIDTH}
      snapToAlignment="center"
      decelerationRate={"fast"}
      renderItem={(item) => (
        <Image
          source={{ uri: item.item }}
          style={{
            width: dimensions.SCREEN_WIDTH,
            height: dimensions.SCREEN_HEIGHT / 4.5,
            resizeMode: "stretch",
          }}
        />
      )}
    />
  );
};

export default index;
