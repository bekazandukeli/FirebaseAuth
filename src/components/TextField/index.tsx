import React, {useState} from 'react';
import {TextInputProps, ViewStyle} from 'react-native';
import Envelope from '../../assets/images/Envelope';
import Lock from '../../assets/images/Lock';
import User from '../../assets/images/User';
import {Container, IconContainer, Line, Row, StyledInput} from './styled';

interface Props extends TextInputProps {
  type: 'email' | 'username' | 'password';
  containerStyle?: ViewStyle;
}
export default function TextField({
  type,
  containerStyle,
  ...otherProps
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container style={containerStyle}>
      <Row>
        <IconContainer>
          {type === 'email' ? (
            <Envelope />
          ) : type === 'password' ? (
            <Lock />
          ) : type === 'username' ? (
            <User />
          ) : null}
        </IconContainer>
        <StyledInput
          placeholderTextColor="#8A898E"
          secureTextEntry={type === 'password'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...otherProps}
        />
      </Row>
      <Line {...{isFocused}} />
    </Container>
  );
}
