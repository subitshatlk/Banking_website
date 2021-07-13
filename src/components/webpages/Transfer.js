/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { transact, addTransaction, db } from "./firebase";
import { useHistory } from "react-router-dom";

function Transfer() {
  const [state, setState] = useState({
    receiver: "",
    sender: "",
    amount: "",
    accounts: [],
  });

  const history = useHistory();

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setState({
        ...state,
        accounts: snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag1 = false;
    let flag2 = false;
    let id1, id2 = [0, 0];
    for (let i = 0; i < state.accounts.length - 1; i++) {
      if (state.receiver === state.sender) {
        alert("Payer's and Reciever's account numbers cannot be same!");
        setState({ ...state, receiver: "", sender: "", amount: "" });
        break;
      }
      if (state.accounts[i].data.accountno === state.sender) {
        flag1 = true;
        id1 = i;
        // console.log(state.to);
      }
      if (state.accounts[i].data.accountno === state.receiver) {
        flag2 = true;
        id2 = i;
        // console.log(state.from);
      }
    }
    if (!flag1) {
      alert("Check Reciever's account number!");
    } else if (!flag2) {
      alert("Check Payer's account number!");
    } else {
      // Go to firebase
      if (Number(state.accounts[id1].data.balance) < Number(state.amount)) {
        alert("Insufficient Balance");
        setState({ ...state, receiver: "", sender: "", amount: "" });
      } else {
        transact(
          state.accounts[id1].id,
          state.accounts[id1].data.balance,
          state.accounts[id2].id,
          state.accounts[id2].data.balance,
          state.amount
        );
        addTransaction(state.amount, state.receiver, state.sender);

        setState({ ...state, receiver: "", sender: "", amount: "" });
        history.replace("/transactions");
      }
    }
  };

  return (
    
    <div class="container" css={CSS}>
    <img src='/images/img-2.jpg' />
    <div id='login-form'class='login-page'>
      <div class="form-box">
      <h1>Transfer Money</h1>
      
       
    
      <form id="login" class="input-group-login" onSubmit={handleSubmit}>
        
          <b><label htmlFor="sender" className="label">
            Transfer from:
          </label></b>
          <input
            type="number"
            
            name="sender"
            class="input-field"
           
            value={state.sender}
            onChange={(e) => setState({ ...state, sender: e.target.value })}
          />
        
        
          <b><label htmlFor="receiver" className="label">
            Transfer to:
          </label></b><br/>
          <input
            type="number"
            
            name="receiver"
            class="input-field"
            
            value={state.receiver}
            onChange={(e) => setState({ ...state, receiver: e.target.value })}
          />
        
        
          <b><label htmlFor="from" className="label">
            Enter Amount:
          </label></b> <br></br>
          <input
            type="number"
            min={1}
            name="sender"
            class="input-field"
            
            value={state.amount}
            onChange={(e) => setState({ ...state, amount: e.target.value })}
          /><br/>
         <br/>
          <button type="submit" class='submit-btn'><b>
            Transfer </b>
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
height:550px;
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
background: #F3C691;
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
  
export default Transfer;