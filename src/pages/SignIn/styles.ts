import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

const CreateAccountButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  background: #312e38;

  border-top-width: 1px;
  border-color: #232129;

  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  margin-left: 14px;
`;

export {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
};
