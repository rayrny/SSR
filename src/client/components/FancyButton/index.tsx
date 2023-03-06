import styled from "styled-components";

const FancyWrapper = styled.div`
  background-color: sky-blue;
  radius: 0.5rem;
`;

function FancyButton({ children }: { children: JSX.Element | string }) {
  return (
    <button>
      <FancyWrapper /> {children}
    </button>
  );
}

export default FancyButton;
