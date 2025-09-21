// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import django from "../assets/icons/skills-icon/django.svg";
import html from "../assets/icons/skills-icon/html.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
// import figma from "../assets/icons/skills-icon/figma.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
// import next from "../assets/icons/skills-icon/nextjs.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import php from "../assets/icons/skills-icon/php.svg";
import ml from "../assets/icons/skills-icon/ml.png";

// projectImagess
import respireX from "../assets/images/projectImages/project10.jpg";
import cliniclink from "../assets/images/projectImages/project12.png";
import arisescholar from "../assets/images/projectImages/project13.png";
import insightify from "../assets/images/projectImages/project11.png";
import qz from "../assets/images/projectImages/project2.png";
import tesla from "../assets/images/projectImages/project3.png";
import emd from "../assets/images/projectImages/project4.png";
import algo from "../assets/images/projectImages/project5.png";
// import furni from "../assets/images/projectImages/project6.png";
import ftc from "../assets/images/projectImages/project7.png";
// import ngo from "../assets/images/projectImages/project8.png";
import metashield from "../assets/images/projectImages/project9.png";

export const Projects = {
  RespireX: {
    image: respireX,
    title: "RespireX",
    subTitle: "Lung Disease Detection System",
    insights: {
      desc: ` RespireX is a lung disease detection system designed to
                  analyze X-ray images efficiently. This project simplifies the
                  diagnostic process by providing real-time insights, improving
                  accuracy, and reducing diagnostic time for doctors.`,
      category: "Healthcare, ML, Web Application",
      techStack: [ml, py, django, js, react, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/RespireX.git",
  },
  ClinicLink: {
    image: cliniclink, // replace with your imported image variable
    title: "ClinicLink",
    subTitle: "Healthcare Management Platform",
    insights: {
      desc: `ClinicLink is a full-stack healthcare management platform
                 designed to streamline workflows for doctors, patients, and admins.
                 It handles appointments, patient records, and reports, improving
                 efficiency and user experience across healthcare processes.`,
      category: "Healthcare, Full-Stack Web Application",
      techStack: [md, node, react, tailwind, js],
      reportLink: "", // add report link if available
    },
    githubLink: "https://github.com/IrfanNaikwade28/ClinicLink.git",
  },
  Insightify: {
    image: insightify,
    title: "Insightify",
    subTitle: "YouTube Comment Analyzer Tool",
    insights: {
      desc: `Insightify is a YouTube comment sentiment and toxicity analysis app built with React Native. It leverages AI and NLP to deliver instant feedback on audience emotion, public demands, and content suggestions. Ideal for creators aiming to understand and improve their engagement.`,
      category: "AI, NLP, React Native, Mobile App",
      techStack: [react, tailwind, py, django, ml],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Insightify.git",
  },
  AriseScholar: {
    image: arisescholar, // replace with your imported image variable
    title: "AriseScholar",
    subTitle: "AI-Powered Study Companion",
    insights: {
      desc: `AriseScholar is an AI-driven platform that converts study materials
                 (PDFs, DOCX, PYQs) into structured notes, flashcards, and quizzes.
                 It provides a clean dashboard to track progress and practice smarter,
                 helping students learn efficiently with AI-assisted summaries and quizzes.`,
      category: "Education, AI, Web Application",
      techStack: [react, tailwind, django, py],
      reportLink: "", // add if you have a report or demo link
    },
    githubLink: "https://github.com/IrfanNaikwade28/AriseScholar.git",
  },
  MetaShield: {
    image: metashield,
    title: "MetaShield",
    subTitle: "AI-Powered Sensitive Document Classification",
    insights: {
      desc: `MetaShield is an AI-powered solution that classifies documents as Sensitive (Y) or Non-Sensitive (N)
                  using only metadata—no content analysis required! It enhances security and compliance with regulations
                  like GDPR, HIPAA, and DPDP by automating document classification.`,
      category: "Cybersecurity, AI/ML, Web Application",
      techStack: [py, django, react, tailwind, ml],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/MetaShield.git",
  },
  qzwz: {
    image: qz,
    title: "Quizwhiz Junction",
    subTitle: "Online Quiz Platform",
    insights: {
      desc: `Quizwhiz Junction is an interactive web-based quiz application designed to make learning engaging and enjoyable. It offers a wide range of quizzes across various topics, providing users with real-time feedback and performance tracking through a point-based system.`,
      category: "Education, Interactive Quiz Application, Web Development",
      techStack: [php, html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Quizwhiz-Junction.git",
  },
  emd: {
    image: emd,
    title: "Emedicine",
    subTitle: "Healthcare E-commerce, Web Application",
    insights: {
      desc: `E-Medicine is an online platform designed to streamline the purchase and management of medicines. The application offers users a convenient way to browse, search, and order medications, ensuring quick access to essential healthcare products. `,
      category: "Healthcare site, Web Development",
      techStack: [react, tailwind, html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/E-medicine.git",
  },
  algo: {
    image: algo,
    title: "Algorithm Analyzer",
    subTitle: "CMD based tool",
    insights: {
      desc: `AlgoAnalyzer is an interactive platform designed to help users understand and visualize the functioning of various algorithms and data structures. The application provides step-by-step visual representations, making complex concepts easier to grasp.`,
      category: "Education, Data Structures & Algorithms, Visualization Tool",
      techStack: [cpp],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/AlgoAnalyzer.git",
  },
  ftc: {
    image: ftc,
    title: "Flip the Card",
    subTitle: "Card Game on web",
    insights: {
      desc: `Flip the Card is an engaging and interactive card-matching game designed for fun and cognitive skill enhancement. The game challenges users to match pairs of cards through memory and concentration. With its visually appealing design and smooth functionality, Flip the Card offers an entertaining experience while encouraging mental agility.`,
      category: "Game, Web Development, Interactive Application",
      techStack: [html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Flip-the-Card.git",
  },
  tesla: {
    image: tesla,
    title: "Tesla",
    subTitle: "A Cloned website",
    insights: {
      desc: `The Tesla Web Project is a visually stunning and responsive landing page inspired by Tesla's innovative brand. The project showcases a sleek design with smooth animations and an intuitive layout, highlighting Tesla's vehicles and technology. Built with modern web development practices, it provides an immersive experience that captures the essence of a cutting-edge automotive brand.`,
      category: "Web Design, Landing Page",
      techStack: [html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Web-Project-Tesla.git",
  },
};
