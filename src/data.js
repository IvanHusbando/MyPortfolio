//  icons
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone  ,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/1.png';
import Project2 from './assets/img/projects/1.png';
import Project3 from './assets/img/projects/1.png';
import Project4 from './assets/img/projects/1.png';
import Project5 from './assets/img/projects/1.png';
import Project6 from './assets/img/projects/1.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';
import SkillImg6 from './assets/img/skills/git.png';
import SkillImg7 from './assets/img/skills/jquery.png';
import SkillImg8 from './assets/img/skills/tailwind.png';
import SkillImg9 from './assets/img/skills/bootstrap.png';



// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills'
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/IvanHusbando',
  },
  {
    icon: <FiLinkedin/>,
    href: 'https://www.linkedin.com/in/ivanvizcarradev/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'React',
    buttonLabel: 'Repositorio',
    url: 'https://www.google.com',
    repository: 'https://www.github.com'
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'React / Bootstrap',
    buttonLabel: 'Repositorio',
    url: 'https://www.github.com',
    repository: 'https://www.github.com'
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'React',
    buttonLabel: 'Repositorio',
    url: 'https://www.github.com',
    repository: 'https://www.github.com'
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'React / Tailwind',
    buttonLabel: 'Repositorio',
    url: 'https://www.github.com',
    repository: 'https://www.github.com'
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'React',
    buttonLabel: 'Repositorio',
    url: 'https://www.github.com',
    repository: 'https://www.github.com'
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'React',
    buttonLabel: 'Repositorio',
    url: 'https://www.github.com',
    repository: 'https://www.github.com'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React',
  },
  {
    name: 'React / Bootstrap',
  },
  {
    name: 'React / Tailwind',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
];



// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description:'ivanvizcarra99@gmail.com'
  },
  {
    icon: <FiLinkedin />,
    title: 'LinkedIn',
    subtitle: 'Click below! :)',
    description: <a href='https://www.linkedin.com/in/ivanvizcarradev/' target="_blank" rel="noopener noreferrer">Linkedin</a>,
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Guadalajara, Jalisco, México',
    description: 'I want to serving clients worldwide',
  },
  {
    icon: <FiGithub/>,
    title: 'My GitHub',
    subtitle: 'All my projects',
    description: <a href='https://github.com/IvanHusbando' target="_blank" rel="noopener noreferrer">My GitHub</a>
  },
  {
    icon: <FiPhone/>,
    title: 'Send me a message',
    subtitle: '',
    description: <a href="https://api.whatsapp.com/send?phone=523314442340" target="_blank" rel="noopener noreferrer">
    +52 331 444 2340 (WhatsApp)
  </a>
  }
];