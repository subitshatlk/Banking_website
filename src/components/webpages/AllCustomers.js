/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function AllCustomers() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
      db
        .collection("users")
        .orderBy("name")
        .onSnapshot((snapshot) =>
          setState(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        )
  };

  return (
    <div className="allOurCustomers" css={CSS}>
      <h1>Our Valuable Customers</h1>
      <div className="table">
        <table>
          <thead>
            <tr id="header">
              <td>UID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Account Number</td>
              <td>Current Balance</td>
              <td><ion-icon name="cash-outline"></ion-icon></td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i%2===0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.name}</td>
                <td>{obj.data.email}</td>
                <td>{obj.data.accountno}</td>
                <td>{obj.data.balance}</td>
                <td><Link to="/transfer">Transfer Money</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const CSS = css`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgb(72, 202, 228);
  background: linear-gradient(
    180deg,
    rgba(72, 202, 228, 1) 0%,
    rgba(173, 232, 244, 1) 50%,
    rgba(202, 240, 248, 1) 100%
  );
  font-family: "Roboto", sans-serif;
  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: var(--star-command-blue);
    
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  .table {
    display: table;
    overflow: scroll;
    table {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      table-layout: fixed;
      color: var(--powder-blue);
      border-collapse: collapse;
      border: 1px solid #bdc3c7;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
      thead {
        background-color: var(--navy-blue);
        tr {
          transition: all .2s ease-in;
          cursor: pointer;
          header{
            background-color: #16a085;
            color: #fff;
        }
          td {
            padding: 12px;
            text-align: left;
            font-weight: 700;
            border-bottom: 1px solid #ddd;
            ion-icon {
              font-size: 20px;
            }
          }
        }
      }
      
      tbody {
        background-color: var(--cerulean-crayola);
        tr {
          a{
            color: #BF0000;
            transition: all 0.3s ease;
          }
          a:hover {
            text-decoration: underline;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            text-align: right;
          }
        }
        tr:hover {
          background-color: #f5f5f5;
          transform: scale(1.02);
          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
      }
        .light {
          background-color: var(--sky-blue-crayola);
        }
      }
    }
  }
`;


export default AllCustomers;