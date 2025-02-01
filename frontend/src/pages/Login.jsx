import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            if (data.role === 'admin') {
                navigate('/admin-dashboard');
            } else {
                navigate('/home');
            }
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="bg-customBeige min-h-screen flex flex-col">
            {/* The main content area */}
            <div className="flex flex-col items-center justify-center text-center w-full py-6">
                <h2 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
                    Welcome! Login
                </h2>
                <form className="w-3/4 md:w-1/2 text-left  " onSubmit={handleLogin}>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="email">Email: </label>
                        <input
                            className="p-2 border rounded mt-3"
                            type="email"
                            value={email}
                            id="email"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="password">Password: </label>
                        <input
                            className="p-2 border rounded mt-3"
                            type="password"
                            value={password}
                            id="password"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className=" bg-customBrown ml-40 md:ml-48 lg:ml-96 px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown"
                    >
                        Login
                    </button>
                </form>
            </div>
            {/* Adjusted background image */}
            <div className=" w-full flex-grow h-1/4 bg-cover bg-center" style={{ backgroundImage: "url('/images/lipstick.jpg')"}}></div>
        </div>
    );
};

export default Login;
