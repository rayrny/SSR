import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggle, setIsOpen];
};

export default useToggle;
