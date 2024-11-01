import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode(){
    setIsDarkMode((newmode) => !newmode)
  }
  const appClass = isDarkMode ? "App dark" : "App light" 
  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkMode} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
