import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 12px 16px;
    flex: 0.5;
    position: relative;
`;

export const ContainerAlign = styled.View``;

export const ContainerInfo = styled.View`
    padding: 16px 8px 8px;
    background-color: #FFF;
    border-width: 0;
    border-color: #ddd;
    shadow-color: #000;
    border-bottom-width: 0;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    elevation: 2;
    border-radius: 4px;
    margin-bottom: 8px;
    align-self: stretch;
    flex-grow: 1;
    justify-content: space-between;
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
    width: 100%;
    height: 180px;
    resize-mode: contain;
`;

export const Title = styled.Text`
    font-family: 'LatoBold';
    font-size: 14px;
    text-align: center;
    color: #111111;
    margin-bottom: 12px;
`;

export const ContainerStimulus = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

export const OldPrice = styled.Text`
    font-family: 'LatoRegular';
    font-size: 10px;
    text-decoration-line: line-through;
    color: #888888;
    margin-right: 6px;
`;

export const Stimulus = styled.Text`
    font-family: 'LatoRegular';
    font-size: 12px;
    padding: 0px 8px;
    height: 16px;
    line-height: 16px;
    background: #F79552;
    border-radius: 2px;
    color: #FFF;
`;

export const ContainerMemberPrice = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

export const ContainerTexts = styled.View`
`;

export const MemberLabel = styled.Text`
    font-family: 'LatoLight';
    font-size: 10px;
    color: #555555;
    text-align: right;
    margin-right: 8px;
`;

export const ContainerPrice = styled.Text`
    font-family: 'LatoBold';
    font-size: 20px;
    color: #C81A78;
`;

export const PriceCurrency = styled.Text`
    font-size: 14px;
`;

export const PriceCents = styled.Text`
    font-size: 16px;
`;

export const NonMemberPrice = styled.Text`
    font-family: 'LatoRegular';
    font-size: 10px;
    text-align: center;
    color: #888888;
`;
