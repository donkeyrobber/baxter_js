import { hot } from 'react-hot-loader/root';
import React, {Component} from 'react';
import  SignUp  from './components/sign-up'
class App extends Component {
    render() {
        return (
            <SignUp/>

        );
    }

}

export default hot(App);