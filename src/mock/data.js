import { nanoid } from "nanoid";
import NicksResume from "../assets/Nick Brimmer - Developer Resume.pdf";

export const headData = {
  title: "NickBrimmer.dev",
  lang: "en",
  description: "Portfolio of Nick Brimmer",
};

export const heroData = {
  title: "Hello, my name is ",
  name: "Portfolio",
  subtitle: "",
  cta: "About Nick",
};

export const aboutData = {
  img: "profile.jpg",
  paragraphOne: `Strategic, dependable and diligent front end developer with a proven work ethic, bringing an established knowledge in JavaScript engineering.`,
  paragraphTwo: `Passionate about teamwork, improving
  results, communication and UX design. Consistent to deliver profitable results above expectations. Adept to
  working independently or in collaborative settings`,
  paragraphThree: `Excited to design the next world-changing product with equally ambitious and team members.`,
  resume: NicksResume,
};

export const projectsData = [
  {
    id: nanoid(),
    img: "project2.png",
    title: "TypeScript eCommerce Store",
    info: `Full-stack web application for an Ecommerce website. Technologies used include: React, Redux, SCSS, Firebase, as well as Stripe Payments. This includes images being rendered from a deployed Firebase database. React custom components used throughout. Global state context created with Redux, and then pulled with React-Redux hooks.`,
    info2: "",
    url: "https://typescript-ecommerce.netlify.app/",
    repo: "https://github.com/NickBrimmer/TypeScript-eCommerce-Site",
  },
  {
    id: nanoid(),
    img: "project3.png",
    title: "Happy Hour PDX",
    info: `Web app designed for searching the downtown metropolitan area for happy hours any time of the day. Also, choose to create a favorites list and highlight categories you would like to review from all restaraunts quickly. My greatest contribution was in the wholistic design, logo, color pallet, images and typography.`,
    info2: "",
    url: "https://alchemy-field-trip-group.github.io/happy-hour-project/",
    repo: "https://github.com/NickBrimmer/happy-hour-pdx",
  },
  {
    id: nanoid(),
    img: "project1.png",
    title: "Tasty.com",
    info: `Have you ever wondered where all the foodies go? Well, I can tell you it's right here! Website designed to mock a foodie's dream. Focus was placed upon React development with modular SCSS.`,
    info2: "",
    url: "https://tastyfoodwebsite.netlify.app/",
    repo: "https://github.com/NickBrimmer/tastyfood.com",
  },
];

export const contactData = {
  cta: "",
  btn: "",
  email: "mailto:nickbrimmer@gmail.com",
};

export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/NickBrimmer",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "https://codepen.io/NickBrimmer",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/nick-brimmer/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/nickbrimmer",
    },
  ],
};
