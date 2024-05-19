import React from "react";
import logoImg from "./../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <div className='w-full '>
        <img src={logoImg} className='mx-auto w-32 h-32' alt='quiz logo' />
      </div>
      <h1>Quiz Game</h1>
    </header>
  );
}

export default Header;
