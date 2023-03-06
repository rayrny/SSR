import styled from "styled-components";

const FancyWrapper = styled.button`
  background-color: #5b2ee0;
  color: #ffffff;
  border-radius: 0.5rem;
  border: 0;
  padding: 0.5rem 0.75rem;
`;

function FancyButton({ children }: { children: JSX.Element | string }) {
  return <FancyWrapper>{children}</FancyWrapper>;
}

export default FancyButton;
