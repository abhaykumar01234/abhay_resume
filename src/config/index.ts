import { education } from "./education";
import { experience } from "./industry";
import { projects } from "./projects";

const profile = {
  name: "Abhay Kumar",
  designation: "Sr React JS Developer",
  mobile_no: "+91-8218150662",
  email: "abhaykumar01234@gmail.com",
  location: "Bokaro Steel City, Jharkhand",
  nationality: "Indian",
  img_url: "/profile.png",
  github_url: "https://github.com/abhaykumar01234",
  linked_in_url: "www.linkedin.com/in/abhaykumar01234",
  website_url: "https://codepen.io/abhaykumar01234",
  intro:
    "To utilize my core technical competencies and act as a solution finder for individual and organizational growth",
};

const skills = {
  js: {
    basic: "Javascript ES5/ES6/ES2019, Typescript",
    frontend:
      "React JS, React Hooks, Redux, Context, Apollo Client, React Query, React Native",
    bff: "Next JS, Remix JS",
    backend: "Node JS, Express JS, GraphQL",
    tools:
      "Webpack 4/5, CRA, Vite, Storybook, Turborepo, NX, Yarn Workspaces with PNPM, Strapi CMS",
    ci: "Github Actions, Danger JS, Webhook",
    testing:
      "Jest, RTL(React Testing Library), MSW(Mock Service Workers), Cypress",
  },
  styling:
    "HTML, CSS, SCSS, Grid/FlexBox layouts, Styled-Components, Stitches, Bootstrap, MaterialUI, SemanticUI",
  api: "Rest API Integration and doc(Swagger), Google Places AutoComplete APIs, Razorpay Payment Integration APIs, ServiceNow ITSM, FreshDesk, JIRA(Agile Tool), Confluence, Slack",
  server: "Linux Shell Scripting, Docker Containerization, Docker Compose",
  database: "Oracle(DBA), PL/SQL, MongoDB, PostgreSQL, Firestore, DynamoDB",
  analytics:
    "DataDog, GTM, LightHouse & GTMetrics Score Optimization, SEO & Meta Tag Mgmt",
  cloud:
    "AWS(EC2, Lambda, S3, Elastic BeanStalk, CodeCommit, CodeBuild, CodeDeploy), Heroku/Netlify/Firebase",
};

export const resume = {
  profile,
  education,
  experience,
  skills,
  projects,
  certifications: [
    "Completed 6 weeks Training on Oracle, PL-SQL, Unix & Data Warehousing at Tata Consultancy Services, Trivandrum [Jan, 2016].",
    "Completed 4 months Training and 1Z0-071 certification of Oracle Database Administrator at Tata Consultancy Services, Noida [March, 2017]",
    "Completed several Training/Workshops on Node JS, React JS on pluralsight and Udemy",
    "Completed several Training/Workshops on Remix JS on Frontend Masters 2022",
  ],
  interests: [
    "Web Design & Development",
    "Leadership and Team Oriented",
    "Goal Oriented",
  ],
  hosted_websites: [],
  // some of my works, github pages and vercel deployments in iframe
};
