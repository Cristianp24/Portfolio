import {
  api,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  express,
  postgres,
  jira,
  rickandmorty,
  pokeapi,
  motos,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "jira",
    icon: jira,
  },
  

];


const projects = [
  {
    name: " ToDo Rest Api ",
    description:
      "Web application that allows users to create, update, delete and manage their tasks efficiently using a RESTful API.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Swagger",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Cache-Rate Limit",
        color: "yellow-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/Cristianp24/ToDo",
    source_deploy_link: "https://todo-restapi-za6s.onrender.com/",
  },
  {
    name: " Mitsumichi ",
    description:
      "E-commerce where all can buy differents Motobikes,with filters,sorts,google auth and dashboard admin",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: motos,
    source_code_link: "https://github.com/Cristianp24/Mitsumichi",
    source_deploy_link: "https://mitsumichi-develop.vercel.app/",
  },
  {
    name: "Rick & Morty",
    description:
      "SPA that allows users to search for and view information about Rick and Morty characters and others functionalities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "sequelize",
        color: "orange-text-gradient",
      },
    ],
    image: rickandmorty,
    source_code_link: "https://github.com/Cristianp24/rick_and_morty",
    source_deploy_link: "https://mitsumichi-develop.vercel.app/",
  },
  {
    name: "PokeaApi",
    description:
      "Web application that enables users to search, filter, sort, view details and  create Pokemons",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: pokeapi,
    source_code_link: "https://github.com/Cristianp24/PI-Pokemon-main",
    source_deploy_link: "https://mitsumichi-develop.vercel.app/",
  },
  
  
];

export { technologies, projects };
