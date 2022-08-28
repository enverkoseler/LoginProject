import * as React from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainContext } from '../../utils/context';
export default class Home extends React.Component {
    static contextType = MainContext
    constructor(props) {
        super(props);
        this.state = {
            email: null
        }
    }
    componentWillMount() {
        const setToken = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('@userToken');
            } catch (e) {
                console.log(e);
            }
            if (userToken) {
                this.setState({
                    email: userToken
                })
            }
            else {

            }
        }
        setToken();
    }
    logOut = () => {
        const context = this.context;
        context.signOut();
    }
    render() {
        return (
            <View style={{ flex: 1, margin: 20 }}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>{this.state.email}</Text>
                <Button title="Çıkış Yap" onPress={() => this.logOut()} />
            </View>
        );
    }
}