import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import { View, Text } from "react-native";

export default ({ loading }) => (
  <ScrollWrap loading={loading}>
    <View>
      <Text>일기 작성</Text>
    </View>
  </ScrollWrap>
);
