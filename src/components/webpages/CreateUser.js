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

  const handleSubmit = (event) => {
    event.preventDefault();
    state.db[state.accountno] = [state.name, state.email, state.accountno, state.balance]
    addUser(state.db[state.accountno])
    setState({...state, name: "", email: "", accountno: "", balance: ""})
  }

  return (
    
    <div class="container" css={CSS}>
    <img src='/images/img-2.jpg' />
    <div id='login-form'class='login-page'>
      <div class="form-box">
      <h1>Add Customer Details</h1>
      
       
    
      <form id="login" class="input-group-login" onSubmit={handleSubmit}>
        
          <b><label htmlFor="name" className="label">
            Enter Full Name:
          </label></b>
          <input
            type="text"
            
            name="name"
            class="input-field"
           
            value={state.name}
            placeholder="Full Name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        
        
          <b><label htmlFor="email" className="label">
            Enter email ID:
          </label></b><br/>
          <input
            type="text"
            
            name="email"
            class="input-field"
            
            value={state.email}
            placeholder="Email address"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        
        
          <b><label htmlFor="account-no" className="label">
            Enter Account No:
          </label></b> <br></br>
          <input
            type="number"
            min={1}
            name="account-no"
            class="input-field"
            
            value={state.accountno}
            placeholder="Account Number"
            onChange={(e) => setState({ ...state, accountno: e.target.value })}
            />

         <b><label htmlFor="balance" className="label">
            Enter Balance:
          </label></b> <br></br>
          <input
            type="number"
            min={1}
            name="balance"
            class="input-field"
            
            value={state.balance}
            placeholder="Balance"
            onChange={(e) => setState({ ...state, balance: e.target.value })}
          /><br/>
         <br/>
          <button type="submit" class='submit-btn'><b>
            Submit </b>
          </button>
        
      </form>
    </div>
    </div>
    </div>
  );
}

const CSS = css`
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: url('/images/img-home.jpg') center center/cover no-repeat;
  
}
img {
  object-fit: cover ;
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: 0.5;
  
}
.container
{
height: 100%;
width: 100%;
background-position: center;
background-size: cover;
position: absolute;
}

#login-form
{
  display: inline-block;
  margin-left: 34% !important;
  margin-right:auto;
}

.form-box
{
width:550px;
height:590px;
position: relative;
margin:7% auto;
background:rgba(103,128,159,1);
padding:75px;
h1 {
width: 85%;
padding: 15px 35px;
cursor: pointer;
display: block;

background: #F3C693;
border: 0;
outline: none;
border-radius: 10px;
  text-align: center;
  margin-top: -17px; 
  margin-left: 20px;
  font-size: 25px;
  color: var(--star-command-blue); 
}
}
.button-box
{

width:220px;
margin:0px auto;
position:relative;
box-shadow: 0 0 0px 0px #ff61241f;
border-radius: 30px;
}


#btn
{
top: 0;
left:0;
position: absolute;
width: 110px;
height: 100%;
background: #F3C693;
border-radius: 30px;
transition: .5s;
}
.input-group-login
{
top: 150px;
position:absolute;
width:280px;
transition:.5s;
.label
{
  font-size: 20px;
  padding: 10px;
}


}
.input-group-register
{
  top: 120px;
position:absolute;
width:280px;
transition:.5s;
}
.input-field
{
width: 100%;
height: 50px;
font-family: "Verdana", sans-serif;
padding:10px 0;
margin:5px 0;
border-left:3px solid #999;
border-top:3px solid #999;
border-right:3px solid #999;
border-bottom: 3px solid #999;
outline:none;
background: transparent;
}
.submit-btn
{
width: 85%;
font-size: 20px;
padding: 15px 35px;
cursor: pointer;
display: block;
margin: auto;
background: #F3C693;
border: 0;
outline: none;
border-radius: 10px;
}
.check-box
{
margin: 30px 10px 34px 0;
}
span
{
color:#777;
font-size:12px;
bottom:68px;
position:absolute;
}
#login
{
font-size:20px;
font-family: "Georgia", sans-serif;
padding:0;
left:120px;
}
#login input
{
color:black;
font-size:20px;
}

`;
  
export default CreateUser;