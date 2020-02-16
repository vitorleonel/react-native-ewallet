import styled from "styled-components/native";

export const Content = styled.Text`
  line-height: ${props =>
    props.lineHeight ? `${props.lineHeight}px` : "22px"};
  font-size: ${props => (props.size ? `${props.size}px` : "16px")};
  font-weight: ${props => props.weight || 500};
  color: ${props => props.color || "#7B7F9E"};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : "0")};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : "0"};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : "0")};
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight}px` : "0"};
`;
