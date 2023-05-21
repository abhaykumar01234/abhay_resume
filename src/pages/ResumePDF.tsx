import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Svg,
  Circle,
  Rect,
  Link,
} from "@react-pdf/renderer";
import { Fragment, ReactNode } from "react";
import { resume } from "~/config";

export const ResumePDF = () => {
  const renderSkills = () => {
    interface Skills {
      [key: string]: Skills | string;
    }

    const skills = resume.skills;
    const renderedSkills: JSX.Element[] = [];

    const renderNestedSkills = (skills: Skills, prefix = "") => {
      for (const key in skills) {
        const value = skills[key];
        const label = prefix + key.toUpperCase();

        if (typeof value === "object") {
          renderNestedSkills(value, `${label.toUpperCase()} - `);
        } else {
          renderedSkills.push(
            <TextWithBullet key={label}>
              <Text style={styles.bold}>{label}</Text> - {value}
            </TextWithBullet>
          );
        }
      }
    };

    renderNestedSkills(skills);

    return renderedSkills;
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(<b>.*?<\/b>)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (/<b>.*<\/b>/.test(part)) {
        const match = /<b>(.*?)<\/b>/.exec(part);
        const text = match ? match[1] : null;
        return (
          <Text style={styles.bold} key={index}>
            {text}
          </Text>
        );
      }
      return part;
    });
  };

  return (
    <Document
      title="Resume"
      author={resume.profile.name}
      language="en"
      pageMode="fullScreen"
    >
      <Page style={[styles.page, styles.stack]}>
        <View style={[styles.infoBox, styles.inline, styles.between]}>
          <View style={[styles.stack, { width: "60%" }]}>
            <View>
              <Text style={styles.name}>{resume.profile.name}</Text>
              <Text style={[styles.bold, { marginTop: 2 }]}>
                {resume.profile.designation}
              </Text>
            </View>
            <View style={[styles.inline, styles.between]}>
              <Text>
                <Text style={styles.bold}>Mobile - </Text>
                {resume.profile.mobile_no}
              </Text>
              <Text>
                <Text style={styles.bold}>Email - </Text>
                {resume.profile.email}
              </Text>
            </View>
          </View>
          <Image src={resume.profile.img_url} style={styles.image} />
        </View>
        <Text style={styles.heading}>Intro</Text>
        <Text>{resume.profile.intro}</Text>

        <Text style={styles.heading}>Skills</Text>
        <View style={styles.section}>{renderSkills()}</View>

        <Text style={styles.heading}>Experience</Text>
        <View style={styles.section}>
          {resume.experience.map(
            ({ name, designation, year_end, year_start }, i) => (
              <TextWithBullet key={i}>
                {designation} at <Text style={styles.bold}>{name}</Text> [
                {year_start} - {year_end}]
              </TextWithBullet>
            )
          )}
        </View>

        <Text style={styles.heading}>Education</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.bold, styles.cell5]}>
              Year
            </Text>
            <Text style={[styles.tableCell, styles.bold, styles.cell5]}>
              Board/University
            </Text>
            <Text style={[styles.tableCell, styles.bold, styles.cell5]}>
              Qualification
            </Text>
            <Text style={[styles.tableCell, styles.bold, styles.cell5]}>
              Institute Name
            </Text>
            <Text style={[styles.tableCell, styles.bold, styles.cell5]}>
              Score
            </Text>
          </View>
          {resume.education.map((e) => (
            <View style={styles.tableRow} key={e.degree}>
              <Text style={[styles.tableCell, styles.cell5]}>
                {e.year_start} - {e.year_end}
              </Text>
              <Text style={[styles.tableCell, styles.cell5]}>
                {e.university_board}
              </Text>
              <Text style={[styles.tableCell, styles.cell5]}>{e.degree}</Text>
              <Text style={[styles.tableCell, styles.cell5]}>
                {e.institute_name}
              </Text>
              <Text style={[styles.tableCell, styles.cell5]}>{e.score}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.heading}>Projects</Text>
        {resume.projects.map((project, pi) => (
          <Fragment key={pi}>
            <TextWithBullet style={styles.bold}>{project.name}</TextWithBullet>
            <View style={[styles.stack, { paddingLeft: 12 }]}>
              <Text>{renderFormattedText(project.description)}</Text>
              <Text style={styles.bold}>Key Details :</Text>
              <View style={styles.section}>
                {project.key_details.map((detail, i) => (
                  <TextWithBullet type="square" key={i}>
                    {renderFormattedText(detail)}
                  </TextWithBullet>
                ))}
              </View>

              <Text style={styles.bold}>Benefits :</Text>
              <View style={styles.section}>
                {project.benefits.map((benefit, i) => (
                  <TextWithBullet type="square" key={i}>
                    {renderFormattedText(benefit)}
                  </TextWithBullet>
                ))}
              </View>

              <Text style={styles.bold}>Technologies Used :</Text>
              <View style={styles.section}>
                {project.tech_stack.map((techStack, i) => (
                  <TextWithBullet type="square" key={i}>
                    {renderFormattedText(techStack)}
                  </TextWithBullet>
                ))}
              </View>
            </View>
          </Fragment>
        ))}

        <Text style={styles.heading}>Certifications/Trainings</Text>
        <View style={styles.section}>
          {resume.certifications.map((certification, i) => (
            <TextWithBullet key={i}>{certification}</TextWithBullet>
          ))}
        </View>

        <Text style={styles.heading}>Interests</Text>
        <View style={styles.section}>
          {resume.interests.map((interest, i) => (
            <TextWithBullet key={i}>{interest}</TextWithBullet>
          ))}
        </View>

        <Text style={styles.heading}>Personal Profile</Text>
        <View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.cell2]}>Nationality :</Text>
            <Text style={[styles.tableCell, styles.cell2]}>
              {resume.profile.nationality}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.cell2]}>Github URL :</Text>
            <Text style={[styles.tableCell, styles.cell2]}>
              <Link src={resume.profile.github_url}>
                {resume.profile.github_url}
              </Link>
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.cell2]}>LinkedIn URL :</Text>
            <Text style={[styles.tableCell, styles.cell2]}>
              <Link src={resume.profile.linked_in_url}>
                {resume.profile.linked_in_url}
              </Link>
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.cell2]}>Website :</Text>
            <Text style={[styles.tableCell, styles.cell2]}>
              <Link src={resume.profile.website_url}>
                {resume.profile.website_url}
              </Link>
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.cell2]}>Location :</Text>
            <Text style={[styles.tableCell, styles.cell2]}>
              {resume.profile.location}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

