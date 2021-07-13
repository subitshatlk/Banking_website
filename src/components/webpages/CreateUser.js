/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { addUser } from './firebase'

function CreateUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    accountno: "",
    balance: "",
    db: {},
  });

  const submitHandler = (event) => {
    event.preventDefault();
    state.db[state.accountno] = [state.name, state.email, state.accountno, state.balance]
    addUser(state.db[state.accountno])
    setState({...state, name: "", email: "", accountno: "", balance: ""})
  }

  return (
    
      <div class="container">
     
    <div className="create__user" css={CSS}>
    <h1>Add Customer Details</h1>
     
      <form onSubmit={submitHandler} className="form">
        <div className="form__item">
          <label className="label" htmlFor="name">
            Enter Full Name:
          </label>
          <input
            type="text"
            name="name"
            className="input"
            value={state.name}
            placeholder="Full Name"
            onChange={(event) =>
              setState({ ...state, name: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <label className="label" htmlFor="email">
            Enter email ID:
          </label>
          <input
            type="text"
            name="email"
            className="input"
            value={state.email}
            placeholder="Correct email"
            onChange={(event) =>
              setState({ ...state, email: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <label htmlFor="account-no" className="label">
            Enter Account Number:
          </label>
          <input
            type="number"
            name="account-no"
            className="input"
            min={100000}
            max={999999}
            value={state.accountno}
            placeholder="6-digit Account Number"
            onChange={(event) =>
              setState({ ...state, accountno: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <label htmlFor="balance" className="label">
            Enter Balance:
          </label>
          <input
            type="number"
            name="balance"
            className="input"
            min={0}
            value={state.balance}
            placeholder="Enter Balance"
            onChange={(event) =>
              setState({ ...state, balance: event.target.value })
            }
          />
        </div>
        <div className="form__item">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
const CSS = css`
background: linear-gradient(
  250deg,
  rgba(72, 202, 228, 1) 10%,
  rgba(173, 232, 244, 1) 20%,
  rgba(202, 240, 248, 1) 40%
);
*{
  
box-sizing : border-box
height: calc(100vh - 1.5rem);
display: flex;
flex-direction: column;
justify-content: center;
background: #fff;
}
.container {
  margin: 100px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Georgia", sans-serif;
  font-size: 40px;
  color: var(--star-command-blue);
  
}

@media screen and (max-width: 200px) {
  h1 {
    font-size: 2.5rem;
  }
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  
  border-radius: 4px;
  
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 50px;
  margin: 0 auto;
  border-radius: 10px;
  color: black;
  font-family: "Georgia", sans-serif;
  width: 90%;
  max-width: 650px;
  .form__item {
      display: flex;
      flex-wrap: wrap;    
      
      margin: 10px 0;
      .label {
        font-size: 20px;
      }
      .input {
          font-size: 18px;
          margin-top: 10px;
          padding: 10px;
          border-radius: 4px;
        }
    .submit {
      padding: 10px;
      text-transform: uppercase;
      border-radius: 4px;
      font-size: 20px;
      font-weight: 600;  
      font-family: "Georgia", sans-serif;   
      color: var(--powder-blue);
      transition: all 0.3s ease;
      cursor: pointer;
      background: linear-gradient(
          180deg,
          rgba(72, 202, 228, 1) 0%,
          rgba(173, 232, 244, 1) 50%,
          rgba(202, 240, 248, 1) 100%
        );
     transition: all 0.4s ease-out;
     }
    .submit:hover {
      background-color: var(--sky-blue-crayola);
      color: var(--navy-blue);
    }
    .submit:target {
      background-color: var(--blizzard-blue;);
    }
  }
}

}

`;
export default CreateUser;