import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCardPreviewState } from "../../../../redux/actions/cardPreviewStateActions";
import FormInputWraper from "../../../shared/FormInputWrapper/FormInputWraper";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  const imageUploadRef = useRef(null);

  const dispatch = useDispatch();
  const imagePickerHandler = () => {
    imageUploadRef.current.click();
    setFile(true);
  };

  const pickedHandler = (e) => {
    //ensures we actually have files
    let pickedFile;
    let fileIsValid;
    if (e.target.files || e.target.files.length !== 0) {
      pickedFile = e.target.files[0];
      console.log("PICKED FILE", pickedFile);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(props.keyName);
        setPreviewUrl(fileReader.result);
        dispatch(
          updateCardPreviewState({
            key: props.keyName,
            value: fileReader.result,
          })
        );

        props.handleUpdateData("playerImg", fileReader.result);
      };
      fileReader.readAsDataURL(pickedFile);

      // -----

      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  const imagePreview = (
    <div className="image-upload-preview">
      <img
        src={
          previewUrl ||
          "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        }
        alt=""
        srcset=""
      />
    </div>
  );
  return (
    <FormInputWraper>
      <div className="image-upload-inner-wrapper">
        <button onClick={imagePickerHandler} className="image-upload-box">
          {uploadIcon}
          <div className="image-upload__title">Upload Image</div>
        </button>
        <input
          ref={imageUploadRef}
          style={{ display: "none" }}
          id="image-upload"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={pickedHandler}
        />
        {previewUrl && imagePreview}
      </div>
    </FormInputWraper>
  );
};
export default ImageUpload;

const uploadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    />
  </svg>
);
