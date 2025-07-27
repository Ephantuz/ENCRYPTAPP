import React, { useEffect, useRef } from 'react';
import './Work.css';

const Work = () => {
    // const countRef = useRef(null);

    // useEffect(() => {
    //     const countEl = countRef.current;
    //     const incBtn = document.getElementById('increment');
    //     const decBtn = document.getElementById('decrement');

    //     const handleIncrement = () => {
    //         let value = parseInt(countEl.textContent, 10);
    //         if (value < 8) value++;
    //         countEl.textContent = value.toString().padStart(2, '0');
    //     };

    //     const handleDecrement = () => {
    //         let value = parseInt(countEl.textContent, 10);
    //         if (value > 1) value--;
    //         countEl.textContent = value.toString().padStart(2, '0');
    //     };

    //     incBtn.addEventListener('click', handleIncrement);
    //     decBtn.addEventListener('click', handleDecrement);

    //     return () => {
    //         incBtn.removeEventListener('click', handleIncrement);
    //         decBtn.removeEventListener('click', handleDecrement);
    //     };
    // }, []);

    return (
        <div className="work-container">
            {/* Subtle Grid Background */}
            <div className="grid-background"></div>

            {/* Main Container */}
            <div className="main-container">
                {/* Hero & Booking Layout */}
                <div className="grid-layout">
                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                <span className="font-extralight">PLANET</span><span className="font-medium">FIT</span>
                                <div className="hero-subtitle">
                                    FITNESS FOR EVERY BODY
                                </div>
                            </h1>

                            <div className="hero-description">
                                <div className="vertical-line"></div>
                                <p className="description-text">
                                    More than just movement — CoreFit is a space where every body is welcomed, supported, and empowered to grow, together.
                                </p>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="hero-image-container">
                            <div className="image-overlay"></div>
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2fd6401-8811-41f8-a983-5ee75d32d114_1600w.jpg"
                                alt="Group fitness"
                                className="hero-image"
                            />
                        </div>
                    </section>

                    {/* Booking Card */}
                    <aside className="booking-card">
                        <div className="booking-card-inner">
                            {/* Close Button */}

                            {/* Class Image */}
                            <div className="class-image-container">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d23b341-af81-4884-8d05-ffcf1ef7403f_1600w.jpg"
                                    alt="Yoga session"
                                    className="class-image"
                                />
                                <div className="class-image-overlay"></div>

                                {/* Tags */}
                                <div className="class-tags">
                                    <span className="tag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                        </svg>
                                        Medium Intensity
                                    </span>
                                    <span className="tag">
                                        60 min
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="booking-content">
                                <div>
                                    <h2 className="class-title">Power Yoga</h2>
                                    <p className="class-description">
                                        A strength-focused practice that builds endurance, flexibility, muscle tone, and improves balance and body awareness.
                                    </p>
                                </div>

                                {/* Instructor */}
                                <div className="instructor-section">
                                    <img
                                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ef91adf-fed8-48c0-b0fe-608779988348_320w.jpg"
                                        className="instructor-image"
                                        alt="Instructor"
                                    />
                                    <div>
                                        <p className="instructor-name">Emma Carter</p>
                                        <p className="instructor-title">Certified Yoga Instructor</p>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="class-details">
                                    <div className="detail-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                                        </svg>
                                        <span className="font-light">10:00 AM, Saturday 12th</span>
                                    </div>
                                    <div className="detail-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="font-light">15 King Street, London</span>
                                    </div>
                                    <div className="detail-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="font-light">4 of 8 spots remaining</span>
                                    </div>
                                </div>

                                {/* Participants Counter */}
                                <div className="participants-counter">
                                    <span className="counter-label">Participants</span>
                                    {/* <div className="counter-controls">
                                        <button id="decrement" className="counter-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                            </svg>
                                        </button>
                                        <span id="count" className="counter-value" ref={countRef}>01</span>
                                        <button id="increment" className="counter-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path><path d="M12 5v14"></path>
                                            </svg>
                                        </button>
                                    </div> */}
                                </div>

                                {/* Book Button */}
                                <button className="book-button">
                                    <span>RESERVE SPOT</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Team Section */}
                <section className="team-section">
                    <div className="team-container">
                        <div className="team-content">
                            <div className="team-header">
                                <h3 className="team-title">
                                    Helping you feel stronger and move better — at every level.
                                </h3>
                                {/* <button className="team-button">
                                    <span className="tracking-wide">MEET THE TEAM</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button> */}
                            </div>

                            {/* Team Grid */}
                            <div className="team-grid">
                                {/* Member 1 */}
                                <div className="team-member">
                                    <div className="member-image-container">
                                        <img
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c059ff7-8c38-464d-8f88-e40c0828fb57_800w.jpg"
                                            alt="Laura Mitchell"
                                            className="member-image"
                                        />
                                    </div>
                                    <div className="member-info">
                                        <p className="member-name">Laura Mitchell</p>
                                        <p className="member-role">Stretching &amp; Mobility Trainer</p>
                                    </div>
                                </div>

                                {/* Member 2 */}
                                <div className="team-member">
                                    <div className="member-image-container">
                                        <img
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c16f9345-2372-4e09-a3f1-83f6dbfd4032_800w.jpg"
                                            alt="Olivia Scott"
                                            className="member-image"
                                        />
                                    </div>
                                    <div className="member-info">
                                        <p className="member-name">Olivia Scott</p>
                                        <p className="member-role">HIIT &amp; Functional Training</p>
                                    </div>
                                </div>

                                {/* Member 3 */}
                                <div className="team-member">
                                    <div className="member-image-container">
                                        <img
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49011eae-fe42-4e02-9f4b-45a2b90cc331_800w.jpg"
                                            alt="Sophie Bennett"
                                            className="member-image"
                                        />
                                    </div>
                                    <div className="member-info">
                                        <p className="member-name">Sophie Bennett</p>
                                        <p className="member-role">Mat &amp; Reformer Pilates</p>
                                    </div>
                                </div>
                            </div>

                            {/* Workshop Section */}
                            <div className="workshop-section">
                                <h4 className="workshop-title">Upcoming Workshops</h4>
                                <div className="workshop-grid">
                                    <div className="workshop-card">
                                        <h5 className="workshop-card-title">Mindful Movement Workshop</h5>
                                        <p className="workshop-card-description">
                                            Explore techniques to improve body awareness and reduce stress through gentle movement and breathwork.
                                        </p>
                                        <div className="workshop-details">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                                            </svg>
                                            <span>May 15, 2024</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                            <span>10:00 AM - 12:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="workshop-card">
                                        <h5 className="workshop-card-title">Strength &amp; Stability Workshop</h5>
                                        <p className="workshop-card-description">
                                            Build foundational strength and improve your functional stability with targeted exercises and expert guidance.
                                        </p>
                                        <div className="workshop-details">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                                            </svg>
                                            <span>June 10, 2024</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                            <span>2:00 PM - 4:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="pricing-section">
                    <div className="pricing-container">
                        <div className="pricing-content">
                            <div className="pricing-header">
                                <h3 className="pricing-title">
                                    Pricing Plans Designed for Every Body
                                </h3>
                                <button className="pricing-button">
                                    <span className="tracking-wide">SEE FULL DETAILS</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="pricing-grid">
                                <div className="pricing-card">
                                    <div className="pricing-card-content">
                                        <h4 className="pricing-card-title">Basic</h4>
                                        <p className="pricing-card-description">
                                            Access to all beginner classes and community events.
                                        </p>
                                        <div className="pricing-card-price">$29<span>/month</span></div>
                                        <ul className="pricing-features">
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Unlimited beginner classes
                                            </li>
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Access to community events
                                            </li>
                                            <li className="feature-item disabled">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                                                </svg>
                                                Personal coaching sessions
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="pricing-card-button">
                                        Choose Basic
                                    </button>
                                </div>

                                <div className="pricing-card featured">
                                    <div className="pricing-card-content">
                                        <h4 className="pricing-card-title">Pro</h4>
                                        <p className="pricing-card-description">
                                            Includes all Basic features plus advanced classes and workshops.
                                        </p>
                                        <div className="pricing-card-price">$59<span>/month</span></div>
                                        <ul className="pricing-features">
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Unlimited beginner &amp; intermediate classes
                                            </li>
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Access to workshops &amp; webinars
                                            </li>
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                2 Personal coaching sessions/month
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="pricing-card-button featured">
                                        Choose Pro
                                    </button>
                                </div>

                                <div className="pricing-card">
                                    <div className="pricing-card-content">
                                        <h4 className="pricing-card-title">Elite</h4>
                                        <p className="pricing-card-description">
                                            All Pro features plus unlimited personal coaching and premium support.
                                        </p>
                                        <div className="pricing-card-price">$99<span>/month</span></div>
                                        <ul className="pricing-features">
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Unlimited classes of all levels
                                            </li>
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Unlimited personal coaching
                                            </li>
                                            <li className="feature-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                Priority support &amp; perks
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="pricing-card-button">
                                        Choose Elite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

            <footer className="work-footer">
                <div className="footer-container">
                    <div className="footer-info">
                        <h4 className="footer-title">E|NCRYPT</h4>
                        <p className="footer-description">Empowering every body to move, grow, and thrive with expert-led fitness classes and community support.</p>
                    </div>
                    <nav className="footer-nav">
                        <a href="#" className="nav-link">About Us</a>
                        <a href="#" className="nav-link">Classes</a>
                        <a href="#" className="nav-link">Schedule</a>
                        <a href="#" className="nav-link">Contact</a>
                        <a href="#" className="nav-link">FAQs</a>
                    </nav>
                    <div className="footer-social">
                        <a href="#" aria-label="Twitter" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2024 E|NCRYPT. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Work;