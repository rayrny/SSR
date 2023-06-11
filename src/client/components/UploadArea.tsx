import { useRef, useState } from "react";
import styled from "styled-components";
import { AddAPhoto, FileUpload, Close } from "@styled-icons/material-outlined";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { usePostImage } from "../hooks.query/usePostImage";
import colors from "../constants/colors";

function UploadArea() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<Blob | null>(null);
  const postMutation = usePostImage();

  const handleClickInput = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (imageInputRef.current == null) {
      return;
    }

    imageInputRef.current.click();
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    if (files == null) {
      return;
    }

    setImage(files[0]);
  };

  const handleUploadImage = () => {
    if (image == null) {
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    postMutation.mutate(formData);
    setImage(null);
  };

  return (
    <InputArea>
      <input
        ref={imageInputRef}
        name="file"
        type="file"
        accept="image/*"
        style={{ visibility: "hidden" }}
        onChange={handleImageSelect}
      />

      {image ? (
        <>
          <ImageTag>
            <div style={{ fontSize: 12 }}>{image.name}</div>
            <Close
              role="button"
              style={{ width: 16, marginLeft: 4 }}
              onClick={() => setImage(null)}
            />
          </ImageTag>

          <ConfirmButton onClick={handleUploadImage}>
            <FileUpload style={{ width: 16 }} />
            업로드
          </ConfirmButton>
        </>
      ) : (
        <ToggleButton role="button" tabIndex={0} onClick={handleClickInput}>
          <AddAPhotoIcon />
          <div>고양이 사진 업로드</div>
        </ToggleButton>
      )}
    </InputArea>
  );
}

const InputArea = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`;

const ToggleButton = styled.div`
  display: flex;
`;

const ImageTag = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
  margin-right: 0.5rem;

  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.info};
  border-radius: 1rem;
`;

const AddAPhotoIcon = styled(AddAPhoto)`
  width: 1.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
`;

const ConfirmButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 0.5rem;
  height: 2rem;
`;

export default UploadArea;
