import React, {useReducer } from 'react';
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
const handleUpdate = () => {
    
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({type : 'updated', prev, current}); 
}
const handleDelete = () => {
    
        const deleteName = prompt(`삭제할 멘토의 이름을 입력하세요`); 
        dispatch({type : 'delete', deleteName});
};
const handleAdd = () => {
    
        const addName = prompt(`추가할 멘토의 이름을 입력하세요`);
        const addTitle = prompt(`추가할 직업을 입력하세요`);
        dispatch({type : 'added', addName, addTitle});
}
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
      <button
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}