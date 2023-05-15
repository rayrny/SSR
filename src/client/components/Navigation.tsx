import { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Navigation() {
  return (
    <Nav>
      {/* 드롭다운 */}
      <div>코숏만 볼래 ▼</div>

      {/* 네브탭 형식 */}
      <div>nav tab[모든 냥이, 발도장 냥이]</div>
    </Nav>
  );
}

export default Navigation;
