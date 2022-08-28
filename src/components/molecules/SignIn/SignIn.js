import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemedInput } from '../../atoms/TextInput/TextInput';
import { ThemedButton } from '../../atoms/Button/Button';
import { MainContext } from '../../../../utils/context';
import {
    InputGroup,
    ButtonPanel,
    FormPanel,
    Body
} from './Styled';
export default class SignInScreen extends React.Component {
    static contextType = MainContext
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    checkLogin = () => {
        const { email, password } = this.state;
        const context = this.context;
        context.signIn({ 'email': email, 'password': password });
    }
    render() {
        const { email, password } = this.state;
        return (
            <Body>
                <FormPanel>
                    <InputGroup>
                        <ThemedInput
                            placeholder="E-Mail Adresin"
                            value={email}
                            onChangeText={(item) => this.setState({ email: item })}
                        />
                    </InputGroup>
                    <InputGroup>
                        <ThemedInput
                            placeholder="Şifren"
                            value={password}
                            onChangeText={(item) => this.setState({ password: item })}
                            secureTextEntry
                        />
                    </InputGroup>
                    <TouchableOpacity>
                        <Text>Şifremi Unuttum</Text>
                    </TouchableOpacity>
                </FormPanel>
                <ButtonPanel>
                    <ThemedButton title="Giriş Yap" onPress={() => this.checkLogin()} />
                </ButtonPanel>
            </Body>
        );
    }
}