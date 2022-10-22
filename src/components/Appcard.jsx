import React from 'react';
export default function AppCard() {
  return (
    <>
      <Card>
        <p>첫 번째 카드</p>
        <img src="https://plus.unsplash.com/premium_photo-1663050629719-83e16832a804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" style={{width :"100px",height : "100px"}}></img>
        <p>Bob</p>
      </Card>
      <Card>
        <h1>두 번째 카드</h1>
        <p></p>
      </Card>
      <Card>
        <article></article>
      </Card>
    </>
  );
}function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}