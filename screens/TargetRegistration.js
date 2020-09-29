import React from "react";
import { Image, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import ScrollWrap from "../components/ScrollWrap";
import DatePicker from "react-native-datepicker";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #394a54;
  font-size: 17px;
  margin: 30px 0px;
  font-weight: bold;
`;

const View = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const Text = styled.Text`
  color: #394a54;
  font-size: 15px;
  margin-top: 15px;
`;

export default ({ navigation }) => (
  <ScrollWrap contentContainerStyle={{ flex: 1 }}>
    <Container>
      <Image
        source={require("../assets/logo.png")}
        style={{
          aspectRatio: 0.8,
          resizeMode: "contain",
        }}
      />
      <Title>새로운 목표를 설정해주세요.</Title>
      <TextInput
        placeholder="15자 내외"
        style={{
          width: 250,
          borderStyle: "solid",
          borderBottomColor: "#ffcb68",
          borderBottomWidth: 1,
        }}
      />
      <Title style={{ fontWeight: "400" }}>날짜 설정</Title>
      <View>
        <DatePicker
          mode="date"
          style={{ width: 200 }}
          confirmBtnText="OK"
          cancelBtnText="Cancel"
        />
        <Text>부터</Text>
      </View>
      <View>
        <DatePicker
          mode="date"
          style={{ width: 200 }}
          confirmBtnText="OK"
          cancelBtnText="Cancel"
        />
        <Text>까지</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            width: 100,
            height: 50,
            textAlign: "center",
            lineHeight: 50,
            color: "#fff",
            fontSize: 16,
            marginVertical: 20,
          }}
        >
          등록하기
        </Text>
      </TouchableOpacity>
    </Container>
  </ScrollWrap>
);
