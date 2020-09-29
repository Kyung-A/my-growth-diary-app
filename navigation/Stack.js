import * as React from "react";
import {
  AsyncStorage,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Diary from "../screens/Diary";
import Splash from "../screens/Splash";
import TargetRegistration from "../screens/TargetRegistration";

const Stack = createStackNavigator();
const AuthContext = React.createContext();

const SigInScreen = () => {
  const [username, setUsername] = React.useState("");
  const { signIn } = React.useContext(AuthContext);
  return (
    <View
      style={{
        backgroundColor: "#44a67b",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{ aspectRatio: 0.8, resizeMode: "contain" }}
      />
      <Text
        style={{
          color: "#394a54",
          fontSize: 17,
          marginVertical: 20,
          fontWeight: "bold",
        }}
      >
        처음 방문하셨군요! 닉네임을 정해주세요.
      </Text>
      <TextInput
        placeholder="닉네임"
        value={username}
        onChangeText={setUsername}
        style={{
          width: 200,
          borderStyle: "solid",
          borderBottomColor: "#ffcb68",
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity title="로그인" onPress={() => signIn({ username })}>
        <Text
          style={{
            width: 100,
            height: 50,
            textAlign: "center",
            lineHeight: 50,
            color: "#fff",
            fontSize: 16,
            marginVertical: 20,
          }}
        >
          로그인
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function userAuth({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    { isLoading: true, isSignout: false, userToken: null }
  );
  React.useEffect(() => {
    const bootStrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log("error");
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootStrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
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
        {state.isLoading ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
        ) : state.userToken === null ? (
          <Stack.Screen
            name="SignIn"
            component={SigInScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Diary" component={Diary} />
            <Stack.Screen
              name="TargetRegistration"
              component={TargetRegistration}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
