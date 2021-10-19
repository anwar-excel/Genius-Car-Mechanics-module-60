import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useContext(AuthContext);
    console.log(signInUsingGoogle);

    return (
        <div>
            <h2 id="login">Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;