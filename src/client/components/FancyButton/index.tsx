import styled from "styled-components";
import COLOR from "../../constants/colors";

interface IFancyButtonProps {
  children: JSX.Element | string;
  color?: string;
}

const FancyWrapper = styled.button<IFancyButtonProps>`
  background-color: ${(props) =>
    props.color ? COLOR[props.color] : COLOR.primary};
  color: #ffffff;
  border-radius: 0.5rem;
  border: 0;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
`;

function FancyButton({ children, color }: IFancyButtonProps) {
  const handleClick = () => {
    console.log("click event occured!");
    alert(`hello, ${color} button!`);
  };
  return (
    <FancyWrapper color={color} onClick={handleClick}>
      {children}
    </FancyWrapper>
  );
}

export default FancyButton;
