import React from "react";

import { Image } from "./styles";

export default function Brand(props) {
  props.type = props.type || "horizontal";

  return <Image {...props} />;
}
