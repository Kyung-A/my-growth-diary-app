import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import { View, Text } from "react-native";

export default ({ loading }) => (
  <ScrollWrap loading={loading}>
    <View>
      <Text>나의 목표 모아보기</Text>
    </View>
  </ScrollWrap>
);
