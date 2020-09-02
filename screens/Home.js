import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>메인 화면</Text>
    <Button
      title="오늘의 일기 쓰기"
      onPress={() => navigation.navigate("Diary")}
    ></Button>
  </View>
);
