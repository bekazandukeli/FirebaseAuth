import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  flex: 1;
  padding: 7px 0 7px 11px;
`;
export const Container = styled.View``;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const IconContainer = styled.View`
  width: 20px;
  opacity: 0.6;
`;
export const Line = styled.View<{isFocused: boolean}>`
  height: 1px;
  opacity: ${({isFocused}) => (isFocused ? 0.7 : 0.24)};
  background-color: ${({isFocused}) => (isFocused ? '#CC8389' : '#a3a3a3')};
`;
