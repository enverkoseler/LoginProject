import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignInScreen from '../../molecules/SignIn/SignIn';
import SignUpScreen from '../../molecules/SignUp/SignUp';
import {
    Body,
    Card,
    TextContent,
    H2,
    H5,
} from './Styled';
const Tab = createMaterialTopTabNavigator();
export default function SignInUp() {
    return (
        <Body>
            <Card>
                <TextContent>
                    <H2>Merhaba</H2>
                    <H5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H5>
                </TextContent>
                <Tab.Navigator>
                    <Tab.Screen name="SignIn" options={{ title: 'Giriş Yap', tabBarLabelStyle: { textTransform: 'none' } }} component={SignInScreen} />
                    <Tab.Screen name="SignUp" options={{ title: 'Üye Ol', tabBarLabelStyle: { textTransform: 'none' } }} component={SignUpScreen} />
                </Tab.Navigator>
            </Card>
        </Body>
    );
}