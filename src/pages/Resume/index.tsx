import { resume } from "~/config";
import { ResumeDownload } from "../ResumeDownload";

export const Resume = () => {
  const obj = {
    name: resume.profile.name,
    designation: resume.profile.designation,
    mobile_no: resume.profile.mobile_no,
    email: resume.profile.email,
    intro: resume.profile.intro,
    skills: Object.entries({
      ...resume.skills.primary,
      ...resume.skills.secondary,
    }).map(([title, { label }]) => `${title} - ${label}`),
    experience: resume.experience.map(
      ({ name, designation, year_end, year_start }) =>
        `${designation} at ${name} [${year_start} - ${year_end}]`
    ),
    education: resume.education,
    projects: resume.projects,
  };

  return (
    <div>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
      <ResumeDownload />
    </div>
  );
};
