import React from "react";

import { Container } from "./styles";

export default function Row(props) {
  return <Container {...props}>{props.children}</Container>;
}
