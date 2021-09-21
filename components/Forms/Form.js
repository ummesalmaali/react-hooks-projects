import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Form;
