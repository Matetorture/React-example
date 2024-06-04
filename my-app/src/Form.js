import './Form.css';
import React, { useState } from 'react';

function Form() {
  const [input, setInput] = useState({ firstName: '', lastName: '' });
  const [errors, setErrors] = useState({ firstName: '', lastName: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });

    const newErrors = { ...errors };
    switch (name) {
      case 'firstName':
        if (value.length < 3) {
          newErrors.firstName = 'Imię musi mieć co najmniej 3 znaki';
        } else if (value.length > 64) {
          newErrors.firstName = 'Imię może mieć maksymalnie 64 znaki';
        } else if (/[\d\W_]/.test(value)) {
          newErrors.firstName = 'Imię nie może zawierać cyfr ani znaków specjalnych';
        } else {
          newErrors.firstName = '';
        }
        break;
      case 'lastName':
        if (value.length < 3) {
          newErrors.lastName = 'Nazwisko musi mieć co najmniej 3 znaki';
        } else if (value.length > 64) {
          newErrors.lastName = 'Nazwisko może mieć maksymalnie 64 znaki';
        } else if (/[\d\W_]/.test(value)) {
          newErrors.lastName = 'Nazwisko nie może zawierać cyfr ani znaków specjalnych';
        } else {
          newErrors.lastName = '';
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (errors.firstName || errors.lastName || input.firstName === '' || input.lastName === '') {
      return;
    }

    console.log('Dane przesłane:', input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Imię</label>
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={handleChange}
        />
        <br/>
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        <br />
        <br />

        <label htmlFor="lastName">Nazwisko</label>
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handleChange}
        />
        <br/>
        {errors.lastName && <span className="error">{errors.lastName}</span>}

        <br />
        <br />

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default Form;