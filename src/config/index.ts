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
  primary: {
    "JS/TS": { label: "Javascript ES5/ES6/ES2019, Typescript", score: "90" },
    Styling: {
      label:
        "HTML, CSS, SCSS, Grid/FlexBox layouts, Styled-Components, Stitches, Bootstrap, MaterialUI, SemanticUI",
      score: "100",
    },
    React: {
      label:
        "React JS, React Hooks, Redux, Context, Apollo Client, React Query, React Native",
      score: "95",
    },
    "Backend For Frontend": {
      label: "Next JS, Remix JS",
      score: "70",
    },
    Node: {
      label: "Node JS, Express JS, GraphQL",
      score: "75",
    },
    Tools: {
      label:
        "Webpack 4/5, CRA, Vite, Storybook, Turborepo, NX, Yarn Workspaces with PNPM, Strapi CMS",
      score: "85",
    },
    CI: {
      label: "Github Actions, Danger JS, Webhook",
      score: "60",
    },
    Testing: {
      label:
        "Jest, RTL(React Testing Library), MSW(Mock Service Workers), Cypress",
      score: "85",
    },
  },
  secondary: {
    Analytics: {
      label:
        "DataDog, GTM, LightHouse & GTMetrics Score Optimization, SEO & Meta Tag Mgmt",
      score: 60,
    },
    Server: {
      label: "Linux Shell Scripting, Docker Containerization, Docker Compose",
      score: 100,
    },
    API: {
      label:
        "Rest API Integration and doc(Swagger), Google Places AutoComplete APIs, Razorpay Payment Integration APIs, ServiceNow ITSM, FreshDesk, JIRA(Agile Tool), Confluence, Slack",
      score: 90,
    },
    Database: {
      label: "Oracle(DBA), PL/SQL, MongoDB, PostgreSQL, Firestore, DynamoDB",
      score: 60,
    },
    Cloud: {
      label:
        "AWS(EC2, Lambda, S3, Cloudfront, Elastic BeanStalk, CodeCommit, CodeBuild, CodeDeploy), Heroku/Netlify/Firebase",
      score: 80,
    },
  },
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
