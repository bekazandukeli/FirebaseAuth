import React from 'react';
import {View, Text, ActivityIndicator, Platform, ViewProps} from 'react-native';
import UserIcon from '../../assets/images/UserIcon';
import {Container, UserNameContainer, UserNameText} from './styled';

interface Props extends ViewProps {
  userName: string;
}
export default function UserName({userName, ...otherProps}: Props) {
  return (
    <Container {...otherProps}>
      <UserIcon />
      <UserNameContainer>
        {!!userName ? (
          <UserNameText>{userName}</UserNameText>
        ) : (
          <ActivityIndicator
            size="small"
            color={Platform.OS === 'ios' ? 'gray' : '#159687'}
          />
        )}
      </UserNameContainer>
    </Container>
  );
}
