import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "./src/constants/colors";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CampaignsScreen from "./src/screens/CampaignsScreen";
import CategoryFilterScreen from "./src/screens/CategoryFilterScreen";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  FontAwesome5,
  AntDesign,
  Foundation,
} from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import { useNavigation } from "@react-navigation/native";
import dimensions from "./src/constants/dimensions";
import BasketScreen from "./src/screens/BasketScreen";
import { BasketScreenNavigationProp } from "./src/models/NavigationModels";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "./src/redux/slices/BasketSlice";
import { basketStateType } from "./src/models/Basket";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomMiddleButton = ({ children }: any) => {
  return (
    <TouchableOpacity
      style={{
        width: 58,
        height: 58,
        backgroundColor: colors.mainPurple,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: -8,
        borderWidth: 3,
        borderColor: "white",
      }}
    >
      <Entypo name="list" size={32} color={colors.mainYellow} />
    </TouchableOpacity>
  );
};

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.mainPurple,
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomMiddleButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CampaignsScreen"
        component={CampaignsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  const basketNavigation = useNavigation<BasketScreenNavigationProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { totalBasket } = useSelector(
    (state: { BasketSlice: basketStateType }) => state.BasketSlice
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: colors.mainPurple },
          headerTitle: () => (
            <Image
              source={require("./assets/getirlogo.png")}
              style={{ width: 65, height: 25 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryFilterScreen"
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.mainPurple },
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => basketNavigation.navigate("BasketScreen", {})}
              style={{
                width: dimensions.SCREEN_WIDTH * 0.22,
                height: 33,
                backgroundColor: "white",
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("./assets/cart.png")}
                style={{ width: 23, height: 23, marginHorizontal: 6 }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F3EFFE",
                  height: 33,
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>
                  <Text>{"\u20ba"}</Text>
                  <Text
                    style={{
                      color: colors.mainPurple,
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    {totalBasket && totalBasket.toFixed(2)}
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerTintColor: "white",
          presentation: "fullScreenModal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: colors.mainPurple },
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerTintColor: "white",
          presentation: "fullScreenModal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => dispatch(clearBasket())}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: colors.mainPurple },
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Sepetim
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
