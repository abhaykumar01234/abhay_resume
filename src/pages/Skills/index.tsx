import { type CSSProperties } from "react";
import { resume } from "~/config";
import { Tooltip } from "~/components/Tooltip";
import { Dialog } from "~/components/Dialog";
import s from "./skills.module.css";

export const Skills = () => {
  return (
    <div className={["stack", s.skillWrapper].join(" ")}>
      <h3 className={"heading"}>Skills</h3>
      <h4 className={s.title}>Primary skills</h4>
      <div className={["inline g15", s.skillBox].join(" ")}>
        {Object.entries(resume.skills.primary).map(
          ([title, { label, score }], idx) => (
            <Tooltip.Root key={idx}>
              <Tooltip.Trigger asChild>
                <div
                  className={s.chart}
                  style={{ "--score": `${score}%` } as CSSProperties}
                >
                  <div className={s.score}>{score}%</div>
                  <div className={s.title}>{title}</div>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>{label}</Tooltip.Content>
            </Tooltip.Root>
          )
        )}
      </div>
      <h4 className={s.title}>Secondary skills</h4>
      <div className="stack g1">
        {Object.entries(resume.skills.secondary).map(
          ([title, { label, score }], idx) => (
            <div key={idx} className={s.secondarySkill}>
              <b className={s.title}>{title}</b>
              <Tooltip.Root defaultOpen={idx === 1}>
                <Tooltip.Trigger asChild>
                  <div className={s.scoreBox}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div
                        key={num}
                        className={[
                          s.score,
                          score / 20 >= num ? s.checked : "",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content side="right">{label}</Tooltip.Content>
              </Tooltip.Root>
            </div>
          )
        )}
      </div>
      <div>
        <br />
        <Dialog.Root>
          <Dialog.Trigger className="primary">Read More</Dialog.Trigger>
          <Dialog.Content className="large">
            <Dialog.Header>
              <h3 className="heading">Skills</h3>
            </Dialog.Header>
            <Dialog.Body className={["stack", s.dialogBody].join(" ")}>
              <h4 className={s.title}>Primary skills</h4>
              <div className={["stack g05", s.content].join(" ")}>
                {Object.entries(resume.skills.primary).map(
                  ([title, { label }]) => (
                    <p key={title}>
                      <b>{title}</b> - {label}
                    </p>
                  )
                )}
              </div>
              <h4 className={s.title}>Secondary skills</h4>
              <div className={["stack g05", s.content].join(" ")}>
                {Object.entries(resume.skills.secondary).map(
                  ([title, { label }]) => (
                    <p key={title}>
                      <b>{title}</b> - {label}
                    </p>
                  )
                )}
              </div>
            </Dialog.Body>
            <Dialog.Footer style={{ textAlign: "right" }}>
              <Dialog.Close>Close</Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
};
