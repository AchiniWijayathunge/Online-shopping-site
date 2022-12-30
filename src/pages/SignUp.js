//import { useState } from "react";
import { useRef, useState } from "react";

function App() {
  const [showResults, setShowResults] = useState(false);

  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateofBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <br></br>
        <br></br>
        <input
          className="firstName"
          ref={inputRef}
          type="text"
          autoComplete="false"
          placeholder="Enter First Name    "
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <input
          className="lastName"
          type="text"
          autoComplete="false"
          placeholder="Enter Last Name    "
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <br></br>
        <br></br>
        <input
          className="Email"
          type="text"
          autoComplete="false"
          size="25"
          placeholder="Mobile Number Or Email Address  "
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <br></br>
        <br></br>
        <input
          className="Password"
          type="text"
          autoComplete="false"
          size="20"
          placeholder="New Password "
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <br></br>
        <br></br>
        <label for="Date Of Birth ">Date Of Birth:</label>
        <br></br>
        <br></br>
        <input
          type="date"
          id="Date Of Birth"
          name="Date Of Birth"
          size="25"
          onChange={(event) => setDateOfBirth(event.target.value)}
          value={dateofBirth}
        ></input>
        <br></br>
        <br></br>
        <label for="Gender ">Gender:</label>
        <br></br>
        <br></br>
        <input type="radio" className="Female" />
        <label for="Female">Female</label>
        <br></br>
        <input type="radio" className="Male" />
        <label for="Male">Male</label>
        <br></br>
        <input type="radio" className="Custom" />
        <label for="Custom">Custom</label>

        <br></br>

        <br></br>
        <br></br>
        <center><button onClick className="Kalani">Submit</button></center>
        
      </form>

      {showResults? 
      <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{dateofBirth}</p>
      <p>{gender}</p>
      </div>
      : 
      <p>not show</p>
      }

     
    </div>
  );  
}

export default App;
