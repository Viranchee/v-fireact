import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <Link to="/home">
                <button>
                    Log In
                </button>
            </Link>
            <Link to="/signup">
              <button>
                Signup
              </button>
            </Link>
        </div>
    );
}

export default Login;