import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";
import Logo from "../component/common/Logo";
import INFO from "../data/User";
import SEO from "../data/Seo";

import "./styles/achievements.css";

const SAMPLE = [
  { 
    year: "2025", 
    title: "Dockerized MERN Project", 
    achievement: "Cisco Internship",
    desc: "Successfully containerized and deployed a full-stack MERN application with multi-stage Docker builds and implemented CI/CD pipeline." 
  },
  { 
    year: "2024", 
    title: "React Performance Optimization", 
    desc: "Achieved 40% reduction in Time to Interactive (TTI) through code-splitting, React.memo optimization, and lazy loading implementation." 
  },
  { 
    year: "2024", 
    title: "Java Microservices Architecture", 
    desc: "Designed and implemented scalable microservices using Spring Boot, with Redis caching and RabbitMQ message queuing." 
  },
  { 
    year: "2023", 
    title: "Open Source Contributions", 
    desc: "Actively contributed to community projects with custom React components, comprehensive documentation, and bug fixes." 
  },
  { 
    year: "2023", 
    title: "DevOps Automation", 
    desc: "Automated deployment pipelines using Jenkins, Docker, and Kubernetes, reducing deployment time by 60%." 
  }
];

const Achievements = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Intersection Observer for scroll-triggered animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all timeline items
    timelineRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const currentSEO = { 
    description: "Professional milestones and achievements showcased in an interactive timeline.", 
    keywords: ["achievements", "timeline", "milestones", "career", "portfolio"] 
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Achievements | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="achievements" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="achievements-container">
            <div className="title achievements-title">
              Milestones & Achievements
            </div>
            <div className="subtitle achievements-subtitle">
              A journey of growth, innovation, and continuous learning in software development.
            </div>

            <div className="timeline">
              {SAMPLE.length === 0 ? (
                <div className="timeline-empty">
                  <div>Achievements yet to be added</div>
                  <div style={{ 
                    fontSize: '0.9em', 
                    marginTop: '8px', 
                    opacity: 0.7 
                  }}>
                    Stay tuned for exciting updates! ✨
                  </div>
                </div>
              ) : (
                SAMPLE.map((item, idx) => (
                  <div 
                    className={`timeline-item ${visibleItems.has(idx) ? 'animate-in' : ''}`}
                    key={idx}
                    data-index={idx}
                    ref={el => timelineRefs.current[idx] = el}
                    style={{
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-card">
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-year">{item.achievement}</div>
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-desc">{item.desc}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Achievements;