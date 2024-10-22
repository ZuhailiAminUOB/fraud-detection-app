import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, pwd }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                setSuccess(true);
                onLogin(user);
                navigate('/home'); // Redirect to the homepage after login
            } else {
                setErrMsg('Incorrect Username or Password');
            }
        } catch (err) {
            setErrMsg('No Server Response');
        }
        errRef.current.focus();
    };

    return (
        <>
            {success ? (
                <section>
                    <p>Redirecting to home...</p> {/* Optional message */}
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form className="login-form text-light" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            placeholder="Enter your username"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            placeholder="Enter your password"
                        />
                        <button type="submit">Sign In</button>
                    </form>
                    <p>
                        Not Registered?<br />
                        <span className="line">
                            <a href="/register">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
