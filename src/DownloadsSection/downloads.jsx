import styles from "./downloads.css";
import DownloadSection from "./downloadSection";
import playerParentHandbook from "../downloads/player-parent-handbook.pdf";
import medicalTreatment from "../downloads/ConsentMedicalTreatment.pdf";
import concussionFactSheet from "../downloads/HeadsUpConcussionFactSheet.pdf";
import ohs from "../downloads/Oskaloosa-High-School-Code-of-ConductInsurance.pdf";
import physical from "../downloads/Preparticipation_Physical_Form_0710.pdf";
export default function Downloads() {
  return (
    <div className="downloads-container">
      <DownloadSection
        downloadName="Player/Parent-Handbook"
        downloadLink={playerParentHandbook}
      />
      <DownloadSection downloadName="Physical-Form" downloadLink={physical} />
      <DownloadSection
        downloadName="Medical-Treatment-Concent"
        downloadLink={medicalTreatment}
      />
      <DownloadSection
        downloadName="OHS-Code-Of-Conduct-Insurance"
        downloadLink={ohs}
      />
      <DownloadSection
        downloadName="Concussion-Factsheet"
        downloadLink={concussionFactSheet}
      />
    </div>
  );
}
