import React, { useState } from 'react';
export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });
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
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson({...person, mentors : person.mentors.map((mentor) => {
            if(mentor.name === prev) {
                return {...mentor, name : current};
            }
            else {
                return mentor;
            }
          })});
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={() => {
        const addName = prompt(`추가할 멘토의 이름을 입력하세요`);
        const addTitle = prompt(`추가할 직업을 입력하세요`);
        /*let arr = person.mentors;
        arr.push({name : addName, title : addTitle});
        setPerson({...person, mentors : arr});*/
        setPerson({...person, mentors : [...person.mentors, {name : addName, title : addTitle}]});
        
      }}>멘토 추가하기</button>
      <button onClick={() => {
        const deleteName = prompt(`삭제할 멘토의 이름을 입력하세요`); 
        
        setPerson({...person, mentors : person.mentors.filter((mentor) => {
            if(deleteName !== mentor.name) {
                return mentor; 
            }
        })});
      }}>멘토 삭제하기</button>
    </div>
  );
}