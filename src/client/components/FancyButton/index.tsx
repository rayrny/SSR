import styled from "styled-components";
import COLOR from "../../constants/colors";

const FancyWrapper = styled.button`
  background-color: ${(props) =>
    props.color ? COLOR[props.color] : COLOR.primary};
  color: #ffffff;
  border-radius: 0.5rem;
  border: 0;
  padding: 0.5rem 0.75rem;
`;

function FancyButton({
  children,
  color,
}: {
  children: JSX.Element | string;
  color: string;
}) {
  return <FancyWrapper color={color}>{children}</FancyWrapper>;
}

export default FancyButton;
