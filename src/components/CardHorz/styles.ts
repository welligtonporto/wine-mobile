import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 12px 16px;
`;

export const ContainerInfo = styled.View`
    padding: 16px 8px 8px;
    background-color: #FFF;
    border-color: #ddd;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    elevation: 2;
    border-radius: 4px;
    flex-direction: row;
`;

export const ContainerContent = styled.View`
    flex-shrink: 1;
`;

export const ContainerImage = styled.View`
    position: relative;
    align-items: center;
    margin-bottom: 12px;
`;

export const StimulusImage = styled.Image`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const Image = styled.Image`
    height: 110px;
    resize-mode: contain;
`;

export const Title = styled.Text`
    font-family: 'LatoBold';
    font-size: 14px;
    color: #111111;
    margin-bottom: 12px;
    
`;

export const ContainerPrice = styled.Text`
    font-family: 'LatoBold';
    font-size: 20px;
    color: #C81A78;
    margin-bottom: 16px;
`;

export const PriceCurrency = styled.Text`
    font-size: 14px;
`;

export const PriceCents = styled.Text`
    font-size: 16px;
`;
