import React, { useState } from "react";

import {
  Container,
  Header,
  Menu,
  BalanceBox,
  UsersList,
  UserItem,
  UserItemPhoto,
  Services,
  Service,
  ServiceBox
} from "./styles";

import Brand from "../../components/Brand";
import Row from "../../components/Row";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Icon from "../../components/Icon";

import UsersService from "../../services/users";
import ServicesService from "../../services/services";

export default function Wallet() {
  const [users] = useState(UsersService);
  const [services] = useState(ServicesService);

  return (
    <Container>
      <Header>
        <Brand type="horizontal" width="147" height="32" />

        <Menu>
          <Icon name="bars" size={24} color="#3A4276" />
        </Menu>
      </Header>

      <Row paddingLeft="24" paddingRight="24">
        <Text color="#3A4276" weight={600} marginBottom="20">
          Account Overview
        </Text>

        <BalanceBox>
          <Row>
            <Text color="#171822" size={24} weight={600} lineHeight={32}>
              20,600
            </Text>

            <Text color="#3A4276" size={12} weight={400} marginTop="8">
              Current balance
            </Text>
          </Row>

          <Button width={48} height={48} borderRadius={48}>
            <Icon name="plus" size={12} color="#1B1D28" />
          </Button>
        </BalanceBox>
      </Row>
      {/* end balance box */}

      <Row paddingLeft="24" paddingRight="24" marginTop="40">
        <Row direction="row" justifyContent="space-between">
          <Text color="#3A4276" weight={600} marginBottom={20}>
            Send Money
          </Text>

          <Icon name="barcode" size={24} color="#3A4276" />
        </Row>

        <UsersList
          ListHeaderComponent={
            <Button
              width={48}
              height={48}
              borderRadius={48}
              marginLeft={24}
              marginRight={20}
            >
              <Icon name="plus" size={12} color="#1B1D28" />
            </Button>
          }
          keyExtractor={item => String(item.id)}
          data={users}
          renderItem={({ item, index }) => (
            <UserItem last={users.length - 1 == index}>
              <UserItemPhoto source={{ url: item.photo }} />
              <Text color="#3A4276" weight={400} size={12} marginTop={15}>
                {item.name}
              </Text>
            </UserItem>
          )}
        ></UsersList>
      </Row>
      {/* end users list */}

      <Row paddingLeft="24" paddingRight="24" marginTop="40">
        <Row direction="row" justifyContent="space-between">
          <Text color="#3A4276" weight={600} marginBottom={20}>
            Services
          </Text>

          <Icon name="filter" size={24} color="#3A4276" />
        </Row>

        <Services>
          {services.map(service => (
            <Service key={service.id}>
              <ServiceBox>
                <Icon name={service.icon} size={22} color="#3A4276" />
              </ServiceBox>
              <Text
                color="#7B7F9E"
                size={12}
                weight={600}
                align="center"
                marginTop={6}
              >
                {service.name}
              </Text>
            </Service>
          ))}
        </Services>
      </Row>
      {/* end services */}
    </Container>
  );
}
