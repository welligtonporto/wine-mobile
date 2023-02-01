import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
    border-color: #ddd;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    elevation: 2;
    border-radius: 4px;
    margin-bottom: 8px;
    background: ${props => props.variation === "secondary" ? "#C81A78" : "#7EBC43"};
`;

export const ButtonText = styled.Text`
    font-family: 'LatoBold';
    font-size: 14px;
    color: #FFFFFF;
`;

