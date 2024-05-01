import ReactDocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export function DocViewer() {
  const docs = [
    {
      uri: "https://doc-viewer-spike-documents.s3.ap-southeast-2.amazonaws.com/gov-id-requirements.pdf",
    },
    {
      uri: "https://doc-viewer-spike-documents.s3.ap-southeast-2.amazonaws.com/file-sample_500kB.docx",
    },
    {
      uri: "https://doc-viewer-spike-documents.s3.ap-southeast-2.amazonaws.com/file_example_XLSX_100.xlsx",
    },
  ];

  return (
    <ReactDocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      style={{ height: "80dvh" }}
    />
  );
}
