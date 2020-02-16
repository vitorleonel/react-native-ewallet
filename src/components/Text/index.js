import React from "react";

import { Content } from "./styles";

export default function Text(props) {
  return <Content {...props}>{props.children}</Content>;
}
