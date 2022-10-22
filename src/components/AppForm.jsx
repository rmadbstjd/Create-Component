import React, { useState } from 'react';
export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const {id, value} = e.target;
    /*if(id === "name"){
    setForm({...form, name : e.target.value});
    }
    else if(id ==='email'){
    setForm({...form, email : e.target.value});
    }*/
    
    //위의 코드와 같은 동작을 하면서 간단하게 작성할 수 있음
    setForm({...form, [id] : value});
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        
        value={form.name}
       onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}