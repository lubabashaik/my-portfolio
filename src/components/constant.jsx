// import cpp from "../assets/icons/skills-icon/cpp.svg";
// import css from "../assets/icons/skills-icon/css.svg";
// import django from "../assets/icons/skills-icon/django.svg";
// import html from "../assets/icons/skills-icon/html.svg";
// import js from "../assets/icons/skills-icon/javascript.svg";
// import figma from "../assets/icons/skills-icon/figma.svg";
// import md from "../assets/icons/skills-icon/mongodb.svg";
// import next from "../assets/icons/skills-icon/nextjs.svg";
// import ml from "../assets/icons/skills-icon/ml.png";
// import node from "../assets/icons/skills-icon/nodejs.svg";
// import php from "../assets/icons/skills-icon/php.svg";
// import py from "../assets/icons/skills-icon/python.svg";
// import react from "../assets/icons/skills-icon/react-js.svg";
// import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";

// projectImagess
import Zaggle from "../assets/images/projectImages/Zaggle.jpg";
import thewayfinder from "../assets/images/projectImages/thewayfinder.jpg";
import Brobooke from "../assets/images/projectImages/GYM.jpg";
import truck from "../assets/images/projectImages/truck-M.jpg";
// import qz from "../assets/images/projectImages/project2.png";
// import tesla from "../assets/images/projectImages/project3.png";
// import emd from "../assets/images/projectImages/project4.png";
// import algo from "../assets/images/projectImages/project5.png";
// // import furni from "../assets/images/projectImages/project6.png";
// import ftc from "../assets/images/projectImages/project7.png";
// // import ngo from "../assets/images/projectImages/project8.png";
// import metashield from "../assets/images/projectImages/project9.png";

