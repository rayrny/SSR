import React, { useState } from "react";
import _debounce from "lodash/debounce";
import styled from "styled-components";

const InputWrapper = styled.input`
  height: 1.85rem;
  width: 75%;
  border-radius: 0.5rem;
  border: 0;
  padding: 0 0.5rem;
`;

function SearchInput() {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) =>
    _debounce((e) => {
      const { value } = e.currentTarget;
      // setKeyword(value);
      console.log("1111");
      console.log(value);
      setKeyword(value);
    }, 300);

  return (
    <InputWrapper
      placeholder="고양이 보고싶어..."
      value={keyword}
      onChange={(e) => {
        console.log("onChange");
        setKeyword(e.target.value);
      }}
    />
  );
}

export default SearchInput;
