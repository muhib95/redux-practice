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
    condition: false,
  };
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      case "TOGLE":
        return {
          ...state,
          condition: !state.condition,
        };
      case "INCREASE":
        return {
          ...state,
          quantity: state.quantity + 1,
        };
      // DIC
      case "DIC":
        return {
          ...state,
          quantity: state.quantity - 1,
        };
      default:
        return state;
    }

    // if (action.type === "INPUT") {
    //   return {
    //     ...state,
    //     [action.payload.name]: action.payload.value,
    //   };
    // }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
    console.log(state);
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
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />
        <select
          name="education"
          id="education"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        >
          <option value="ssc">SSC</option>
          <option value="hsc">hSC</option>
          <option value="Bsc">BSc</option>
        </select>
        <textarea
          name="feedback"
          id="feedback"
          cols="30"
          rows="10"
          placeholder="feedback here..."
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        ></textarea>
        <p>Please select your age:</p>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onClick={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />
        <label htmlFor="male">male</label>
        <br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onClick={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />
        <label htmlFor="female">female</label>
        <br />
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          onClick={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
        />
        <label htmlFor="other">other</label>
        <br />
        <br />
        <br />
        <div>
          <label>Number of pices</label>
          <div>
            <button
              onClick={(e) =>
                dispatch({
                  type: "DIC",
                  payload: { name: e.target.name },
                })
              }
              disabled={state.quantity === 0}
            >
              -
            </button>
            <span>{state.quantity}</span>
            <button
              onClick={(e) =>
                dispatch({
                  type: "INCREASE",
                  payload: { name: e.target.name },
                })
              }
            >
              +
            </button>
          </div>
        </div>
        <input
          type="checkbox"
          name="condition"
          id="condition"
          onClick={(e) =>
            dispatch({
              type: "TOGLE",
            })
          }
        />
        <label htmlFor="condition">accept all</label>
        <button type="submit" disabled={!state.condition}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
