import React from 'react';
import styles from './signup.scss';


const SignUpForm = () => {
    return (
        <form>
            <div>
                <input name={name} />
                <button>Push</button>
            </div>
        </form>
    );
};

export default SignUpForm;