import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
    padding: 16px;
    padding-top: ${(StatusBar.currentHeight || 0) + 16}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    border-width: 0;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    elevation: 2;
    z-index: 1;
`;

export const Logo = styled.Image`
    resize-mode: contain;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackImage = styled.Image``;
