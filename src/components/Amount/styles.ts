import styled from 'styled-components/native';

export const Container = styled.View`
    height: 40px;
    flex-direction: row;
    background-color: #EAEAEA;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    width: 100px;
`;

export const Input = styled.TextInput`
    fontFamily: 'LatoRegular';
    font-size: 14px;
    color: #555555;
    width: 40px;
    height: 100%;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    width: 30px;    
    height: 40px;
    line-height: 40px;
`;

export const ButtonText = styled.Text`
    font-family: 'LatoBold';
    text-align: center;
    font-size: 20px;
    color: #555;
`;
