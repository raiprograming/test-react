// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log("called");
    console.log({ fname, lname, phone });
    props.addData({
      fname,
      lname,
      phone,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        onChange={(e) => setFname(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={(e) => setLname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        onClick={() => handleSubmit()}
      />
    </form>
  );
}

function InformationTable(props) {
  console.log("called info tBLE");
  let [phoneData, setPhoneData] = useState(props.phoneData);

  // useEffect(() => {
  //   setPhoneData(props.phoneData);
  // }, [props.phoneData]);
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {props.phoneData ? (
          props.phoneData.map((obj, index) => {
            return (
              <tr key={index}>
                <td>{obj.fname}</td>
                <td>{obj.lname}</td>
                <td>{obj.phone}</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </thead>
    </table>
  );
}

function Application(props) {
  let [data, setData] = useState([]);

  console.log("re rendered");

  useEffect(() => {
    setData([
      ...data,
      {
        fname: "Coder",
        lname: "Byte",
        phone: "8885559999",
      },
    ]);
  }, []);

  const addData = (obj) => {
    let temp = data;
    temp.push(obj);
    // console.log(temp);
    setData(temp);
    console.log(data);
  };

  console.log(data);

  // useEffect(()=>{
  //   let temp=
  // setData([...data,temp])
  // },[])

  return (
    <div>
      <PhoneBookForm addData={addData} />
      <InformationTable phoneData={data} />
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
