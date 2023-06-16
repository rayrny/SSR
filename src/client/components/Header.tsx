import React from "react";
import styled from "styled-components";
import UploadArea from "./UploadArea";
import CatFunnyIcon from "../icons/CatFunnyIcon";
import CatDefaultIcon from "../icons/CatDefaultIcon";
import colors from "../constants/colors";

function Header() {
  return (
    <FloatingBar>
      <Title>
        <CatDefaultIcon width="3rem" stroke={colors.primary} />
        <div>
          <H2>나는 고양이 있어!</H2>
        </div>
        <CatFunnyIcon width="3rem" stroke={colors.main} />
      </Title>

      {/* <SubTitle>
        <h2>사진 누르면 짱 귀여운 액자에 넣어서 공유할 수 있지롱!</h2>
      </SubTitle> */}

      <UploadArea />
    </FloatingBar>
  );
}

const FloatingBar = styled.header`
  padding: 0 1.5rem;
  margin-bottom: 1.25rem;
  position: sticky;
  top: 0;
  background: ${colors.background};
`;
const Title = styled.div`
  padding: 1rem 0;
  font-family: UhBeenamsoyoung;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  margin: 0 0.5rem 0.5rem 0.5rem;
`;

export default Header;
