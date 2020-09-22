import React from "react";
import styled from "styled-components/native";
import Checkbox from "react-native-modest-checkbox";

const Container = styled.View`
  flex-direction: row;
  padding-left: 15px;
`;

const Check = () => (
  <Container>
    <Checkbox
      label=""
      checkedImage={require("../assets/check1.jpg")}
      uncheckedImage={require("../assets/check1.jpg")}
      onChange={(checked) => console.log("0% 선택")}
    />
    <Checkbox
      label=""
      checkedImage={require("../assets/check2.jpg")}
      uncheckedImage={require("../assets/check2.jpg")}
      onChange={(checked) => console.log("25% 선택")}
    />
    <Checkbox
      label=""
      checkedImage={require("../assets/check3.jpg")}
      uncheckedImage={require("../assets/check3.jpg")}
      onChange={(checked) => console.log("50% 선택")}
    />
    <Checkbox
      label=""
      checkedImage={require("../assets/check4.png")}
      uncheckedImage={require("../assets/check4.png")}
      onChange={(checked) => console.log("75% 선택")}
    />
    <Checkbox
      label=""
      checkedImage={require("../assets/check5.png")}
      uncheckedImage={require("../assets/check5.png")}
      onChange={(checked) => console.log("100% 선택")}
    />
  </Container>
);

export default Check;
