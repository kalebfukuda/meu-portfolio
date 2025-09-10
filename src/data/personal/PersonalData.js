import { StacksImages } from "./StacksImages";

export const PersonalData = [
  {
    company: "Geologistica",
    content: {
      role: "Full-stack Developer",
      stacks: {
        data: [StacksImages["sql-server"]],
        backend: [StacksImages["c-sharp"]],
        frontEnd: [
          StacksImages["html-5"],
          StacksImages["js"],
          StacksImages["css-3"],
          StacksImages["bootstrap"],
          StacksImages["devexpress"],
          StacksImages["leaflet"],
        ],
        others: [StacksImages["OpenGL"], StacksImages["Sourcetree"]],
      },
      projects: ["Giulia", "Tropics", "AutoBus", "PesquisaOD"],
      link: "https://www.geologistica.com.br/",
      sector: "Logistics and Geoinformation",
      description: `Geologística is a Brazilian company with over 30 years of experience in transportation, logistics, and geoinformation.
        Geologística offers a range of solutions that combine simulation algorithms, geospatial data, and optimization techniques to enhance logistics 
        and transportation planning.        
        Their services cater to both public and private sectors, aiming to improve performance and productivity.
    `,
      comment: `At Geologistica, I started my professional career, beginning as an intern and later being hired as a full-stack developer. 
      I worked in a small team of 5–10 people, handling almost everything: UI/UX, front-end, back-end, databases, and even direct interaction with customers. 
      It was an excellent experience to learn and improve my skills as a developer.`,
    },
    video: "",
  },
  {
    company: "Sinqia (Evertec Brasil)",
    content: {
      role: "Full-stack Developer",
      stacks: {
        data: [StacksImages["sql-server"], StacksImages["oracle"]],
        backend: [StacksImages["c-sharp"]],
        frontEnd: [
          StacksImages["html-5"],
          StacksImages["js"],
          StacksImages["css-3"],
          StacksImages["bootstrap"],
          StacksImages["AngularJS"],
        ],
        others: [
          StacksImages["github"],
          StacksImages["jira"],
          StacksImages["confluence"],
          StacksImages["kanban"],
          StacksImages["scrum"],
          StacksImages["api"],
          StacksImages["RabbitMQ"],
        ],
      },
      projects: ["Pension and Investments"],
      sector: "Finance",
      link: "https://www.geologistica.com.br/",
      description: `Sinqia S.A., now part of Evertec Brasil, is a Brazilian fintech company specializing in 
        software solutions for the financial sector. 
        Sinqia provides core banking systems, investment management platforms, pension fund software, 
        consortium management tools, and digital transformation services for financial institutions. 
        Sinqia has been recognized as one of the top 100 global fintech companies by IDC, 
        highlighting its market presence and potential for growth in the financial services sector.
    `,
      comment: `My second experience as a software developer was at a larger company, with 5K–10K employees.
      I worked as part of the customization squad in the pension and investments area, handling client-specific customizations, fixing bugs, improving system stability and performance, 
      and testing and deploying the system to client infrastructure. 
      A special highlight was participating in several critical deployment tasks, where I was responsible for ensuring smooth releases under tight deadlines. `,
    },
    video: "",
  },
  {
    company: "Self employee",
    content: {
      role: "Electrician",
      stacks: {
        data: [],
        backend: [],
        frontEnd: [],
        others: [
          StacksImages["teamwork"],
          StacksImages["communication"],
          StacksImages["learning"],
        ],
      },
      projects: ["Warehouses", "Hospitals", "Offices"],
      sector: "Construction",
      link: "",
      description: `My first professional experience in Japan, collaborating with a multicultural team. 
    Gained foundational knowledge in electrical systems and construction through self-directed learning.
    `,
      comment: `Seeking new challenges, I moved to Japan with my wife, looking for new opportunities and purpose. 
      I started working as an electrician on construction sites, learning on the job and meeting new people. 
      It was tough at times, but it was a great experience to gain financial stability and reflect on my next steps. `,
    },
    video: "",
  },
  {
    company: "Le Wagon Tokyo",
    content: {
      role: "Student",
      stacks: {
        data: [StacksImages["sql"]],
        backend: [StacksImages["ruby"], StacksImages["rubyonrails"]],
        frontEnd: [
          StacksImages["html-5"],
          StacksImages["js"],
          StacksImages["css-3"],
          StacksImages["bootstrap"],
          StacksImages["Vue"],
        ],
        others: [
          StacksImages["github"],
          StacksImages["Figma"],
          StacksImages["Heroku"],
          StacksImages["OpenAI"],
        ],
      },
      projects: ["WatchList", "mailAI", "Foodly"],
      sector: "Study",
      link: "https://www.lewagon.com/",
      description: `Le Wagon's AI Software Development Bootcamp is an advanced iteration of their 
        renowned Web Development program, now enhanced with cutting-edge artificial intelligence tools and techniques. 
        This intensive 9-week course is designed for individuals aiming to integrate AI 
        capabilities into full-stack web applications, utilizing the same technologies that power modern 
        AI startups and platforms like ChatGPT.`,
      comment: `After two years of hardwork as an autonomous electrician, decided to go back to my formation area.
        Searched for some courses and found Le Wagon AI Softare Development Bootcamp, a renowned course, with great impact in Tokyo and, found the opportunity to learn in depth new technologies and update my knowledge.
        Special attention to our final project "Foodly", An AI-powered cooking assistant that lets you snap a photo of ingredients and generate recipes.`,
      video: "",
    },
  },
];
