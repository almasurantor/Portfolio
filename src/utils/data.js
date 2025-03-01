import {
  IoLogoJavascript, 
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoCss3,
  
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri"; 
import { SiCplusplus, SiPython, } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150", // Update this if you have a profile picture
  name: "Almasur Antor",
  tagline: 'Aspiring software engineer passionate about bringing change and giving back! With a couple of years of experience in software development, Im a second-year student currently working on impactful projects to create innovative solutions. Im eager to connect and collaborate on new opportunities. Feel free to reach out!',
  jobTitle: 'Software Engineer | Computer Science Student',
  location: "New York, NY, USA",
  yearsOfExperience: 2, // Adjust this if needed based on your experience
  skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "Financial Analysis",
      "Data Entry",
      "Teamwork",
      "Problem Solving"
  ],
  email: "almasurantor@gmail.com", 
  phone: "+1 (929) 562-8030", 
  website: "https://almasurantor.github.io/Portfolio/"
};

export const SKILLS = [
  {
      id: "01",
      icon: IoLogoHtml5,
      title: "HTML",
      comment: "HTML is the foundation of web development, essential for creating structured web content.",
  },
  {
      id: "02",
      icon: IoLogoCss3,
      title: "CSS",
      comment: "CSS is crucial for designing responsive and visually appealing web interfaces.",
  },
  {
      id: "03",
      icon: IoLogoJavascript,
      title: "JavaScript",
      comment: "JavaScript is a core part of my development toolkit for building interactive web applications.",
  },
  {
      id: "04",
      icon: IoLogoReact,
      title: "React JS",
      comment: "React.js is my framework of choice for building dynamic UIs.",
  },
  {
      id: "05",
      icon: SiPython,
      title: "Python",
      comment: "Python's simplicity and versatility make it a powerful tool for a variety of applications.",
  },
  {
      id: "06",
      icon: SiCplusplus,
      title: "C++",
      comment: "C++ is essential for understanding low-level programming and efficient code.",
  },
];

export const WORK_EXPERIENCE = [ 
  {  
      id: "01",
      company: "Headstarter AI", 
      position: "Software Engineering Fellow", 
      duration: "Jul 2024 - Present",
      description: "As a Software Engineering Fellow at Headstarter AI, I am involved in developing cutting-edge AI-driven projects. My responsibilities include designing and implementing web applications with a focus on machine learning integration, collaborating with a team of engineers and data scientists, and refining my technical skills through hands-on experience with advanced AI technologies. My current project involves creating an intelligent recommendation system, which is enhancing my expertise in both AI and software engineering.",
  },
  {  
      id: "02",
      company: "Student Leadership Network",
      position: "College Transitional Coach",
      duration: "Sept 2023 - Present",
      description: "As a College Transitional Coach with the Student Leadership Network, I guide high school seniors through the college application process. My responsibilities include assisting with application materials, crafting personal statements, and identifying suitable colleges and financial aid options. I work closely with students to develop their applications and provide support and encouragement to help them succeed in their college journey.",
  },
  {  
      id: "03",
      company: "YAI",
      position: "Finance & Accounting Intern",
      duration: "May 2024 - Jun 2024",
      description: "During my internship at YAI, I supported the finance team with various tasks such as data entry, documenting financial transactions, and assisting with financial reporting. I contributed to a capstone project that focused on financial analysis, which included evaluating budgetary allocations, assessing funding sources, and preparing detailed financial reports. This role helped me deepen my understanding of financial management and nonprofit operations, while applying my analytical skills to real-world challenges.",
  },
  {  
      id: "04",
      company: "Silicon Harlem",
      position: "Frontend Web Developer",
      duration: "Jun 2021 - Sep 2021",
      description: "At Silicon Harlem, I developed a comprehensive online gaming store. I was responsible for creating an engaging and user-friendly interface using HTML, CSS, and JavaScript. My role included implementing responsive design principles to ensure compatibility across various devices and browsers, integrating secure payment systems, and optimizing the website's performance. Additionally, I collaborated with the backend team to ensure seamless data integration and enhance the overall user experience.",
  },
];

export const ABOUT_ME_DATA = {
  introduction: "Hi, I'm Almasur Antor, a passionate software engineer and computer science student. I'm dedicated to creating innovative solutions and contributing to impactful projects.",
  background: "Currently pursuing a Bachelor of Science in Computer Science at CCNY's Grove School of Engineering.",
  skills: "Proficient in JavaScript, React.js, Node.js, HTML, CSS, and financial analysis.",
  projects: "Involved in projects such as AI-driven applications and financial analysis for strategic decision-making.",
  interests: "Beyond coding, I enjoy sports, mentoring, and exploring new technologies.",
  careerGoals: "I aim to continue expanding my skills, contribute to open-source projects, and pursue leadership roles in technology and finance.",
  stats: {
      yearsOfExperience: '2+', 
      numberOfProjects: 5, // Adjust based on actual number of projects
      certificationsEarned: 1, // Adjust based on actual certifications
  },
};