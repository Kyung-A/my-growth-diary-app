import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";

const data = [
  {
    month: new Date(2015, 0, 1),
    apples: 100,
    bananas: 100,
    cherries: 100,
    dates: 100,
    oranges: 100,
  },
];

const colors = ["#394a54"];
const keys = ["apples", "bananas", "cherries", "dates"];

const Wrap = styled.View`
  align-items: center;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  margin-bottom: 30px;
`;

const ChartContainer = () => (
  <Wrap>
    <StackedBarChart
      style={{
        height: 28,
        borderWidth: 3,
        borderColor: "#394a54",
        borderRadius: 10,
        width: 300,
      }}
      keys={keys}
      colors={colors}
      data={data}
      showGrid={false}
      contentInset={{ top: -10, bottom: -10 }}
      horizontal={true}
    />
    <Image
      source={require("../assets/star02.png")}
      style={{
        aspectRatio: 1.4,
        resizeMode: "contain",
        marginBottom: 13,
      }}
    />
  </Wrap>
);

export default ChartContainer;
