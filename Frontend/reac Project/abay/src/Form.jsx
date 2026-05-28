import { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState([]);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  function handleCheckBox (e) {
    if(e.target.checked){
      setHobby((prev)=> ([...prev,e.target.value]))
    }else{
      setHobby((prev)=>prev.filter((v)=> (v != e.target.name)))
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Your full name is ${fullName}`);
    alert(`Your age is ${age}`);
    alert(`Your email is ${email}`);
    alert(`Your hobby is ${hobby}`);
    alert(`Your country is ${country}`);
    alert(`Your gender is ${gender}`);

  }

  return (
    <>
      <h1>My Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter Your Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <br />
        <br />

        {/* Age */}
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <br />
        <br />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />

        <br />
        <br />

        {/* Gender */}
        <p>Please select your gender</p>

        <input type="radio" name="gender" id="male" value="male" onChange={(e) => setGender(e.target.value)} />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" id="female" value="female" onChange={(e) => setGender(e.target.value)} />
        <label htmlFor="female">Female</label>

        <br />
        <br />

        {/* Country */}
        <label htmlFor="country">Country:</label>

        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Choose an option</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Poland">Poland</option>
          <option value="Canada">Canada</option>
          <option value="UAE">UAE</option>
        </select>

        <br />
        <br />

        {/* Hobby */}
        <p>Please select your hobby</p>

        <label htmlFor="sport">Sport</label>
        <input
          type="checkbox"
          id="sport"
          value="Sport"
          onChange={handleCheckBox}
        />

        <label htmlFor="art">Art</label>
        <input
          type="checkbox"
          id="art"
          value="Art"
          onChange={handleCheckBox}
        />

        <label htmlFor="music">Music</label>
        <input
          type="checkbox"
          id="music"
          value="Music"
          onChange={handleCheckBox}
        />

        <label htmlFor="gaming">Gaming</label>
        <input
          type="checkbox"
          id="gaming"
          value="Gaming"
          onChange={handleCheckBox}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}