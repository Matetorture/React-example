import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState({ firstName: 'Jan', lastName: 'K' });

  const handleChange = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={handleChange}
        />

        <br/>
        <br/>

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={handleChange}
        />
      </form>
      
      <br/>

      <span>{name.firstName} {name.lastName}</span>
    </div>
  );
}

export default Form;