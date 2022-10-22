import React, { useState } from 'react';
import { useImmer } from 'use-immer';
export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((mentor) => mentor.name ===prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const addName = prompt(`멘토의 이름은?`);
    const addTitle = prompt(`멘토의 직함은?`);
    updatePerson((person) => person.mentors.push({ addName, addTitle }));
  };
  const handleDelete = () => {
    const deleteName = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((mentor) => mentor.name === deleteName);
      person.mentors.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}const initialPerson = {
  name: '윤성',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};