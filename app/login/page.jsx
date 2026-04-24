'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { login } from './actions';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                {/* Left Side - Illustration Panel */}
                <div className="auth-illustration-container d-none d-lg-flex">
                    <div className="auth-logo-top">
                        <img src="/images/dukaan-setu-logo.png" alt="Dukkan Setu" className="auth-logo-img" />
                    </div>
                    <div className="auth-illustration-content">
                        <img src="/images/auth-illustration.png" alt="Welcome Back" className="auth-main-img" />
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="auth-form-container">
                    <div className="auth-mobile-logo d-lg-none text-center mb-30">
                        <img src="/images/dukaan-setu-logo.png" alt="Dukkan Setu" className="auth-logo-img-mobile" />
                    </div>

                    <div className="auth-form-header">
                        <h2>Welcome Back</h2>
                        <p>Login to your account to manage your shop</p>
                    </div>

                    <form className="auth-form" action={async (formData) => {
                        const result = await login(formData);
                        if (result?.error) {
                            alert(result.error);
                        }
                    }}>
                        <div className="mb-20">
                            <label className="auth-label">Email or Phone</label>
                            <div className="auth-input-group">
                                <span className="icon"><i className="far fa-user"></i></span>
                                <input name="email" type="text" placeholder="Enter email or phone" required />
                            </div>
                        </div>
 
                        <div className="mb-20">
                            <label className="auth-label">Password</label>
                            <div className="auth-input-group">
                                <span className="icon"><i className="fas fa-lock"></i></span>
                                <input 
                                    name="password"
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter password" 
                                    required 
                                />
                                <span 
                                    className="toggle-password" 
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={showPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                                </span>
                            </div>
                        </div>

                        <div className="mb-30 d-flex justify-content-between align-items-center">
                            <div className="auth-remember d-flex align-items-center">
                                <input type="checkbox" id="remember" className="mr-10" style={{accentColor: '#16a34a'}} />
                                <label htmlFor="remember" style={{fontSize: '14px', color: '#4b5563'}}>Remember Me</label>
                            </div>
                            <Link href="#" className="color-primary" style={{fontSize: '14px', fontWeight: 600}}>Forgot Password?</Link>
                        </div>

                        <button type="submit" className="auth-submit-btn">Login Now</button>

                        <div className="auth-footer">
                            Don't have an account? <Link href="/register">Register Here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
