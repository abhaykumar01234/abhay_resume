import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "~/pages/ResumePDF";
import { resume } from "~/config";

export const ResumeDownload = () => {
  const name = resume.profile.name.replace(/ /g, "_");
  const number = resume.profile.mobile_no.slice(-10);
  const filename = `resume_${name}_${number}.pdf`;
  return (
    <>
      <PDFDownloadLink document={<ResumePDF />} fileName={filename}>
        Download Resume
      </PDFDownloadLink>
      <PDFViewer style={{ width: "100%", minHeight: "100vh" }}>
        <ResumePDF />
      </PDFViewer>
    </>
  );
};
