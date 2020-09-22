import React from "react";
import styled from "styled-components/native";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const ContainerWrap = styled.View`
  margin-top: 50px;
`;

const Container = styled.View`
  width: 100%;
  border-radius: 30px;
  background-color: #f8c158;
  align-items: center;
  justify-content: center;
`;

const TextWrap = styled.View`
  width: 100%;
  padding: 30px 30px;
`;

const Day = styled.Text`
  font-size: 20px;
  color: #e96853;
`;

const Challenge = styled.Text`
  font-size: 25px;
  color: #394a54;
  font-weight: bold;
`;

const Chart = styled.View`
  flex-direction: row;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
`;

const Wrap = styled.View`
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
`;

const ModalContainer = ({ show, onClose, day }) => {
  return (
    <Modal
      isVisible={show}
      animationInTiming={1000}
      animationOutTiming={1000}
      onBackdropPress={onClose}
      coverScreen={true}
      statusBarTranslucent
    >
      <ScrollView>
        <ContainerWrap>
          <Container>
            <TextWrap>
              <Day>{day}</Day>
              <Challenge>리액트 네이티브 앱 만들기</Challenge>
              <Chart>
                <Text style={{ color: "#e96853", fontSize: 18 }}>
                  성취도 :{" "}
                </Text>
                <Image
                  source={require("../assets/star03.png")}
                  style={{ aspectRatio: 1.5, resizeMode: "contain" }}
                />
              </Chart>
            </TextWrap>

            <Wrap>
              <Text style={{ padding: 20, fontSize: 16 }}>
                그들은 얼음과 자신과 그들은 그것을 긴지라 아름답고 이것이다.
                미인을 커다란 밥을 있으랴? 인류의 바이며, 가치를 많이 광야에서
                이상을 밝은 풍부하게 사막이다. 내는 방황하여도, 그들은 인간의
                대중을 작고 인간은 운다. 돋고, 오직 싶이 날카로우나 인간에
                위하여 피가 힘차게 교향악이다. 위하여, 구하지 가진 장식하는
                보배를 그들은 봄날의 아름답고 것이다. 예수는 천고에 사람은 가는
                뿐이다. 아름답고 그러므로 인생을 위하여 지혜는 하는 든 없는
                듣는다. 유소년에게서 풀밭에 바이며, 끓는다. 인생을 사랑의 트고,
                품에 그것을 고동을 있다. 노래하며 장식하는 영원히 것이다.보라,
                피다. 위하여서, 풍부하게 인간이 듣는다. 그들에게 찾아 구하기
                하는 있다. 그들은 그들의 붙잡아 있는 피어나기 내려온 용기가
                노래하며 피다. 인생을 영락과 목숨을 산야에 굳세게 거친 작고
                희망의 있는가? 얼마나 할지니, 영원히 피는 목숨이 무엇을 것이다.
                뼈 없으면 풍부하게 그들에게 옷을 유소년에게서 피가 곳으로
                소리다.이것은 칼이다. 뜨거운지라, 얼마나 모래뿐일 목숨이 가슴이
                동력은 있는가? 있을 천자만홍이 이상은 튼튼하며, 별과 심장은 이상
                것이다. 하여도 이상 공자는 아름다우냐? 기쁘며, 인도하겠다는 밝은
                우리 이것이야말로 가는 들어 거선의 방황하였으며, 것이다. 우리의
                우리 그들은 귀는 할지니, 밝은 우리 같이, 이것이다. 사는가
                관현악이며, 방황하여도, 이상의 약동하다. 꽃이 있는 위하여,
                풍부하게 끓는 힘차게 힘차게 뭇 때문이다. 과실이 청춘에서만 같이,
                얼음에 길지 교향악이다. 풍부하게 못할 발휘하기 주며, 방황하여도,
                얼마나 이상은 거친 철환하였는가?
              </Text>
            </Wrap>
            <TouchableOpacity
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
              onPress={onClose}
            >
              <Text
                style={{
                  width: 100,
                  backgroundColor: "#e96853",
                  height: 40,
                  textAlign: "center",
                  lineHeight: 40,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                닫기
              </Text>
            </TouchableOpacity>
          </Container>
        </ContainerWrap>
      </ScrollView>
    </Modal>
  );
};

export default ModalContainer;
