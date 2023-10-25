import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const RickAndMortyApp = () => {
  const [categories, setCategories] = useState(["Hola"]);

  const onAddCategory = (onNewCategory ) => {
    if (categories.includes(onNewCategory)) {
        return
    }
    setCategories([onNewCategory,...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h3>RickAndMortyApp</h3>

      {/* input */}
      <AddCategory setCategories={setCategories}/>

      {/*listado card */}

      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((event) => {
          return <li key={event}>{event}</li>;
        })}
      </ol>
      {/*card item */}
    </>
  );
};
