import { resume } from "~/config";
import { Dialog } from "~/components/Dialog";
import s from "./project.module.css";

export const Projects = () => {
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(<b>.*?<\/b>)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (/<b>.*<\/b>/.test(part)) {
        const match = /<b>(.*?)<\/b>/.exec(part);
        const text = match ? match[1] : null;
        return <b key={index}>{text}</b>;
      }
      return part;
    });
  };

  return (
    <div className="stack">
      <h3>Projects</h3>
      <div className={s.projects}>
        {resume.projects.map(
          ({ name, description, key_details, benefits, tech_stack }) => (
            <div key={name} className={["stack", s.project].join(" ")}>
              <h4 className={s.name}>{name}</h4>
              <p>{renderFormattedText(description)}</p>
              <Dialog.Root>
                <Dialog.Trigger className="primary">Read More</Dialog.Trigger>
                <Dialog.Content className="large">
                  <Dialog.Header>
                    <b>{name}</b>
                  </Dialog.Header>
                  <Dialog.Body className="stack">
                    <p>{renderFormattedText(description)}</p>
                    <div>Key Details</div>
                    <ul>
                      {key_details.map((k, i) => (
                        <li key={i}>{renderFormattedText(k)}</li>
                      ))}
                    </ul>
                    <div>Benefits</div>
                    <ul>
                      {benefits.map((benefit, i) => (
                        <li key={i}>{renderFormattedText(benefit)}</li>
                      ))}
                    </ul>{" "}
                    <div>Technologies Used</div>
                    <ul>
                      {tech_stack.map((tech, i) => (
                        <li key={i}>{renderFormattedText(tech)}</li>
                      ))}
                    </ul>
                  </Dialog.Body>
                  <Dialog.Footer style={{ textAlign: "right" }}>
                    <Dialog.Close>Close</Dialog.Close>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          )
        )}
      </div>
    </div>
  );
};
