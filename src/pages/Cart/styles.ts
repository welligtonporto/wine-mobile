import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F5F5F5;
`;

export const ItemsList = styled.FlatList`
  padding: 32px 0;
`;

export const InfoText = styled.Text`
  color: #555555;
  font-size: 16px;
  font-family: "NeoRegular";
  margin-bottom: 16px;
  text-align: center;
`;

export const ContainerInfo = styled.View`
  margin: 24px 16px 12px;
`;

export const Loader = styled.ActivityIndicator``;

export const FooterCart = styled.View`
  margin-bottom: 60px;
`;
