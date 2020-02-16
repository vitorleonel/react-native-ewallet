import styled from "styled-components/native";

export const Image = styled.Image.attrs(props => ({
  source: require(`../../images/brand-${props.type}.png`)
}))``;
