import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type LoginScreenProps = StackScreenProps<
  RootStackParamList,
  'Login'
>;
export type RegisterScreenProps = StackScreenProps<
  RootStackParamList,
  'Register'
>;
export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  'Home'
>;
