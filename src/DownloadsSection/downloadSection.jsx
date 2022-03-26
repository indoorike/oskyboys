export default function DownloadSection({ downloadName, downloadLink }) {
  return (
    <div className="download-section">
      <h1>{downloadName}</h1>
      <a href={downloadLink} download={downloadName}>
        View/Download
      </a>
    </div>
  );
}
