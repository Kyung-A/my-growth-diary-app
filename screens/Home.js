import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import styled from "styled-components/native";
import { Dimensions, TouchableOpacity, Image, Text } from "react-native";
import ChartContainer from "../components/Chart";
import CanlendarWrap from "../components/Canlendar";

const { height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const TextWrap = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
  padding-top: 50px;
`;

const UserName = styled.Text`
  font-size: 16px;
  color: #ffcb68;
`;

const Challenge = styled.Text`
  color: #ffcb68;
  font-size: 22px;
  font-weight: bold;
`;

const Day = styled.Text`
  color: #ccd5d1;
  font-size: 12px;
  font-weight: 500;
`;

const SecContainer = styled.View`
  position: relative;
  height: ${HEIGHT / 1.4}px;
`;

const CanlendarContainer = styled.View`
  position: absolute;
  top: 80px;
  background-color: #fff;
  padding-top: 30px;
`;

export default ({ navigation, loading }) => (
  <ScrollWrap loading={loading}>
    <Container>
      <TextWrap>
        <UserName>null님 안녕하세요!</UserName>
        <TouchableOpacity
          onPress={() => navigation.navigate("TargetRegistration")}
        >
          <Challenge>목표를 등록해주세요.</Challenge>
        </TouchableOpacity>
        <Day>2020.08.24 ~ 2020.09.30</Day>
      </TextWrap>
      <ChartContainer />
      <SecContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate("Diary")}
          style={{ alignItems: "center", zIndex: 1 }}
        >
          <Text style={{ fontSize: 16, color: "#394a54", fontWeight: "bold" }}>
            오늘의 일기쓰기
          </Text>
          <Image
            source={require("../assets/btn.png")}
            style={{ aspectRatio: 0.6, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <CanlendarContainer>
          <CanlendarWrap />
        </CanlendarContainer>
      </SecContainer>
    </Container>
  </ScrollWrap>
);
