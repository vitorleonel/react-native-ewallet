import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "stretch"};
`;
