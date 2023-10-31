import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputvalue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputvalue.trim().length <= 1) return;

   onNewCategory( inputvalue.trim())
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search"
        value={inputvalue}
        onChange={onInputChange}
      />
    </form>
  );
};
