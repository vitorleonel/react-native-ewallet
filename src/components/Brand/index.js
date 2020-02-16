import React from "react";

import { Image } from "./styles";

export default function Brand({ type = "horizontal" }) {
  return <Image type={type} />;
}
