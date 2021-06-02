import React from 'react';
import {PressableProps, Pressable, ViewStyle} from 'react-native';
import {GradientContainer, Title} from './styled';

interface Props extends PressableProps {
  title: string;
  style?: ViewStyle;
}
export default function Button({title, style, ...otherProps}: Props) {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, {...style}]}
      {...otherProps}>
      <GradientContainer
        colors={['#E8B0B6', '#CC8389']}
        useAngle
        angle={177}
        angleCenter={{x: 0.5, y: 0.5}}>
        <Title>{title}</Title>
      </GradientContainer>
    </Pressable>
  );
}
