// Portfolio data - Update this with your actual information from Resume_Rudra.pdf
export const portfolioData = {
  personal: {
    name: "Rudra",
    title: "Full Stack Developer", // Update based on your resume
    email: "your.email@example.com", // Update with your actual email
    phone: "+1 (555) 123-4567", // Update with your actual phone
    location: "Your City, Country", // Update with your location
    website: "https://your-website.com", // Update if you have one
    linkedin: "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
    github: "https://github.com/yourusername", // Update with your GitHub
    summary: "Passionate developer with expertise in modern web technologies. Experienced in building scalable applications using React, Node.js, and cloud technologies." // Update with your summary
  },
  
  experience: [
    {
      id: 1,
      company: "Your Current Company", // Update from resume
      position: "Senior Developer", // Update from resume
      duration: "2023 - Present", // Update from resume
      location: "City, Country", // Update from resume
      description: [
        "Led development of key features resulting in 30% performance improvement",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS"] // Update from resume
    },
    {
      id: 2,
      company: "Previous Company", // Update from resume
      position: "Full Stack Developer", // Update from resume
      duration: "2021 - 2023", // Update from resume
      location: "City, Country", // Update from resume
      description: [
        "Developed responsive web applications using modern frameworks",
        "Implemented RESTful APIs and database optimization",
        "Reduced load times by 40% through performance optimization"
      ],
      technologies: ["React", "Python", "PostgreSQL", "Docker"] // Update from resume
    }
    // Add more experiences from your resume
  ],
  
  education: [
    {
      id: 1,
      institution: "Your University", // Update from resume
      degree: "Bachelor of Science in Computer Science", // Update from resume
      duration: "2017 - 2021", // Update from resume
      location: "City, Country", // Update from resume
      gpa: "3.8/4.0", // Update from resume if applicable
      relevantCoursework: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
    }
    // Add more education from your resume
  ],
  
  skills: {
    technical: [
      {
        category: "Frontend",
        skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
      },
      {
        category: "Backend", 
        skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "Spring Boot"]
      },
      {
        category: "Database",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
      },
      {
        category: "DevOps & Cloud",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"]
      },
      {
        category: "Tools & Others",
        skills: ["VS Code", "Postman", "Figma", "Jira", "Agile/Scrum"]
      }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "E-commerce Platform", // Update with your actual projects
      description: "A full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com",
      image: "/placeholder-project-1.jpg", // Add actual project images
      features: [
        "User authentication and authorization",
        "Shopping cart and checkout functionality", 
        "Payment processing with Stripe",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 2,
      title: "Task Management App", // Update with your actual projects
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com",
      image: "/placeholder-project-2.jpg", // Add actual project images
      features: [
        "Real-time collaboration",
        "Drag & drop task management",
        "Team workspaces",
        "Progress tracking and analytics"
      ]
    }
    // Add more projects from your resume/portfolio
  ],
  
  certifications: [
    {
      id: 1,
      name: "AWS Certified Developer", // Update with your actual certifications
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "ABC123456" // Update if applicable
    }
    // Add more certifications from your resume
  ]
};

export default portfolioData;
