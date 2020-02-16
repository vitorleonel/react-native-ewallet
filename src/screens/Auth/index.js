import React from "react";

import { Container, LeftEffect, Content } from "./styles";

import Brand from "../../components/Brand";
import Row from "../../components/Row";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function Auth() {
  return (
    <Container>
      <LeftEffect />

      <Content>
        <Row>
          <Row
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text size="24" lineHeight="32" weight={600} color="#1B1D28">
              06:20 PM
            </Text>

            <Row direction="row" alignItems="center">
              <Icon name="cloud" size={18} color="#FFAC30" />

              <Text color="#1B1D28" weight={600} marginLeft="8">
                34° C
              </Text>
            </Row>
          </Row>

          <Text size="14" marginTop="4">
            Nov.10.2020 | Wednesday
          </Text>
        </Row>

        <Row>
          <Brand type="vertical" width="90" height="90" />

          <Text marginTop="16" marginRight="24">
            Open An Account For Digital E-Wallet Solutions.Instant Payouts.{" "}
          </Text>

          <Text marginTop="24">Join For Free.</Text>
        </Row>

        <Row>
          <Button
            text="Sign in"
            textWeight={600}
            marginBottom="24"
            rightIcon={<Icon name="long-arrow-right" size={14} />}
          />
          <Button
            text="Create an account"
            textWeight={400}
            backgroundColor="transparent"
          />
        </Row>
      </Content>
    </Container>
  );
}
