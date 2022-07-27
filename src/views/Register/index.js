import { useState } from "react";
import axios from "axios";
import Form from "./components/Form"

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    seniority: "",
    newsletter: false,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = function (event) {
    const property = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [property]: value });
  };

  const handleChecked = function (event) {
    const property = event.target.name;
    const value = event.target.checked;
    setUser({ ...user, [property]: value });
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "post",
      data: user,
    })
      .then(function (result) {
        console.log(result.data);
        setUser({
            email: "",
            password: "",
            seniority: "",
            newsletter: false,
          })
        setSuccess(true)
      })
      .catch(function (error) {
        console.log(error);
        setError(true)

      });
  };

  return (
    <section>
      <h1>Register</h1>
      <Form  handleChange={handleChange} handleSubmit={handleSubmit} handleChecked={handleChecked} user={user} success={success} error={error}/>
    </section>
  );
}

export default Register;
