import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { CardGrid } from "./components/CardGrid";

export const RickAndMortyApp = () => {
  const [categories, setCategories] = useState(["Summer Smith"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Rick And Morty Card</h1>

      {/* Input */}

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((event) => {
        return <CardGrid 
        key={event} 
        event={event} />;
      })}

      {/*gif items */}
    </>
  );
};
