import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-family: UhBeenamsoyoung;
`;

function Header() {
  return (
    <header>
      <HeaderWrapper>
        <h2>나는 고양이 있어! 메롱12355</h2>
      </HeaderWrapper>
    </header>
  );
}
export default Header;
