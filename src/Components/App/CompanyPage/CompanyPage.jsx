// Company.jsx
import React from 'react';
import './Company.css';

const Company = () => {
    return (
        <div className="company-page">
            {/* Main Content */}
            <div className="company-container">
                {/* Left Scrollable Content */}
                <div className="company-content">
                    {/* Instant Rollbacks Section */}
                    <section className="rollbacks-section">
                        <h1 className="company-title">NexusDeploy</h1>

                        <h2 className="section-subtitle">INSTANT ROLLBACKS</h2>

                        <h3 className="section-heading">
                            Go ahead, deploy on Friday.
                        </h3>

                        <p className="section-description">
                            Instantly rollback to a working deployment with zero downtime. Sleep peacefully knowing your application is protected.
                        </p>

                        <div className="divider"></div>

                        {/* Current Deployment */}
                        <div className="deployment-card">
                            <h4 className="deployment-label">PRODUCTION</h4>
                            <p className="deployment-path">nexus-commerce/prod-7x9k2m</p>
                            <p className="deployment-commit">feat: enhanced checkout flow with A/B testing</p>

                            <div className="deployment-meta">
                                <span className="meta-item">2h 14m ago</span>
                                <span className="meta-item">sarah.chen</span>
                                <span className="meta-item">us-east-1</span>
                            </div>

                            <div className="deployment-status">
                                <span className="status-badge healthy">Healthy</span>
                                <div className="status-details">
                                    <span>Performance +2 pts</span>
                                    <span>47.2K reqs/min</span>
                                </div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Previous Deployment */}
                        <div className="deployment-card">
                            <h4 className="deployment-label">PREVIOUS</h4>
                            <p className="deployment-path">nexus-commerce/prev-8min3p</p>
                            <p className="deployment-commit">fix: resolve payment gateway timeout issues</p>

                            <div className="deployment-meta">
                                <span className="meta-item">1d 8h ago</span>
                                <span className="meta-item">alex.rodriguez</span>
                                <span className="meta-item">Stable</span>
                            </div>

                            <div className="deployment-status">
                                <span className="status-badge rollback">Rollback Ready</span>
                                <div className="status-details">
                                    <span>Performance Baseline</span>
                                    <span>41.8K reqs/min</span>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>

                        {/* Current Deployment */}
                        <div className="deployment-card">
                            <h4 className="deployment-label">PRODUCTION</h4>
                            <p className="deployment-path">nexus-commerce/prod-7x9k2m</p>
                            <p className="deployment-commit">feat: enhanced checkout flow with A/B testing</p>

                            <div className="deployment-meta">
                                <span className="meta-item">2h 14m ago</span>
                                <span className="meta-item">sarah.chen</span>
                                <span className="meta-item">us-east-1</span>
                            </div>

                            <div className="deployment-status">
                                <span className="status-badge healthy">Healthy</span>
                                <div className="status-details">
                                    <span>Performance +2 pts</span>
                                    <span>47.2K reqs/min</span>
                                </div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Previous Deployment */}
                        <div className="deployment-card">
                            <h4 className="deployment-label">PREVIOUS</h4>
                            <p className="deployment-path">nexus-commerce/prev-8min3p</p>
                            <p className="deployment-commit">fix: resolve payment gateway timeout issues</p>

                            <div className="deployment-meta">
                                <span className="meta-item">1d 8h ago</span>
                                <span className="meta-item">alex.rodriguez</span>
                                <span className="meta-item">Stable</span>
                            </div>

                            <div className="deployment-status">
                                <span className="status-badge rollback">Rollback Ready</span>
                                <div className="status-details">
                                    <span>Performance Baseline</span>
                                    <span>41.8K reqs/min</span>
                                </div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Conformance Section */}
                        <section className="conformance-section">
                            <h3 className="section-heading">CONFORMANCE</h3>
                            <p className="section-description">
                                Move fast, don't break things.
                            </p>
                            <p className="section-description">
                                Maintain code quality and team velocity with automated conformance checks, governance policies, and enterprise-grade monorepo management.
                            </p>

                            <div className="divider"></div>

                            <div className="quality-score">
                                <h4>Code Quality Score</h4>
                                <div className="score-value">9.2 /10 ↑ 0.3</div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* Right Sticky Sidebar */}
                <div className="company-sidebar">
                    {/* Conformance Dashboard */}
                    <div className="conformance-dashboard">
                        <h3 className="dashboard-title">Code Quality Score</h3>

                        <div className="ownership-grid">
                            <div className="grid-header">Booklist</div>
                            <div className="grid-header">Code Ownership</div>

                            <div className="grid-item">9.2 /10 + 0.3</div>
                            <div className="grid-item team-ownership">
                                <span>@nexus/frontend-team</span>
                                <div className="team-avatars">
                                    <img src="https://i.pravatar.cc/40?img=1" alt="Team member" />
                                    <img src="https://i.pravatar.cc/40?img=2" alt="Team member" />
                                    <img src="https://i.pravatar.cc/40?img=3" alt="Team member" />
                                </div>
                            </div>

                            <div className="grid-item">Security Issues</div>
                            <div className="grid-item">0</div>

                            <div className="grid-item">Performance Issues</div>
                            <div className="grid-item">3</div>

                            <div className="grid-item">Code Coverage</div>
                            <div className="grid-item">94.2%</div>

                            <div className="grid-item">Dependencies</div>
                            <div className="grid-item">127 2 updates</div>
                        </div>

                        <div className="security-metrics">
                            <div className="metric-card">
                                <h4>Security Scans</h4>
                                <div className="metric-value">0 vulnerabilities</div>
                                <div className="metric-note">Last week: 30 days</div>
                            </div>

                            <div className="metric-card">
                                <h4>Performance</h4>
                                <div className="metric-value">Lighthouse Score</div>
                                <div className="metric-note">Avg reference: 27%</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="sidebar-footer">
                        <h3 className="footer-heading">Scale your Enterprise without compromising</h3>
                        <p className="footer-text">
                            Join thousands of teams who trust NexusDeploy for their mission-critical applications. Deploy with confidence, scale with ease.
                        </p>

                        <div className="footer-buttons">
                            <button className="primary-button">Start Free Trial →</button>
                            <button className="secondary-button">Schedule Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;