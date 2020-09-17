import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import { View, Text, Button } from "react-native";

export default ({ loading }) => (
  <ScrollWrap loading={loading}>
    <View>
      <Text>설정화면</Text>
    </View>
  </ScrollWrap>
);
