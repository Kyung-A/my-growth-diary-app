import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import { View, Text, Button } from "react-native";
import ModalContainer from "../components/Modal";

export default ({ loading }) => (
  <ScrollWrap loading={loading}>
    <View>
      <ModalContainer />
    </View>
  </ScrollWrap>
);
