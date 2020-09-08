import React from "react";
import ScrollWrap from "../components/ScrollWrap";
import styled from "styled-components/native";
import { View, Text, Button, Dimensions } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";

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
`;

const UserName = styled.Text`
  font-size: 16px;
  color: #ffcb68;
`;

const Challenge = styled.Text`
  color: #ffcb68;
  font-size: 20px;
  font-weight: bold;
`;

const Day = styled.Text`
  color: #ccd5d1;
  font-size: 12px;
  font-weight: 500;
`;

const data = [
  {
    month: new Date(2015, 0, 1),
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400,
    oranges: 400,
  },
  {
    month: new Date(2015, 1, 1),
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2015, 2, 1),
    apples: 640,
    bananas: 960,
    cherries: 3640,
    dates: 400,
  },
  {
    month: new Date(2015, 3, 1),
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400,
  },
];

const colors = ["#7b4173", "#a55194", "#ce6dbd", "#de9ed6"];
const keys = ["apples", "bananas", "cherries", "dates"];

export default ({ navigation, loading }) => (
  <ScrollWrap loading={loading}>
    <Container>
      <TextWrap>
        <UserName>null님 안녕하세요!</UserName>
        <Challenge>현재목표 : 리액트 네이티브 앱 만들기</Challenge>
        <Day>2020.08.24 ~ 2020.09.30</Day>
      </TextWrap>
      <StackedBarChart
        style={{ height: 200 }}
        keys={keys}
        colors={colors}
        data={data}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
      />
      <Button
        title="오늘의 일기 쓰기"
        onPress={() => navigation.navigate("Diary")}
      ></Button>
    </Container>
  </ScrollWrap>
);
