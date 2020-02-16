import styled from "styled-components/native";

import ImageHorizontal from "../../images/brand-horizontal.png";
import ImageVertical from "../../images/brand-vertical.png";

export const Image = styled.Image.attrs(props => ({
  source: props.type === "horizontal" ? ImageHorizontal : ImageVertical,
  resizeMode: "contain"
}))`
  width: ${props => (props.width ? `${props.width}px` : "auto")};
  height: ${props => (props.height ? `${props.height}px` : "auto")};
`;