type TextWithBulletType = {
  children: ReactNode;
  type?: "circle" | "square";
  style?: any;
};

const TextWithBullet = ({
  children,
  type = "circle",
  ...restProps
}: TextWithBulletType) => (
  <View style={[styles.inline, { gap: 4 }]}>
    <Svg height={8} width={8} style={{ marginTop: 2 }}>
      {type === "circle" ? (
        <Circle cx={4} cy={4} r={2.5} fill="#000" />
      ) : (
        <Rect x={2} y={2} width={4} height={4} fill="#000" />
      )}
    </Svg>
    <Text {...restProps}>{children}</Text>
  </View>
);

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/roboto/Roboto-Regular.ttf" },
    {
      src: "/fonts/roboto/Roboto-MediumItalic.ttf",
      fontStyle: "italic",
      fontWeight: 500,
    },
    { src: "/fonts/roboto/Roboto-Bold.ttf", fontWeight: 700 },
    {
      src: "/fonts/roboto/Roboto-BoldItalic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  stack: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  between: {
    justifyContent: "space-between",
  },
  page: {
    paddingVertical: "14",
    paddingHorizontal: "32",
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  infoBox: {
    paddingBottom: 8,
    borderBottom: "1px solid #0956aa",
  },
  image: {
    width: 50,
    height: 70,
  },
  name: {
    color: "#0956aa",
    fontWeight: 700,
    fontSize: 28,
  },
  bold: {
    fontWeight: 700,
  },
  heading: {
    fontSize: 12,
    fontWeight: 700,
    fontStyle: "italic",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  table: {
    border: "1px solid #000",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    backgroundColor: "#000",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
  },
  tableCell: {
    padding: "4 8",
    backgroundColor: "#fff",
  },
  cell5: {
    width: "20%",
  },
  cell2: {
    width: "50%",
  },
});
