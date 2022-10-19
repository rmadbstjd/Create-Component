import "./App.css";

function AppJSX() {
  let arr = ["개", "고양이", "기니피그", "소"];
  return (
    <div className="App">
      <ul>
        {arr.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    
    </div>
  );
}




export default AppJSX;

