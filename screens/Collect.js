import React from "react";
import styled from "styled-components";
import ScrollWrap from "../components/ScrollWrap";
import { Text, View, Image } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextWrap = styled.View`
  width: 90%;
  background-color: #fff;
  margin: 15px 0px;
  padding: 15px 25px;
`;

const Day = styled.Text`
  font-size: 14px;
  color: #999999;
`;

const Challenge = styled.Text`
  font-size: 20px;
  color: #e96853;
  font-weight: bold;
`;

const Chart = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 25px;
`;

export default ({ loading }) => (
  <ScrollWrap loading={loading} contentContainerStyle={{ paddingTop: 40 }}>
    <Container>
      <TextWrap>
        <Challenge>리액트 네이티브 앱 만들기</Challenge>
        <Day>2020.08.11 ~ 2020.09.15</Day>
        <Chart>
          <Image
            source={require("../assets/star.png")}
            style={{ resizeMode: "contain", width: 50, height: 28 }}
          />
          <Text style={{ color: "#394a54", fontSize: 22, fontWeight: "bold" }}>
            최종 달성률 : 100%
          </Text>
        </Chart>
      </TextWrap>

      <TextWrap>
        <Challenge>공부 열심히 하기</Challenge>
        <Day>2020.01.11 ~ 2020.03.01</Day>
        <Chart>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 50, height: 28, resizeMode: "contain" }}
          />
          <Text style={{ color: "#394a54", fontSize: 22, fontWeight: "bold" }}>
            최종 달성률 : 30%
          </Text>
        </Chart>
      </TextWrap>

      <TextWrap>
        <Challenge>자격증 따기</Challenge>
        <Day>2020.12.11 ~ 2021.01.03</Day>
        <Chart>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 50, height: 28, resizeMode: "contain" }}
          />
          <Text style={{ color: "#394a54", fontSize: 22, fontWeight: "bold" }}>
            최종 달성률 : 70%
          </Text>
        </Chart>
      </TextWrap>

      <TextWrap>
        <Challenge>취업 성공하기</Challenge>
        <Day>2020.06.30 ~ 2020 07.01</Day>
        <Chart>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 50, height: 28, resizeMode: "contain" }}
          />
          <Text style={{ color: "#394a54", fontSize: 22, fontWeight: "bold" }}>
            최종 달성률 : 38%
          </Text>
        </Chart>
      </TextWrap>

      <TextWrap>
        <Challenge>아침 일찍 일어나기</Challenge>
        <Day>2020.08.28 ~ 2020.08.31</Day>
        <Chart>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 50, height: 28, resizeMode: "contain" }}
          />
          <Text style={{ color: "#394a54", fontSize: 22, fontWeight: "bold" }}>
            최종 달성률 : 20%
          </Text>
        </Chart>
      </TextWrap>
    </Container>
  </ScrollWrap>
);
