import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ThemeButton = styled(TouchableOpacity)`
    background-color: rgb(52,49,49);
    padding: 15px;
    text-align: center;
    border-radius: 30px;
`;

export const BtnText = styled.Text`
    font-size: 17px;
    text-align: center;
    color: #fff;
    font-weight: 600;
`;

