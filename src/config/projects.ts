type Project = {
  name: string;
  description: string;
  key_details: string[];
  benefits: string[];
  tech_stack: string[];
};

export const projects: Project[] = [
  {
    name: "Gartner - Unified Vendor Experience Portal",
    description:
      "This portal provides a <b>B2B</b> Unified experience for vendors to List their softwares, collect Reviews, Bid on Pay-Per-Click and Pay-Per-Lead basis on 1 portal instead of individually submitting same on <b>Capterra</b>, <b>GetApp</b>, <b>Software Advice</b> and <b>Upcity</b>",
    key_details: [
      "Website <b>Internationalization</b> & Review Collection Forms in 7 different languages",
      "<b>Automated Bidding</b>, pay-per-click and pay-per-lead <b>Realtime Bid/Position Updates</b> and Automated Configurable Mails",
      "PPC Bid <b>Calculators and Playground</b> to give vendors an estimated cost/spend",
      "Brand Building using badges and marketing tools",
      "<b>Reporting</b> - Clicks, Leads, Conversions filtered by Different Parameters",
      "Quick Glance Dashboards customized for Upgraded/Basic vendors with multiple <b>widgets</b>",
      "Payment - <b>Stripe/Braintree</b> Integration",
    ],
    benefits: [
      "Ease of 1 Bid for All platforms and AutoBidding functionality",
      "Easy user/Admin Role/Access Management across several products/campaigns",
    ],
    tech_stack: [
      "<b>RemixJS, i18n</b>, i18n-react, Components with <b>Storybook/Typescript, stitchesJS</b>, Rollbar, DataDog, GTM",
      "immer, jotai, zod, mocking with msw, react testing with jest, RTL and cypress, migrating to Playwright, tests run on Github Actions",
      "<b>Monorepo(Turborepo, NX, yarn workspaces with pnpm)</b>, changesets, conventional-commits, dangerJS checks",
      "BE - Kafka, ElasticSearch, RubyOnRails, OAuth, microservices on Kubernetes, Services using AWS",
    ],
  },
  {
    name: "TataAIG Insurance Portal (Public website)",
    description:
      "This portal allows users to <b>Buy</b> and <b>Renew</b> policies for <b>Car, Bike, Health and Travel Insurance</b>. It provides suitable comparisons and premium breakups to attract customers.",
    key_details: [
      "Resume Journey Capability & <b>Lead Generation with follow ups</b> & resume links",
      "Log maintenance on <b>cloudwatch</b> for easy debugging for data retained for 2 months in PROD env",
      "<b>SEO</b>, google page score, Forms/Widgets creation for normal & <b>AMP</b>(Accelerated Mobile pages)",
      "<b>RazorPay</b> Payments Integration, <b>Google Places API</b> Integration",
      "Combining <b>CMS & Transactional react</b> applications on <b>NGINX</b> with custom routing",
      "Content from <b>CloudFront CDN</b> and Cache-Policy for instant page loads",
      "Integration with <b>Adobe Target & Google Tag Manager</b> for personalized analytics content",
    ],
    benefits: [
      "Attracts daily business in lakhs & user-load is pretty high.",
      "<b>Zero Outage Deployments</b> & smooth <b>development cycles</b> using CICD from AWS pipeline",
    ],
    tech_stack: [
      "<b>Next.JS, Strapi CMS</b>, Sass, Bootstrap, AMP pages, GTM & DTM analytics, <b>RazorPay Payment</b>",
      "Github, AWS EC2, Lambda microservices, S3, automated CICD pipeline, SNS, SQS",
      "Public website optimization, <b>page score</b>, SEO, webpack config bundler",
    ],
  },
  {
    name: "Database Self Service Portal(DSSP)",
    description:
      "This portal allows application owners to schedule <b>Oracle/SQL Patching</b> on their databases/instances during off hours and executes them using CHEF DevOPs Integration using API. Every activity is logged by integrating with ServiceNow ITSM tool for documentation/audit.",
    key_details: [
      "Self Account Unlock/Password Reset without DBA involvement",
      "Self-Updating Inventory <b>contacts/Role Management</b> (Inventory serves as backend input for other critical applications)",
      "Scheduling/Rescheduling/Cancelling/Exempting UI Value Adds/Calendars",
      "Saving Preferred Outage Window(Weekly/Monthly)",
      "Handling <b>TimeZone Conversion</b>(including <b>DST</b> changes) for clients across various zones(America, Europe, Asia)",
      "Sending Mail notifications for every schedule Pre and Post activity/schedule change",
      "Reporting for Customers/DBA : Dashboard with <b>charts, analytics and tabular reports</b>",
      "Volume of Databases : (Prod/Non Prod)1600+ with multiple hosted applications",
    ],
    benefits: [
      "Reduced Turnaround Time for customer from standard <b>1 day SLA to zero</b> for Account Unlock/Password Reset",
      "DBA manual involvement reduced only to failure/exceptional cases saving lots of effort",
      "Reducing the outage downtime for Prod/Non Prod databases from <b>2/4 hours to 15-45 mins</b>",
    ],
    tech_stack: [
      "<b>React JS, Node JS with Express Framework</b>, Bootstrap/JQuery, Oracle Database, PL-SQL",
      "Github, Openshift, Rest API integration with ServiceNow ITSM tool and CHEF devOPs tool",
    ],
  },
  {
    name: "Causal Management and CSS portal",
    description:
      "CSS stands for <b>Customer Satisfaction Survey</b>. Causal Management is an internal portal which records the missed SLA reasons from DBA and reports to leads.",
    key_details: [
      "Automated email reminder to fill Causals justifying the reason for SLA miss",
      "Automated team SLA achieve/miss calculation at month end",
      "Survey/Feedback collection and analysis from customers for ITSM tickets",
      "Automated Notification Jobs to report Project leads",
      "Live Reporting Dashboard showing analysis, monthly trend, overall performance",
    ],
    benefits: [
      "Easy team management and <b>monitoring/improving SLA</b> achieved",
      "<b>Reducing manual follow-ups</b> and pulling reports",
    ],
    tech_stack: [
      "<b>Socket Programming</b> and CQN Oracle for <b>real-time</b> feed from databases/Node Server",
      "Next.JS(React Framework), Node JS with <b>Express</b> Framework, Sass, <b>PL-SQL</b>, Oracle Database",
      "Github, Openshift, Rest API integration with <b>ServiceNow</b> ITSM tool",
    ],
  },
];
