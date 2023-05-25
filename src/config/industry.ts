type Industry = {
  year_start: string;
  year_end: string | "Present";
  name: string;
  designation: string;
};

export const experience: Industry[] = [
  {
    year_start: "Mar 2021",
    year_end: "Present",
    designation: "Sr Frontend Engineer II",
    name: "Gartner, Inc.",
  },
  {
    year_start: "Mar 2020",
    year_end: "Mar 2021",
    designation: "MERN Stack Developer",
    name: "Gemini Solutions",
  },
  {
    year_start: "Sep 2019",
    year_end: "Mar 2020",
    designation: "Full Stack Developer",
    name: "Nagarro Software Pvt Ltd",
  },
  {
    year_start: "Jan 2016",
    year_end: "Sep 2019",
    designation: "Node/React developer",
    name: "Tata Consultancy Services",
  },
];
