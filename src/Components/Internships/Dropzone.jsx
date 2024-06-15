import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./ResumeUploader.css";
const UploadDropzone = ({ setIsUploading, email }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    const acceptedFile = acceptedFiles[0];

    if (!acceptedFile) {
      return;
    }

    const fileExtension = acceptedFile.name.split(".").pop();
    const allowedExtensions = ["pdf", "doc", "docx"];

    if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
      alert("Invalid file extension. Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    setFile(acceptedFile);
  }, []);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("email", email);

    try {
      const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/resume/upload`,
        requestOptions
      );
      const result = await response.json();
      if (result.success) {
        alert("Resume Uploaded");
        window.location.reload();
      } else {
        alert("Upload Failed try again");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="dropper-cont">
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <span>
          {file
            ? `Selected file: ${file.name} ||  Click here to change`
            : "Drag & drop your resume file here, or click to select file"}
        </span>
      </div>
      {file && (
        <button
          className="cancle-upload"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}
      {uploadProgress > 0 && <p>Progress: {uploadProgress}%</p>}
      <div className="cancle-upload" onClick={() => setIsUploading(false)}>
        Cancel Upload
      </div>
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #ccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  color: "white",
};

export default UploadDropzone;
