import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Diary from "../screens/Diary";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerStyle: {
        backgroundColor: "#f8c158",
        borderBottomColor: "#f8c158",
        shadowColor: "#f8c158",
      },
      headerTintColor: "#394a54",
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Diary" component={Diary} />
  </Stack.Navigator>
);
