export type DegreeCourse = {
  year_start: number;
  year_end: number;
  university_board: string;
  degree: string;
  institute_name: string;
  score: string;
};

export const education: DegreeCourse[] = [
  {
    year_start: 2011,
    year_end: 2015,
    university_board: "RGPV",
    degree: "B.E(CSE)",
    institute_name: "RKDF IST",
    score: "8.33",
  },
  {
    year_start: 2010,
    year_end: 2011,
    university_board: "CBSE",
    degree: "12th Grade",
    institute_name: "Chinmaya Vidyalaya",
    score: "73.4%",
  },
  {
    year_start: 2008,
    year_end: 2009,
    university_board: "CBSE",
    degree: "10th Grade",
    institute_name: "M.G.M.H.S.School",
    score: "91.8%",
  },
];
