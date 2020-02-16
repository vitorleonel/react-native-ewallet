import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: ${props => (props.width ? `${props.width}px` : "auto")};
  height: ${props => (props.height ? `${props.height}px` : "50px")};
  background-color: ${props => props.backgroundColor || "#FFAC30"};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : "0")};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : "0"};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : "0")};
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight}px` : "0"};

  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
