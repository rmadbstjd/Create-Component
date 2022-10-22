import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
export default function AppTheme() {
  
//DarkModeProvider로 감싸주면 Header, Main, Fotter에 우산이 씌어진다.   
  return (
    <DarkModeProvider>  
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}
function Header() {
  return <header className='header'>Header</header>;
}
function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}
function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}
function User() {
  return <div>&nbsp;&nbsp;-User</div>;
}
function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}
function ProductDetail() {
    
    const changeBlackColor = (n) =>{
        if(n === 0){
        document.getElementsByClassName("header")[0].setAttribute("style","background-color:gray;color:black;");
        document.getElementsByClassName("main")[0].setAttribute("style","background-color:black;color:white;")
        document.getElementsByClassName("footer")[0].setAttribute("style","background-color:gray;color:black;");
        }
        if(n ===1) {
            if(document.getElementsByClassName("header")[0] !== undefined) {
                document.getElementsByClassName("header")[0].setAttribute("style","background-color:black;color:white;");
                document.getElementsByClassName("main")[0].setAttribute("style","background-color:white;color:black;")
                document.getElementsByClassName("footer")[0].setAttribute("style","background-color:black;color:white;");
            };
            
        }
    };
    
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // useContext를 사용하는데 DarkModeContext를 사용할 것이다.
  return (
    <div>
      &nbsp;&nbsp;-Product Detail
      <p>
      &nbsp;&nbsp;-DarkMode:
        {darkMode ? changeBlackColor(0) : changeBlackColor(1)}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
function Footer() {
  return <footer className='footer'>Footer</footer>;
}

