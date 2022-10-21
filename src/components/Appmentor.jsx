import React, { useState } from 'react';
export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: '윤성',
    title: '프론트엔드 개발자',
    mentor: {
      name: '엘리',
      title: '프론트엔드 리드개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson({...person,mentor : {...person.mentor,name : name}});
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson({...person,mentor : {...person.mentor, title : title}});
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}