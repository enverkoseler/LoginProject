import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainContext } from '../../utils/context';
import SignInUp from '../components/organisms/SignInUp/SignInUp';
import SplashScreen from '../components/organisms/SplashScreen/SplashScreen';
import HomeScreen from '../screens/Home';
import { login, logout } from '../redux/modules/login';
const Stack = createStackNavigator();
export default function App({ navigation }) {
    const dispatch = useDispatch();
    const [isLoad, setIsload] = React.useState(true);
    const { isLoggedIn, isLoading, isSignout } = useSelector(state => state.loginData);
    React.useEffect(() => {
        const loginAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('@userToken');
            } catch (e) {
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
            setIsload(isLoading);
        };

        loginAsync();
    }, [isLoggedIn, isLoading]);

    const authContext = React.useMemo(() => ({
        signIn: async (data) => {
            dispatch(login(data))
        },
        signOut: () => {
            dispatch(logout())
        },
        signUp: async (data) => {
            dispatch({ type: 'SIGN_UP', token: data });
        },
    }),
        []
    );
    return (
        <MainContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {isLoad ? (
                        <Stack.Screen name="Splash" component={SplashScreen} />
                    ) : !isLoggedIn ? (
                        <Stack.Screen
                            name="SignIn"
                            component={SignInUp}
                            options={{
                                title: 'Giriş Yap',
                                animationTypeForReplace: isSignout ? 'pop' : 'push',
                            }}
                        />
                    ) : (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </MainContext.Provider>
    );
}
