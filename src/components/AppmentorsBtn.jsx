import React, {useReducer, useMemo, useCallback, memo } from 'react';
import personReducer from '../reducer/personReducer';
export default function AppMentor() {
const init = {
    name: '윤성',
    title: 'FE Developer',
    mentors: [
    {
        name: '밥',
        title: 'CTO',
    },
    {
        name: '제임스',
        title: 'FE LEADER',
    },
    ],
}
  //const [person, setPerson] = useState(init);
    const [person, dispatch] = useReducer(personReducer,init)
const handleUpdate = useCallback(() => {
    
  const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
  const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
  dispatch({type : 'updated', prev, current}); 
},[])
const handleDelete = useCallback(() => {
    
  const deleteName = prompt(`삭제할 멘토의 이름을 입력하세요`); 
  dispatch({type : 'deleted', deleteName});
},[])
const handleAdd = useCallback(() => {
    
  const addName = prompt(`추가할 멘토의 이름을 입력하세요`);
  const addTitle = prompt(`추가할 직업을 입력하세요`);
  dispatch({type : 'added', addName, addTitle});
},[])
return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate}></Button>
      <Button text='멘토 추가하기' onClick={handleAdd}></Button>
      <Button text='멘토 삭제하기' onClick={handleDelete}></Button>
    </div>
  );
}
const Button = memo(({text,onClick}) => {
  console.log('Button',text, 're-rendering!!!');
  //const result = calculateSomething();
  const result = useMemo(() =>calculateSomething(), []);
  return(
      <button
          onClick ={onClick}
          style={{backgroundColor : 'black',
                  color:'white',
                  borderRadius : '20px',
                  margin : '0.4rem'}}>
          {text}, {result}
          
      </button>
  )
})
function calculateSomething() {
  for(let i = 0; i< 100; i++) {
    console.log("힛");
  }
  return 10;
}