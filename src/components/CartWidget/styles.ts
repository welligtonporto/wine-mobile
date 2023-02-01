import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    position: relative;
`;

export const CartImage = styled.Image`
    
`;

export const CartBudget = styled.View`
    background-color: #FFF;
    border-radius: 20px;
    min-width: 20px;
    height: 20px;
    padding: 0 2px;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    bottom: 0;
`;

// color: #00B495;
export const CartBudgetText = styled.Text`
    color: #00B495;
    font-size: 12px;
    fontFamily: 'LatoRegular'
`;
