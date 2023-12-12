type Industry = {
  year_start: string;
  year_end: string | "Present";
  name: string;
  designation: string;
};

export const experience: Industry[] = [
  {
    year_start: "Mar 2021", // 10/03/2021
    year_end: "Present",
    designation: "Sr Frontend Engineer II",
    name: "Gartner, Inc.",
  },
  {
    year_start: "Apr 2020", // 20/04/2020
    year_end: "Mar 2021", // 09/03/2021
    designation: "MERN Stack Developer",
    name: "Gemini Solutions",
  },
  {
    year_start: "Sep 2019", // 25/09/2019
    year_end: "Mar 2020", // 15/04/2020
    designation: "Full Stack Developer",
    name: "Nagarro Software Pvt Ltd",
  },
  {
    year_start: "Jan 2016", // 28/01/2016
    year_end: "Sep 2019", // 18/09/2019
    designation: "Node/React developer",
    name: "Tata Consultancy Services",
  },
];
