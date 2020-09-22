import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

const Containter = styled.View`
  background-color: #44a67b;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Containter>
    <Image
      source={require("../assets/logo.png")}
      style={{ aspectRatio: 0.8, resizeMode: "contain" }}
    />
    <Image
      source={require("../assets/textLogo.png")}
      style={{ aspectRatio: 2.8, resizeMode: "contain", marginBottom: 80 }}
    />
  </Containter>
);
