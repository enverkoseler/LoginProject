import {
    RESTORE_TOKEN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGN_UP,
    LOGOUT,
} from "../types";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = async () => user
    ? { isLoggedIn: false, user, }
    : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
    const { type, token } = action;
    switch (type) {
        case RESTORE_TOKEN:
            return {
                isLoggedIn: token ? true : false,
                userToken: token,
                isLoading: false,
                isSignout: false,
            };
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                isSignout: false,
                userToken: token,
            };
        case LOGIN_FAIL:
            return {
                isLoggedIn: false,
                isSignout: true,
                userToken: null,
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                isSignout: true,
                userToken: null,
            };
        default:
            return state;
    }
}

export const login = (userData) => (dispatch) => {
    if (userData) {
        AsyncStorage.setItem('@userToken', userData.email);
        dispatch({
            type: LOGIN_SUCCESS,
            userToken: userData,
        });
    }
    else {
        dispatch({
            type: LOGIN_FAIL
        });
        AsyncStorage.removeItem('@userToken');
        Alert.alert(
            "Uyarı!",
            "Kullanıcı adınızı veya şifrenizi lütfen kontrol ediniz.",
            [
                { text: "Tamam", style: "cancel" }
            ]
        );
    }
    return Promise.resolve();
};

export const logout = () => (dispatch) => {
    AsyncStorage.removeItem('@userToken');
    dispatch({
        type: LOGOUT,
    });
};