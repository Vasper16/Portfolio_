import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
  FaMarkdown,
  FaFigma,
  FaPython,
  FaCube,
  FaTwitter,
  FaAws,
} from 'react-icons/fa';

import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLatex,
  SiGit,
  SiVscode,
  SiTensorflow,
  SiKeras,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
} from 'react-icons/si';

import { VscVscodeInsiders } from "react-icons/vsc";

import values from 'values.js';

import smartConnectImg from './images/smartconnect.png';
import deepCnnImg from './images/deep_cnn.png';
import youtubeAutoImg from './images/youtubeauto.png';

const navLinks = [
  {
    name: 'home',
    url: '#',
  },
  {
    name: 'projects',
    url: '#projects',
  },
  {
    name: 'contact',
    url: '#contact',
  },
];

const themes = [
  {
    name: 'blue',
    color: '#2a93ec',
    clrValues: new values('#2a93ec').all(10),
  },
  {
    name: 'darkpurple',
    color: '#7952b3',
    clrValues: new values('#7952b3').all(10),
  },
  {
    name: 'pink',
    color: '#ff69b4',
    clrValues: new values('#ff69b4').all(10),
  },
  {
    name: 'silvergrey',
    color: '#C0C0C0',
    clrValues: new values('#C0C0C0').all(10),
  },
];

const socials = [
  {
    name: 'github',
    url: 'https://github.com/Vasper16',
    icon: <FaGithub />,
  },
  {
    name: 'twitter',
    url: 'https://x.com/Jyotir_1602',
    icon: <FaTwitter/>,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jyotiraditya-tiwary-16jt/',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/_jyotiraditya_1602/',
    icon: <FaInstagram />,
  },
];

const languages = [
  {
    name: 'C++',
    icon: <SiCplusplus />,
    color: '#00599C',
    desc: 'C++ is a powerful language widely used for system/software development.',
  },
  {
    name: 'Python',
    icon: <SiPython />,
    color: '#3776AB',
    desc: 'Python is popular for web development, scripting, and especially machine learning.',
  },
  {
    name: 'SQL',
    icon: <SiMysql />, 
    color: '#4479A1',
    desc: 'SQL is used to manage and query relational databases.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: '#47A248',
    desc: 'MongoDB is a NoSQL document database used for scalable applications.',
  },
  {
    name: 'MATLAB',
    icon: <FaCube />,
    color: '#0076A8',
    desc: 'MATLAB is widely used for numerical computing and algorithm development.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: '#F7DF1E',
    desc: 'JavaScript enables interactive front-end web development.',
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 />,
    color: '#E34F26',
    desc: 'HTML5 structures web page content.',
  },
  {
    name: 'CSS3',
    icon: <SiCss3 />,
    color: '#1572B6',
    desc: 'CSS3 is used for styling and layout of web pages.',
  },
  {
    name: 'LaTeX',
    icon: <SiLatex />,
    color: '#008080',
    desc: 'LaTeX is used for high-quality typesetting of scientific documents.',
  },
  {
    name: 'Git',
    icon: <SiGit />,
    color: '#F05032',
    desc: 'Git is a version control system for managing code changes.',
  },
   {
    name: 'VS Code',
    icon: <VscVscodeInsiders />,
    color: '#007ACC',
    desc: 'Visual Studio Code is a lightweight but powerful source code editor.',
  },
  {
    name: 'TensorFlow',
    icon: <SiTensorflow />,
    color: '#FF6F00',
    desc: 'TensorFlow is a library for machine learning and deep learning.',
  },
  {
    name: 'Keras',
    icon: <SiKeras />,
    color: '#D00000',
    desc: 'Keras is a high-level neural networks API running on TensorFlow.',
  },
  {
    name: 'React',
    icon: <SiReact />,
    color: '#61DAFB',
    desc: 'React is a popular library for building user interfaces.',
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    color: '#339933',
    desc: 'Node.js allows JavaScript to be used for server-side programming.',
  },
  {
    name: 'Express.js',
    icon: (
      <p
        className="flex-center pd-0 mg-0 tf-y-5"
        style={{ width: 36, height: 36, color: '#000' }}
      >
        ex
      </p>
    ),
    color: '#000000',
    desc: 'Express.js is a web framework for Node.js used to build APIs.',
  },
 {
  name: 'AWS',
  icon: <FaAws />,
  color: '#FF9900',
  desc: 'Amazon Web Services (AWS) offers cloud computing and hosting solutions.',
}
];

const projects = [
  {
    name: 'SmartConnect 6G',
    image: smartConnectImg,
    github_url: 'https://github.com/Vasper16/SmartConnect-6G',
    desc: 'An AI-powered Q-learning model to optimize LTE-A random access for M2M communication in future 6G networks. Achieved reduced collision and access delay in simulations using MATLAB and Python.',
    stack: ['Python', 'MATLAB'],  // <-- capitalized to match languages array
    featured: true,
  },
  {
    name: 'DeepCNN Image Classifier',
    image: deepCnnImg,
    github_url: 'https://github.com/Vasper16/Deep_Vision_Image_Classifier',
    site_url: '',
    desc: 'Built a Deep Convolutional Neural Network (CNN) for image classification using TensorFlow and Keras. Achieved high accuracy on benchmark datasets through advanced data augmentation and model tuning.',
    stack: ['Python', 'TensorFlow', 'Keras'],  // capitalized
    featured: true,
  },
  {
    name: 'AI YouTube Automation',
    image: youtubeAutoImg,
    github_url: 'https://github.com/jyotiraditya/youtube-ai-n8n',
    site_url: '',
    desc: 'An end-to-end automation system using n8n, JSON2Video, and ElevenLabs to generate and publish AI-narrated YouTube videos. Fully no-code with Google Sheets integration.',
    stack: ['JavaScript', 'n8n', 'Node.js'],  // capitalized & matching language names
    featured: false,
  },
  {
    name: 'Portfolio Website',
    image: '',
    github_url: 'https://github.com/Vasper16/Portfolio_',
    site_url: '',
    desc: 'My personal portfolio built using React, fully customized to showcase my projects, resume, and technical background. Hosted on GitHub Pages.',
    stack: ['JavaScript', 'React', 'CSS3', 'HTML5'],  // capitalized
    featured: false,
  }
];


export { navLinks, themes, socials, languages, projects };
