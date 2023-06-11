import React from "react";
import styled from "styled-components";
import UploadArea from "./UploadArea";

function Header() {
  return (
    <FloatingBar>
      <Title>
        <h1>나는 고양이 있어!</h1>
      </Title>

      <SubTitle>
        <h2>사진 누르면 짱 귀여운 액자에 넣어서 공유할 수 있지롱!</h2>
      </SubTitle>

      <UploadArea />
    </FloatingBar>
  );
}

const FloatingBar = styled.header`
  padding: 0 1.5rem;
  margin-bottom: 1.25rem;
`;
const Title = styled.div`
  font-family: UhBeenamsoyoung;
`;

const SubTitle = styled.div`
  line-height: 1.25;
  word-break: keep-all;
`;

export default Header;
