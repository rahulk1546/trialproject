import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [season, setSeason] = useState('');
  const [errors, setErrors] = useState({});

const validateForm = () => {
  let valid = true;
  const errors = {};

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/;
  const passwordUpperCase = /[A-Z]/;
  const passwordLowerCase = /[a-z]/;
  const passwordNumber = /[0-9]/;
  const passwordSpecial = /[^a-zA-Z0-9]/;

  if (!nameRegex.test(firstName)) {
    errors.firstName = 'First name must contain only alphabets';
    valid = false;
  }

  if (!nameRegex.test(lastName)) {
    errors.lastName = 'Last name must contain only alphabets';
    valid = false;
  }

  if (!emailRegex.test(email)) {
    errors.email = 'Invalid email format';
    valid = false;
  }

  let passwordError = '';
  if (!passwordLowerCase.test(password)) {
    passwordError += 'Password must contain at least 1 lowercase letter.';
    valid = false;
  }
  if (!passwordUpperCase.test(password)) {
    passwordError += 'Password must contain at least 1 uppercase letter.';
    valid = false;
  }
  if (!passwordNumber.test(password)) {
    passwordError += 'Password must contain at least 1 number.';
    valid = false;
  }
  if (!passwordSpecial.test(password)) {
    passwordError += 'Password must contain at least 1 special character. ';
    valid = false;
  }
  
  if (passwordError !== '') {
    errors.password = passwordError.trim();
  }
  if (!season) {
    errors.season = 'Please select your favorite season';
    valid = false;
  }

  setErrors(errors);
  return valid;
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card rounded-0 shadow">
                <div className="card-body">
                  <h3>Sign Up</h3>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label>First Name:</label>
                      <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                      <label>Last Name:</label>
                      <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                      {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                      {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <div className="form-group">
                      <label>Favorite Season:</label>
                      <select className="form-control" value={season} onChange={(e) => setSeason(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="Spring">Spring</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                      </select>
                      {errors.season && <div className="error">{errors.season}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;