import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const RickAndMortyApp = () => {
  const [categories, setCategories] = useState(["Hola"]);

  const onAddCategory = (newCategory) => {

    setCategories([...categories, newCategory]);

  };

  return (
    <>
      {/* Titulo */}
      <h1>Rick And Morty Card</h1>

      {/* Input */}

      <AddCategory
      
      onNewCategory={onAddCategory}/>



      <ol>
        {categories.map((event) => {
          return <li key={event}>{event}</li>;
        })}
      </ol>
      {/*gif items */}
    </>
  );
};
