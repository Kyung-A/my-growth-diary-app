import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import Check from "../components/Checkbox";
import styled from "styled-components/native";
import Input from "../components/Input";
import ScrollWrap from "../components/ScrollWrap";

const Container = styled.View`
  background-color: #fff;
  width: 90%;
  height: auto;
  margin: 0 auto;
  align-items: center;
  padding: 0px 10px;
  position: relative;
  border-radius: 20px;
`;

const Challenge = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #394a54;
  font-weight: bold;
  margin: 20px 0px;
`;

export default ({ loading, onChange, onSubmit }) => (
  <ScrollWrap loading={loading} contentContainerStyle={{ paddingTop: 50 }}>
    <Container>
      <Image
        source={require("../assets/logo.png")}
        style={{
          marginTop: -40,
          marginLeft: 5,
          aspectRatio: 0.7,
          resizeMode: "contain",
        }}
      />
      <Challenge>리액트 네이티브 앱 만들기</Challenge>
      <Check />
      <Input
        placeholder={"오늘 하루 목표를 달성하기 위해 했던 이야기들을 써보세요!"}
        onChange={onChange}
        onSubmit={onSubmit}
        style={{ height: 500 }}
      />
      <TouchableOpacity
        style={{
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            borderRadius: 20,
            width: 150,
            backgroundColor: "#e96853",
            height: 40,
            textAlign: "center",
            lineHeight: 40,
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          등록하기
        </Text>
      </TouchableOpacity>
    </Container>
  </ScrollWrap>
);
