import React from "react";

import { Container, LeftEffect, Content, NextContent } from "./styles";

import Brand from "../../components/Brand";
import Text from "../../components/Text";
import Button from "../../components/Button";

export default function Auth() {
  return (
    <Container>
      <LeftEffect />

      <Content>
        <NextContent>
          <Text size="24" lineHeight="32" weight={600} color="#1B1D28">
            06:20 PM
          </Text>

          <Text size="14" marginTop="4">
            Nov.10.2020 | Wednesday
          </Text>
        </NextContent>

        <NextContent>
          <Brand type="vertical" width="90" height="90" />

          <Text marginTop="16" marginRight="24">
            Open An Account For Digital E-Wallet Solutions.Instant Payouts.{" "}
          </Text>

          <Text marginTop="24">Join For Free.</Text>
        </NextContent>

        <NextContent>
          <Button text="Sign in" marginBottom="24" />
          <Button text="Create an account" backgroundColor="transparent" />
        </NextContent>
      </Content>
    </Container>
  );
}
