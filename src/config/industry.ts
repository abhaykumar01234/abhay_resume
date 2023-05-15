type Industry = {
  year_start: number;
  year_end: number | "Present";
  name: string;
  designation: string;
};

export const experience: Industry[] = [
  {
    year_start: 2016,
    year_end: 2019,
    designation: "Node/React developer",
    name: "Tata Consultancy Services",
  },
  {
    year_start: 2019,
    year_end: 2020,
    designation: "Full Stack Developer",
    name: "Nagarro Software Pvt Ltd",
  },
  {
    year_start: 2020,
    year_end: 2021,
    designation: "MERN Stack Developer",
    name: "Gemini Solutions",
  },
  {
    year_start: 2021,
    year_end: "Present",
    designation: "Sr Frontend Engineer II",
    name: "Gartner, Inc.",
  },
];
