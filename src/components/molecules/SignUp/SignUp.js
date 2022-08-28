import * as React from 'react';
import { ThemedInput } from '../../atoms/TextInput/TextInput';
import { ThemedButton } from '../../atoms/Button/Button';
import {
    InputGroup,
    ButtonPanel,
    FormPanel,
    Body,
    ValidateMessage
} from './Styled';
export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            surName: null,
            email: null,
            password: null,
            emailValidationMessage: null,
        }
    }
    validateEmail = (text) => {
        console.log(text)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            this.setState({
                email: text,
            })
            return true;
        }
        else {
            this.setState({
                email: text,
                emailValidationMessage: null
            })
            return false;
        }
    }
    signUp = () => {
        if (this.validateEmail(this.state.email)) {
            this.setState({
                emailValidationMessage: 'Lütfen geçerli bir e-posta adresi girin.'
            })
        }
        else {
        }
    }
    render() {
        const {
            name,
            surName,
            email,
            password,
            emailValidationMessage } = this.state;
        return (
            <Body>
                <FormPanel>
                    <InputGroup>
                        <ThemedInput
                            placeholder="Adın"
                            value={name}
                            onChangeText={(item) => this.setState({ name: item })}
                        />
                    </InputGroup>
                    <InputGroup>
                        <ThemedInput
                            placeholder="Soyadın"
                            value={surName}
                            onChangeText={(item) => this.setState({ surName: item })}
                        />
                    </InputGroup>
                    <InputGroup>
                        <ThemedInput
                            placeholder="E-mail Adresin"
                            value={email}
                            onChangeText={(item) => this.validateEmail(item)}
                            borderColor={emailValidationMessage && 'red'}
                        />
                        {emailValidationMessage &&
                            <ValidateMessage>
                                {emailValidationMessage}
                            </ValidateMessage>
                        }
                    </InputGroup>
                    <InputGroup>
                        <ThemedInput
                            placeholder="Şifren"
                            value={password}
                            onChangeText={(item) => this.setState({ password: item })}
                            secureTextEntry
                        />
                    </InputGroup>
                </FormPanel>
                <ButtonPanel>
                    <ThemedButton title="Üye Ol" onPress={() => this.signUp()} />
                </ButtonPanel>
            </Body>
        );
    }
}