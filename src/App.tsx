import React from 'react'
import TextTyping from "./components/TextTyping";
import TextLogoAnimate from "./components/TextLogoAnimate";
import ImageAnimate from './components/ImageAnimate';
import './App.css'
function App() {
  
  return (
    <main className="text-center w-dvw h-dvh font-bold text-6xl">
      {/* <TextTyping textKey="Powerfull"/>
      <TextLogoAnimate logo="NGS"/>  */}
      <ImageAnimate/>

     
      
    </main>
  );
}

export default App;
