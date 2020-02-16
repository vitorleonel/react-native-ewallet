import React from "react";

import { Container } from "./styles";

import Text from "../Text";

export default function Button(props) {
  return (
    <Container {...props}>
      <Text color={props.textColor || "#212330"}>{props.text}</Text>
    </Container>
  );
}
