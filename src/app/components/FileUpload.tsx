"use client";
import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log(file);
    },
  });
  return (
    <div className="m-2 p-2 bg-white rounded-xl max-w-96 w-96">
      <div
        {...getRootProps({
          className: "flex justify-center items-center h-48 border-dashed border-2 border-gray-300 rounded-xl",
        })}>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-500">Drag and drop your PDF here</p>
          <p className="text-sm text-gray-400">or</p>

          <button className="btn btn-secondary">
            Browse Files <input {...getInputProps()} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
