import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
`;

export const LeftEffect = styled.ImageBackground.attrs({
  source: require("../../images/login-background.png")
})`
  width: 196px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const Content = styled.View`
  width: ${screenWidth - 120}px;
  margin-left: auto;
  padding: 80px 24px;
  background-color: #ffffff;

  justify-content: space-between;
`;
