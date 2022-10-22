import { createContext, useState } from 'react';
export const DarkModeContext = createContext(); // 우산을 만듦

//DarkModeProvider는 하위 컴포넌트들을 감싸줄수 있는 부모 우산 컴포넌트이다.
//props.children으로 자식 컴포넌트들을 받아와서 Context에서 제공하는 Provider로 감싸고 자식 컴포넌트와 공유하고 싶은
//상태값이 있다면 value에 넣어주면 된다.
//다크모드인지 아닌지와 다크모드로 토글링하는 함수까지 자식 컴포넌트에서 활용하도록 darkMode,와 toggleDarkMode를 children에게 제공한다.
//우산을 씌어주는 방법은 AppTheme.jsx 에 나와있다.
export function DarkModeProvider({ children }) { 
  const [darkMode, setDarkMode] = useState(false); //darkMode 라는 상태 값을 갖고 있다.
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode : darkMode, toggleDarkMode : toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}