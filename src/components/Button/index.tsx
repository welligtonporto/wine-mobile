import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;
