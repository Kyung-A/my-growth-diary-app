import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import { View, Text, Button } from "react-native";

export default ({ loading }) => (
  <ScrollWrap
    loading={loading}
    contentContainerStyle={{
      flex: 1,
      alignItems: "center",
      paddingTop: 50,
    }}
  >
    <View>
      <Text
        style={{
          paddingHorizontal: 30,
          textAlign: "center",
          fontSize: 17,
          color: "#394a54",
          fontWeight: "bold",
        }}
      >
        안녕하세요. 개발자 남은경입니다. 이 앱은 계속 상시 업데이트 될
        예정입니다.
      </Text>
    </View>
  </ScrollWrap>
);
