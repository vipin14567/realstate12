import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For sign-up only
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation or API call here
    if (isLogin) {
      console.log("Logged In:", { email, password });
    } else {
      console.log("Signed Up:", { name, email, password });
    }
    navigate('/'); // Navigate to Home page after successful submit
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field (only for Sign-Up) */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              />
            </div>
          )}
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            />
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
