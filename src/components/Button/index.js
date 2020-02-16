import React from "react";

import { Container } from "./styles";

import Text from "../Text";

export default function Button(props) {
  return (
    <Container {...props}>
      {props.leftIcon}

      <Text
        color={props.textColor || "#212330"}
        weight={props.textWeight}
        marginLeft={props.leftIcon && "8"}
        marginRight={props.rightIcon && "8"}
      >
        {props.text}
      </Text>

      {props.rightIcon}
    </Container>
  );
}
