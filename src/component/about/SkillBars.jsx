import React, { useEffect, useRef, useState } from "react";
import "./styles/skillBars.css";

const SkillBars = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    const allSkills = [
        { name: "Java", percentage: 80 },
        { name: "Python", percentage: 75 },
        { name: "JavaScript", percentage: 80 },
        { name: "C++", percentage: 80 },
        { name: "React.js", percentage: 85 },
        { name: "Next.js", percentage: 30 },
        { name: "Node.js", percentage: 85 },
        { name: "Spring Boot", percentage: 65 },
        { name: "MongoDB", percentage: 95 },
        { name: "PostgreSQL", percentage: 70 },
        { name: "DBMS", percentage: 85 },
        { name: "DevOps", percentage: 45 },
        { name: "Docker", percentage: 65 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div className="skills-container" ref={skillsRef}>
            <div className="skills-list">
                {allSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="skill-bar-background">
                            <div
                                className={`skill-bar-fill ${isVisible ? "animate" : ""}`}
                                style={{
                                    "--target-width": `${skill.percentage}%`,
                                    "--animation-delay": `${index * 0.1}s`,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillBars;
