import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 24}px;
  margin-bottom: 32px;
`;

export const Menu = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``;

export const BalanceBox = styled.View`
  padding: 24px;
  background-color: #f1f3f6;
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UsersList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center"
  }
})``;

export const UserItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 100px;
  height: 120px;
  padding: 24px;
  border-radius: 10px;
  background-color: #f1f3f6;
  margin-right: ${props => (props.last ? "24px" : "10px")};
  justify-content: center;
  align-items: center;
`;

export const UserItemPhoto = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  border-width: 2px;
  border-color: #b8bbce;
`;

export const Services = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-horizontal: -20px;
`;

export const Service = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 25%;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const ServiceBox = styled.View`
  height: 60px;
  border-radius: 10px;
  background-color: #f1f3f6;
  justify-content: center;
  align-items: center;
`;
