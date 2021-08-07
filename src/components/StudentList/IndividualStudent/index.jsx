import React from "react";
import "../../Dashboard/style.css";

export default function IndividualStudent(props) {
  const [selectedFile, setSelectedFile] = React.useState();
  const onSelectFile = (e, b, s, ew) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    e.preventDefault();
    e.target.files = null;
  };

  return (
    <>
      <tr>
        <td className="heading-no">{props.index + 1}</td>
        <td className="heading-name">{props.name}</td>
        <td className="heading-id">{props.id}</td>
        <td className="heading-doc">
          <div className="upload-container">
            <label class="custom-file-upload">
              <input
                style={{ color: "transparent" }}
                type="file"
                onChange={onSelectFile}
                placeholder=""
              />
              <p className="upload-button">Upload</p>
            </label>
            {selectedFile ? (
              <p className="upload-name">{selectedFile.name}</p>
            ) : (
              ""
            )}
          </div>
        </td>
        <td className="heading-save">
          <div className="save-button">Save</div>
        </td>
      </tr>
    </>
  );
}
