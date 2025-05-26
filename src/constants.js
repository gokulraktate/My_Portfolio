// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logos
import gdscLogo from './assets/company_logo/gdsc_logo.png';
import celebalLogo from './assets/company_logo/celebal_logo.png';


// Education Section Logo's
import sanjivaniLogo from './assets/education_logo/scoe_logo.png';
import kbRohmareLogo from './assets/education_logo/kjs.png';
import snaDeshmukhLogo from './assets/education_logo/snad.png';


// Project Section Logo's
import personalPortfolioLogo from './assets/work_logo/portfolio.png';
import razorpayCloneLogo from './assets/work_logo/razorpay.png';
import chatAppLogo from './assets/work_logo/chat.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: gdscLogo, // Replace with actual logo reference
    role: "Competitive Programming Lead",
    company: "Google Developer Student Clubs (GDSC), SCOE",
    date: "August 2023 - August 2024",
    desc: "Serving as the Competitive Programming Lead at GDSC SCOE. Conducted coding contests, problem-solving workshops, and mentorship sessions to boost students' skills in algorithms and data structures.Encouraging a coding culture on campus and mentoring peers helped strengthen my problem-solving and leadership skills.",
    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Leadership",
      "Hackerrank",
      "LeetCode"
    ],
  },
  {
    id: 1,
    img: celebalLogo, // Replace with actual logo reference
    role: "React JS Intern",
    company: "Celebal Technologies",
    date: "June 2025 - August 2025",
    desc: "Working as a React JS Intern, developing interactive user interfaces and integrating frontend logic with APIs. Focused on building reusable components, managing state effectively, and ensuring responsive designs for web applications.",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
      "Git",
      "Tailwind CSS"
    ],
  }
];

  
  export const education = [
  {
    id: 0,
    img: sanjivaniLogo,
    school: "SANJIVANI COE, KOPARGAON",
    degree: "BTECH, CSE",
    date: "2022 - 2026",
    grade: "CGPA: 8.9",
    desc: "Currently pursuing Bachelor of Technology in Computer Science Engineering. Gaining strong foundation in programming, algorithms, and software development.",
  },
  {
    id: 1,
    img: kbRohmareLogo,
    school: "K.B. ROHMARE JR. COLLEGE, Kopargaon",
    degree: "HIGHER SECONDARY (11th - 12th)",
    date: "2020 - 2022",
    grade: "Percentage: 72.83% (HSC)",
    desc: "Completed Higher Secondary education focusing on Science stream, preparing for engineering studies with good academic performance.",
  },
  {
    id: 2,
    img: snaDeshmukhLogo,
    school: "S.N.A. DESHMUKH MADHYAMIK VIDYALAYA, RUI",
    degree: "SECONDARY SCHOOL",
    date: "2019 - 2020",
    grade: "Percentage: 91.20% (SSC)",
    desc: "Completed Secondary School Certificate with strong academic results in core subjects, laying foundation for higher studies.",
  },
];

  
  export const projects = [
  {
    id: 0,
    title: "Personal Portfolio",
    description: [
      "Built a personal portfolio website using React, Vite, and Tailwind CSS to showcase skills, projects, and achievements.",
      "Implemented interactive UI components with React for smooth user experience.",
      "Used React Router for seamless navigation and ensured mobile responsiveness with Tailwind CSS."
    ],
    image: personalPortfolioLogo,
    tags: ["React JS", "Vite", "Tailwind CSS"],
    github: "https://github.com/gokulraktate",
    webapp: "https://github.com/gokulraktate",
  },
  {
    id: 1,
    title: "Razorpay Clone",
    description: [
      "Developed a responsive Razorpay website clone using HTML and Tailwind CSS.",
      "Designed interactive pages: Home, Pricing, About, Contact.",
      "Optimized mobile-first responsive layout using Tailwind’s utility classes."
    ],
    image: razorpayCloneLogo,
    tags: ["HTML", "Tailwind CSS"],
    github: "https://github.com/gokulraktate/RazorpayClone",
    webapp: "https://github.com/gokulraktate/RazorpayClone",
  },
  {
    id: 2,
    title: "Chat Application",
    description: [
      "Built a real-time chat app with React JS supporting online status, image sharing, and notifications.",
      "Used WebSockets and React Hooks for state management.",
      "Implemented authentication, chat rooms, and read receipts via Chat Engine.",
      "Deployed on Netlify with mobile responsiveness."
    ],
    image: chatAppLogo,
    tags: ["React JS", "WebSockets", "Chat Engine"],
    github: "https://github.com/gokulraktate",
    webapp: "https://github.com/gokulraktate",
  },
];
