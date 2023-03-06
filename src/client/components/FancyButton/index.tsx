import React from "react";
// import styles from "./style.scss";

function FancyButton({ children }: { children: JSX.Element | string }) {
  return <button>{children}</button>;
}

export default FancyButton;
