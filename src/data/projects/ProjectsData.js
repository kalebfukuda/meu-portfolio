import { ProjectsImages } from "./ProjectsImages";

export const ProjectsData = [
  {
    title: "Foodly",
    stacks: ["Ruby-on-Rails", "Postgres", "OpenLLM"],
    order: "1",
    listImages: ProjectsImages.foodly,
    description: `An AI-powered cooking assistant that lets you snap a photo of your ingredients 
      and instantly generates creative, personalized recipes using OpenLLM. Optimized for smartphones.`,
    url: "https://foodly-3fea8ca0b3df.herokuapp.com/",
    github: "https://github.com/Guayamose/Foodly",
  },
  {
    title: "MailAI",
    stacks: ["Ruby-on-Rails", "Postgres", "OpenLLM"],
    order: "2",
    listImages: ProjectsImages.mailAI,
    description: `An intelligent mail chatbot powered by OpenLLM that drafts and sends email 
      replies with the right tone and level of politeness tailored to each recipient.`,
    url: "",
    github: "https://github.com/Guayamose/Email-chatbot-helper",
  },
  {
    title: "TouchTime",
    stacks: ["Node.js", "Javascript", "React", "SQL"],
    order: "3",
    listImages: ProjectsImages.touchTime,
    description: `A smart app designed for Brazilian small companies to log your daily work hours and transform them into insightful dashboards.
      Easily track your productivity, understand your work patterns, and get clear reports on monthly earnings, 
      time allocation, and personal work style.`,
    url: "",
    github: "https://github.com/kalebfukuda/TouchTime",
  },
];
