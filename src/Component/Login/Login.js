import React, { useReducer } from "react";

const Login = () => {
  // const initialState = {};
  // const reducer = () => {};

  // const [state, dispatch] = useReducer(reducer, initialState);
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    education: "",
    feedback: "",
    gender: "",
    quantity: 0,
    condition: true,
  };
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      Login
      <form onSubmit={submit}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="first name"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
        />
        <input type="email" name="email" id="email" placeholder="email" />
        <select name="education" id="education">
          <option value="ssc">SSC</option>
          <option value="ssc">hSC</option>
          <option value="ssc">BSc</option>
        </select>
        <textarea
          name="feedback"
          id="feedback"
          cols="30"
          rows="10"
          placeholder="feedback here..."
        ></textarea>
        <p>Please select your age:</p>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">male</label>
        <br />
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">female</label>
        <br />
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">other</label>
        <br />
        <br />
        <br />
        <div>
          <label>Number of pices</label>
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
        <input type="checkbox" name="condition" id="condition" />
        <label htmlFor="condition">accept all</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
