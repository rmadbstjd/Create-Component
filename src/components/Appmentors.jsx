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
          setPerson({...person, mentors : person.mentors.map((mentor)=> {
            if(mentor.name === prev) {
                return {...mentor, name : current};
            }
            return mentor;
          })  
        });
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}