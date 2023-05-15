import { education } from "./education";
import { experience } from "./industry";
import { projects } from "./projects";

const profile = {
  name: "Abhay Kumar",
  designation: "Sr React JS Developer",
  mobile_no: "+91-8218150662",
  email: "abhaykumar01234@gmail.com",
  location: "Bokaro Steel City, Jharkhand",
  img_url: "/",
  github_url: "/",
  linked_in_url: "/",
  intro:
    "To utilize my core technical competencies and act as a solution finder for individual and organizational growth",
};

const skills = {
  js: {
    basic: "Javascript ES5/ES6/ES2019, Typescript, Webpack 4/5",
    frameworks: {
      frontend:
        "React JS, React Hooks, Redux, Context, Apollo Client, React Query, React Native",
      bff: "Next JS, Remix JS",
      backend: "Node JS, Express JS, GraphQL",
    },
    tools: "CRA, Vite, Storybook, Turborepo, NX, Yarn Workspaces with PNPM",
    ci: "Github Actions, Danger JS, Webhook",
    cms: "Strapi CMS",
  },
  styling:
    "HTML, CSS, SCSS, Grid/FlexBox layouts, Styled-Components, Stitches, Bootstrap, MaterialUI, SemanticUI",
  api: "Rest API Integration and doc(Swagger), Google Places AutoComplete APIs, Razorpay Payment Integration APIs, ServiceNow ITSM, FreshDesk, JIRA(Agile Tool)",
  server: "Linux Shell Scripting, Docker Containerization, Docker Compose",
  database: "Oracle(DBA), PL/SQL, MongoDB, PostgreSQL, Firestore, DynamoDB",
  analytics:
    "DataDog, GTM, LightHouse & GTMetrics Score Optimization, SEO & Meta Tag Mgmt",
  cloud:
    "AWS(EC2, Lambda, S3, Elastic BeanStalk, CodeCommit, CodeBuild, CodeDeploy), Openshift/Heroku/Netlify/Firebase",
};

export const Resume = {
  profile,
  education,
  experience,
  skills,
  projects,
  interests: [],
  // some of my works, github pages and vercel deployments in iframe
};
