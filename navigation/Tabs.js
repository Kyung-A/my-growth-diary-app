import React, { useLayoutEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Collect from "../screens/Collect";
import Settings from "../screens/Settings";

const Tabs = createBottomTabNavigator();

const getTitle = (route) =>
  route?.state?.routeNames[route.state.index] || "Home";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getTitle(route);
    navigation.setOptions(
      {
        title: name,
        headerTitleAlign: "center",
        headerShown: name !== "Home",
      },
      [route]
    );
  });
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName = "";
          if (route.name === "Home") {
            iconName = require("../assets/logo.png");
          } else if (route.name === "나의 목표 모아보기") {
            iconName = require("../assets/star.png");
          } else if (route.name === "설정") {
            iconName = require("../assets/setting.png");
          }
          return <Image source={iconName} style={{ width: 35, height: 31 }} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#394a54",
          borderTopColor: "#394a54",
        },
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="나의 목표 모아보기" component={Collect} />
      <Tabs.Screen name="설정" component={Settings} />
    </Tabs.Navigator>
  );
};