export const Projects = {
  RespireX: {
    image: Zaggle, // replace with your imported image variable
    title: "Zaggle",
    subTitle: " Hotel Booking System",
    insights: {
      desc: ` Developed complete booking flow with search, filter, and confirmation features from Figma designs
                 Integrated REST APIs and implemented client - side caching, improving data fetch time by 20%.
                  Ensured a mobile - first experience, achieving 95+ Lighthouse performance score.
                  Built reusable UI components, reducing design -t o - code conversion time by 30%.`,
      category: "Healthcare, ML, Web Application",
      techStack: ["Reactjs", "TypeScript", "TailwindCSS", "RestAPI",],
      reportLink: "",
    },
   
  },
  ClinicLink: {
    image: Brobooke, // replace with your imported image variable
    title: " Brobooke",
    subTitle: " Social Fitness Platform",
    insights: {
      desc: `Created responsive UI components for posts, profiles, and workout logs using modular design.
                 Integrated authentication and personalized dashboards, improving retention by ~18%.
                 Enhanced performance by reducing re - renders and optimizing image loading.
                 `,
      category: "Healthcare, Full-Stack Web Application",
      techStack: ["Next.js", "TypeScript", "TailwindCSS","Shadcn UI", "RestAPI",],
      reportLink: "", // add report link if available
    },
    
  },
  Insightify: {
    image: thewayfinder,
    title: " TheWayFinderOverseas",
    subTitle: "Study Abroad Consultancy",
    insights: {
      desc: `Designed and developed end-to-end frontend architecture with responsive and reusable layouts.Implemented contact and inquiry forms with API integration, reducing response time by 40%.Optimized for performance and accessibility, ensuring a 97% Lighthouse accessibility score.`,
      category: "AI, NLP, React Native, Mobile App",
      techStack: ["Next.js", "TypeScript", "TailwindCSS",],
      reportLink: "",
    },
    
  },
  AriseScholar: {
    image: truck, // replace with your imported image variable
    title: "Truck Management System",
    subTitle: "Dashboard for managing transport operations, tracking vehicles,and Route ",
    insights: {
      desc: `Built interactive dashboard components and improved navigation workflows.Ensured cross-browser compatibility and responsive layouts for seamless user experience.Emphasized reusability and maintainability, reducing code redundancy by 20%.`,
      category: "Education, AI, Web Application",
      techStack: ["Next.js", "TypeScript", "TailwindCSS",],
      reportLink: "", // add if you have a report or demo link
    },
   
  // },
  // MetaShield: {
  //   image: metashield,
  //   title: "MetaShield",
  //   subTitle: "AI-Powered Sensitive Document Classification",
  //   insights: {
  //     desc: `MetaShield is an AI-powered solution that classifies documents as Sensitive (Y) or Non-Sensitive (N)
  //                 using only metadata—no content analysis required! It enhances security and compliance with regulations
  //                 like GDPR, HIPAA, and DPDP by automating document classification.`,
  //     category: "Cybersecurity, AI/ML, Web Application",
  //     techStack: [py, django, react, tailwind, ml],
  //     reportLink: "",
  //   },
  //   githubLink: "https://github.com/IrfanNaikwade28/MetaShield.git",
  // },
  // qzwz: {
  //   image: qz,
  //   title: "Quizwhiz Junction",
  //   subTitle: "Online Quiz Platform",
  //   insights: {
  //     desc: `Quizwhiz Junction is an interactive web-based quiz application designed to make learning engaging and enjoyable. It offers a wide range of quizzes across various topics, providing users with real-time feedback and performance tracking through a point-based system.`,
  //     category: "Education, Interactive Quiz Application, Web Development",
  //     techStack: [php, html, css, js],
  //     reportLink: "",
  //   },
  //   githubLink: "https://github.com/IrfanNaikwade28/Quizwhiz-Junction.git",
  // },
  // emd: {
  //   image: emd,
  //   title: "Emedicine",
  //   subTitle: "Healthcare E-commerce, Web Application",
  //   insights: {
  //     desc: `E-Medicine is an online platform designed to streamline the purchase and management of medicines. The application offers users a convenient way to browse, search, and order medications, ensuring quick access to essential healthcare products. `,
  //     category: "Healthcare site, Web Development",
  //     techStack: [react, tailwind, html, css, js],
  //     reportLink: "",
  //   },
  //   githubLink: "https://github.com/IrfanNaikwade28/E-medicine.git",
  // },
  // algo: {
  //   image: algo,
  //   title: "Algorithm Analyzer",
  //   subTitle: "CMD based tool",
  //   insights: {
  //     desc: `AlgoAnalyzer is an interactive platform designed to help users understand and visualize the functioning of various algorithms and data structures. The application provides step-by-step visual representations, making complex concepts easier to grasp.`,
  //     category: "Education, Data Structures & Algorithms, Visualization Tool",
  //     techStack: [cpp],
  //     reportLink: "",
  //   },
  //   githubLink: "https://github.com/IrfanNaikwade28/AlgoAnalyzer.git",
  // },
  // ftc: {
  //   image: ftc,
  //   title: "Flip the Card",
  //   subTitle: "Card Game on web",
  //   insights: {
  //     desc: `Flip the Card is an engaging and interactive card-matching game designed for fun and cognitive skill enhancement. The game challenges users to match pairs of cards through memory and concentration. With its visually appealing design and smooth functionality, Flip the Card offers an entertaining experience while encouraging mental agility.`,
  //     category: "Game, Web Development, Interactive Application",
  //     techStack: [html, css, js],
  //     reportLink: "",
  //   },
  //   githubLink: "https://github.com/IrfanNaikwade28/Flip-the-Card.git",
  // },
  // tesla: {
  //   image: tesla,
  //   title: "Tesla",
  //   subTitle: "A Cloned website",
  //   insights: {
  //     desc: `The Tesla Web Project is a visually stunning and responsive landing page inspired by Tesla's innovative brand. The project showcases a sleek design with smooth animations and an intuitive layout, highlighting Tesla's vehicles and technology. Built with modern web development practices, it provides an immersive experience that captures the essence of a cutting-edge automotive brand.`,
  //     category: "Web Design, Landing Page",
  //     techStack: [html, css, js],
  //     reportLink: "",
  //   },
  //   githubLink: "https://github.com/IrfanNaikwade28/Web-Project-Tesla.git",
  // },
}};
