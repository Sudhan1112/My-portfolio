const INFO = {
	main: {
		title: "Portfolio by Sudhan",
		name: "Sudhan.S",
		email: "sudhanssudhan83@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		linkedin: "https://www.linkedin.com/in/sudhan-s-a76b8b297/",
		github: "https://github.com/Sudhan1112",
		dockerhub: "https://hub.docker.com/repositories/sudhan1112",
	},

	homepage: {
  title: "MERN Stack Developer • Java Full Stack Developer • DevOps Developer",
  description: `
    I am a <strong>full-stack</strong> and <strong>Java backend developer</strong> specializing in 
    <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Spring Boot</strong>, 
    <strong>Node.js</strong>, <strong>Express.js</strong>, and database systems like 
    <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, and 
    <strong>Redis</strong>. I build <strong>secure</strong>, <strong>production-ready applications</strong>
    using <strong>modern architectures</strong>, <strong>microservices</strong>, 
    <strong>RESTful APIs</strong>, <strong>Docker</strong>, and <strong>CI/CD pipelines</strong>. 
    With strong foundations in <strong>Java</strong>, <strong>OOP</strong>, <strong>DSA</strong>, and 
    <strong>system design</strong>, I deliver <strong>optimized</strong>, 
    <strong>maintainable</strong>, and <strong>scalable</strong> software.
  `
},

	about: {
		title: "I'm Sudhan S. I live in Chennai, India, aiming higher every day and working hard for better results.",
	},

	projects: [
		{
			title: "Core Banking System (Next.js + Spring Boot)",
			description:
				"A secure, multi-tier digital banking platform for customer onboarding, account management, and claims processing. Features JWT Authentication, RBAC, and a responsive dashboard.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Core-Banking-System",
			techStack: [
				{ name: "Next.js", icon: "react", color: "#61DAFB" },
				{ name: "Spring Boot", icon: "java", color: "#6DB33F" },
				{ name: "PostgreSQL", icon: "postgresql", color: "#336791" },
				{ name: "Docker", icon: "docker", color: "#2496ED" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" }
			],
			problemSolved: "Enables secure user onboarding, account management, money transfers, and claims processing with a production-ready microservices architecture.",
			features: ["JWT Authentication & RBAC", "Account Management", "Secure Money Transfers", "KYC Document Upload (Supabase)", "Admin Portal", "Dockerized Deployment", "JUnit Testing"]
		},
		{
			title: `Productivity Panda "MERN STACK" Project`,
			description:
				"Stay Focused, Stay Productive with Productivity Panda. An intuitive task management platform designed to enhance productivity and efficiency through prioritized workflows and seamless team collaboration.",
			linkText: "View Project",
			link: "https://github.com/kalviumcommunity/S51_Sudhan_Capstone_Productivity_Panda",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "Node.js", icon: "nodejs", color: "#339933" },
				{ name: "MongoDB", icon: "mongodb", color: "#47A248" },
				{ name: "Express.js", icon: "express", color: "#000000" },
				{ name: "Docker", icon: "docker", color: "#2496ED" }
			],
			problemSolved: "Enhances productivity and efficiency by providing an intuitive platform for task management, workflow automation, and team collaboration. Helps users stay organized and focused on achieving their goals through prioritized planning and seamless communication.",
			features: ["Task Prioritization by Deadlines", "Predefined Workflows", "Email Reminders", "Goal-oriented Focus", "Integrated Chatbot for Team Communication", "Google Authentication", "Context API for Global State Management", "Docker Containerization"]
		},
		{
			title: `Clothing E-commerce "MERN STACK" Project`,
			description:
				"A full-stack e-commerce application designed to provide a seamless online shopping experience for fashion enthusiasts. Modern UI/UX, robust state management, and efficient backend integration.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Clothing-e-commerce",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "Node.js", icon: "nodejs", color: "#339933" },
				{ name: "MongoDB", icon: "mongodb", color: "#47A248" },
				{ name: "Express.js", icon: "express", color: "#000000" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
				{ name: "JWT", icon: "jwt", color: "#000000" },
				{ name: "Docker", icon: "docker", color: "#2496ED" }
			],
			problemSolved: "Addresses the need for a comprehensive e-commerce platform with modern UI/UX, efficient state management, and seamless shopping experience for fashion enthusiasts.",
			features: ["Product List Page", "Product Detail View", "Shopping Cart (My Bag)", "State Management with Context API", "JWT Authentication", "Responsive Design", "Backend Integration", "Cloudinary Image Management", "Docker Containerization"]
		},

		{
			title: `Recipe Management System "MERN STACK" Project`,
			description:
				"A personalized recipe management system built with the MERN stack. Add, edit, view, and delete recipes with a sleek, mobile-friendly interface and advanced search functionality.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Recipe-management-system",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "Node.js", icon: "nodejs", color: "#339933" },
				{ name: "MongoDB", icon: "mongodb", color: "#47A248" },
				{ name: "Express.js", icon: "express", color: "#000000" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
				{ name: "Docker", icon: "docker", color: "#2496ED" }
			],
			problemSolved: "Provides a comprehensive solution for recipe organization and management, helping users store, search, and categorize their favorite recipes with detailed information and filtering capabilities.",
			features: ["Add/Edit Recipes", "Recipe Search & Filter", "Category Management", "Detailed Recipe View", "Responsive Design", "Toast Notifications", "CRUD Operations", "Tag System", "Docker Containerization"]
		},
		{
			title: `Claims Management System "MERN STACK" Project`,
			description:
				"A full-stack application for managing insurance claims. Built with React, Redux, Node.js, Express, and MongoDB with secure authentication and file upload capabilities.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Claim-Management-System",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "Redux", icon: "redux", color: "#764ABC" },
				{ name: "Node.js", icon: "nodejs", color: "#339933" },
				{ name: "MongoDB", icon: "mongodb", color: "#47A248" },
				{ name: "Express.js", icon: "express", color: "#000000" },
				{ name: "JWT", icon: "jwt", color: "#000000" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
				{ name: "Docker", icon: "docker", color: "#2496ED" }
			],
			problemSolved: "Streamlines insurance claim management processes by providing separate dashboards for patients and insurers, enabling efficient claim submission, tracking, and approval workflows.",
			features: ["Patient Dashboard", "Insurer Dashboard", "Claim Submission & Tracking", "JWT Authentication", "File Upload Support", "Claim Approval/Rejection", "Secure Login/Signup", "Document Management", "Docker Containerization"]
		},
		{
			title: `Incident Management System "REACT + FASTAPI" Project`,
			description:
				"A full-stack application for tracking, managing, and reporting incidents across an organization. Enables efficient incident documentation, categorization, and analysis to improve safety and operational response.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Incident-Management-System",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "FastAPI", icon: "fastapi", color: "#009688" },
				{ name: "Python", icon: "python", color: "#3776AB" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
				{ name: "Firebase", icon: "firebase", color: "#FFCA28" }
			],
			problemSolved: "Addresses the need for efficient incident tracking and management in organizations, providing a centralized system for documentation, categorization, and analysis to improve safety protocols and operational response.",
			features: ["Incident Documentation", "Image Upload with Firebase", "Component-Based Architecture", "Controller Pattern", "RESTful API Design", "Responsive UI", "Error Handling", "CRUD Operations"]
		}
		, {
			title: "Construction Checklist App `REACT` Project",
			description:
				"A sleek, intuitive React + Tailwind CSS web app that helps construction managers stay on top of their project game through a smart, visual checklist system with real-time progress tracking.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Construction_Checklist",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
				{ name: "JavaScript", icon: "javascript", color: "#F7DF1E" }
			],
			problemSolved: "Streamlines construction project management by providing an intuitive checklist system with hierarchical task management, real-time progress tracking, and smart validation to ensure project completion accuracy.",
			features: ["Parent + Sub Activity Management", "Real-Time Progress Tracking", "Smart Weight Validation (100%)", "Color-Coded Progress Indicators", "Save With Confidence", "Modular Clean Architecture", "Toastify Feedback System"]
		},

		{
			title: `Simple Blog-app "REDUX" Project`,
			description:
				"A simple blog application built with React, Redux and Tailwind CSS featuring state management for posts their posts.",
			// logo: "Redux.png",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/Blog-app-using-redux",
			techStack: [
				{ name: "React", icon: "react", color: "#61DAFB" },
				{ name: "Redux", icon: "redux", color: "#764ABC" },
				{ name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
				{ name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" }
			],
			problemSolved: "Demonstrates advanced state management in React applications, providing a scalable solution for managing complex application state across multiple components.",
			features: ["Redux State Management", "Post Creation", "Post Management", "Responsive Design", "Modern UI", "Component Architecture"]
		},
		{
			title: `EMPLOYEE MANAGEMENT SYSTEM "CPP" Project`,
			description:
				"Employee Management System in C++ for handling employee records, adding, updating, deleting data, and generating reports with an interactive interface.",
			linkText: "View Project",
			link: "https://github.com/Sudhan1112/EMPLOYEE_MANAGEMENT_SYSTEM",
			techStack: [
				{ name: "C++", icon: "cpp", color: "#00599C" },
				{ name: "File I/O", icon: "file", color: "#FF6B6B" },
				{ name: "Data Structures", icon: "database", color: "#4ECDC4" }
			],
			problemSolved: "Streamlines HR operations by providing a comprehensive system for employee data management, reducing manual paperwork and improving data accuracy and accessibility.",
			features: ["Employee Records", "Data CRUD Operations", "Report Generation", "Interactive Interface", "File Management", "Data Validation"]
		},
	],
};

export default INFO;