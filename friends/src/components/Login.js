// login with formik

import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from 'axios';

function LoginForm() {
  return (
    <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Log in</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values, {props}) {
    axios
      .post('http://localhost:5000/api/login', values)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err.response));
      console.log(props.history)
      props.history.push("/protected");
  }
})(LoginForm);

export default FormikLoginForm;

// Login without formik
// import React from 'react';
// import axios from 'axios';

// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:5000/api/login', this.state.credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//       })
//       .catch(err => console.log(err.response));
//       this.props.history.push("/protected");
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;