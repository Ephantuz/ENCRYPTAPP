// LandingPage.jsx
import React from 'react';
import './landing.css';
import Logo from './../../../assets/Alpha.svg';
const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Navigation */}
            <header className="header">
                <nav className="nav-container">
                    <div className="logo-container">

                        <span className="logo-text">E|NCRYPT</span>
                    </div>
                    <div className="nav-links">
                        <a href="#solutions">Solutions</a>
                        <a href="#platform">Platform</a>
                        <a href="#enterprise">Enterprise</a>
                        <a href="#resources">Resources</a>
                    </div>
                    <div className="nav-buttons">
                        <button className="sign-in">Sign In</button>
                        <button className="get-started">Get Started</button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    {/* Hero Text */}
                    <div className="hero-text">
                        <div className="ai-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>
                            <span>Powered by E|NCRYPT, "the silent architect behind brilliance".</span>
                        </div>
                        <div className="logo-icon">
                            <img src={Logo} alt="E|NCRYPT" />
                        </div>
                        <h1>
                            <span>Next-gen</span>
                            <span className="gradient-text">financial</span>
                            <span>intelligence</span>
                        </h1>

                        <p>
                            Transform your financial operations with AI-powered analytics, real-time insights, and automated compliance. Join 50,000+ finance teams already using QuantumFlow.
                        </p>

                        {/* Trust Indicators */}
                        <div className="trust-indicators">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span>SOC 2 Compliant</span>
                            </div>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <span>Bank-grade Security</span>
                            </div>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                                <span>Global Coverage</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visuals */}
                    <div className="hero-visuals">
                        {/* AI Analytics Card */}
                        <div className="gradient-border-card float-animation">
                            <div className="card-inner">
                                <div className="card-header">
                                    <div className="card-title">
                                        <div className="card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                                <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                                <path d="M12 13h4"></path>
                                                <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                                                <path d="M12 8h8"></path>
                                                <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                                                <circle cx="16" cy="13" r=".5"></circle>
                                                <circle cx="18" cy="3" r=".5"></circle>
                                                <circle cx="20" cy="21" r=".5"></circle>
                                                <circle cx="20" cy="8" r=".5"></circle>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>AI Revenue Forecast</h3>
                                            <p>Real-time predictions</p>
                                        </div>
                                    </div>
                                    <div className="card-stats">
                                        <div className="stat-value">$2.4M</div>
                                        <div className="stat-change">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 7h6v6"></path>
                                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            +23.5%
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="metrics-grid">
                            <div className="metric-card">
                                <div className="metric-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                    <span>Active Users</span>
                                </div>
                                <div className="metric-value">847K</div>
                                <div className="metric-change">+12% this month</div>
                            </div>

                            <div className="metric-card">
                                <div className="metric-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" x2="12" y1="2" y2="22"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                    <span>Cost Savings</span>
                                </div>
                                <div className="metric-value">$5.2M</div>
                                <div className="metric-change">Automated this year</div>
                            </div>
                        </div>

                        {/* Team Photo & Award */}
                        <div className="team-grid">
                            <div className="team-photo">
                                <img src="https://images.unsplash.com/photo-1636690513351-0af1763f6237?w=1080&q=80" alt="Financial team collaboration" />
                            </div>
                            <div className="award-card">
                                <div className="award-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                        <path d="M4 22h16"></path>
                                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                                    </svg>
                                </div>
                                <span className="award-title">Best FinTech</span>
                                <span className="award-year">Platform 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Highlight Banner */}
                <div className="feature-banner">
                    <div className="banner-content">
                        <div className="banner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            </svg>
                        </div>

                        <div className="banner-text">
                            <h3>Accelerate Financial Decision Making</h3>
                            <p>
                                Leverage machine learning algorithms to predict market trends, optimize cash flow, and automate compliance reporting.
                                Our platform processes over 10 billion transactions daily with 99.9% accuracy.
                            </p>
                        </div>

                        <div className="banner-stats">
                            <div className="stat">
                                <div className="stat-value gradient-text-green">4.9</div>
                                <div className="stat-label">Customer Rating</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value gradient-text-blue">99.9%</div>
                                <div className="stat-label">Uptime SLA</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Logos */}
                <div className="partners-section">
                    <p>Trusted by leading financial institutions worldwide</p>
                    <div className="partner-logos">
                        <div className="partner">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg>
                            <span>Goldman Sachs</span>
                        </div>
                        <div className="partner">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 18v-7"></path>
                                <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
                                <path d="M14 18v-7"></path>
                                <path d="M18 18v-7"></path>
                                <path d="M3 22h18"></path>
                                <path d="M6 18v-7"></path>
                            </svg>
                            <span>JPMorgan Chase</span>
                        </div>
                        <div className="partner">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M6 12h.01M18 12h.01"></path>
                            </svg>
                            <span>BlackRock</span>
                        </div>
                        <div className="partner">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="8" cy="8" r="6"></circle>
                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                <path d="M7 6h1v4"></path>
                                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                            </svg>
                            <span>Fidelity</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16"></path>
                    <path d="M4 18h16"></path>
                    <path d="M4 6h16"></path>
                </svg>
            </button>

            {/* Background Decorations */}
            <div className="background-decorations">
                <div className="decoration green"></div>
                <div className="decoration blue"></div>
                <div className="decoration cyan"></div>
            </div>
        </div>
    );
};

export default LandingPage;