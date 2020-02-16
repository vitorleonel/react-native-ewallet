import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "stretch"};

  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : "0")};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : "0"};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : "0")};
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight}px` : "0"};

  padding-top: ${props => (props.paddingTop ? `${props.paddingTop}px` : "0")};
  padding-bottom: ${props =>
    props.paddingBottom ? `${props.paddingBottom}px` : "0"};
  padding-left: ${props =>
    props.paddingLeft ? `${props.paddingLeft}px` : "0"};
  padding-right: ${props =>
    props.paddingRight ? `${props.paddingRight}px` : "0"};
`;
