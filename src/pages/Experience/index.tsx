import { ReactComponent as GradCapIcon } from "~/assets/graduation-cap.svg";
import { ReactComponent as BriefcaseIcon } from "~/assets/briefcase.svg";
import { ReactComponent as CalendarIcon } from "~/assets/calendar-days.svg";
import { ReactComponent as CovidIcon } from "~/assets/covid.svg";
import { resume } from "~/config";
import s from "./experience.module.css";
import { Tooltip } from "~/components/Tooltip";

export const Experience = () => {
  return (
    <div className={["stack", s.wrapper].join(" ")}>
      <div className={"inline"}>
        <BriefcaseIcon />
        <h3 className={"heading"}>Experience</h3>
      </div>
      {resume.experience.map(({ designation, name, year_end, year_start }) => (
        <div key={name} className={["stack", "g05", s.experience].join(" ")}>
          <div className={s.expTitle}>{name}</div>
          <div className={s.expSubTitle}>{designation}</div>
          <div className={s.time}>
            <CalendarIcon className={s.calendar} />
            {year_start} - {year_end}
            {[year_end].includes("Mar 2020") && (
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span>
                    <CovidIcon className={s.covid} />
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content side="right">
                  Job Changed due to Covid 19
                </Tooltip.Content>
              </Tooltip.Root>
            )}
          </div>
        </div>
      ))}
      <div className={"inline"}>
        <GradCapIcon />
        <h3 className={"heading"}>Education</h3>
      </div>
      {resume.education.map(
        ({
          degree,
          year_start,
          year_end,
          institute_name,
          university_board,
          score,
        }) => (
          <div
            className={["stack", "g05", s.experience].join(" ")}
            key={degree}
          >
            <div className={s.expTitle}>
              {degree} - {score}
            </div>
            <div className={s.expSubTitle}>
              {institute_name} ({university_board})
            </div>
            <div className={["inline", s.time].join(" ")}>
              <CalendarIcon className={s.calendar} />
              {year_start} - {year_end}
            </div>
          </div>
        )
      )}
    </div>
  );
};
