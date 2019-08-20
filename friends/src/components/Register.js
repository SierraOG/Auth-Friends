// register with formik

import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function RegisterForm() {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Name" />
      <Field type="text" name="age" placeholder="Age" />
      <Field type="email" name="email" placeholder="Email" />
      <button>Register</button>
    </Form>
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || "",
      age: age || "",
      email: email || "",
    };
  },

  handleSubmit(values, {props}) {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', {id: Date.now(), ...values})
      .then(res => {
        console.log('from inside register', res)
      })
      .catch(err => console.log(err));
      props.history.push("/protected");
  }
})(RegisterForm);

export default FormikRegisterForm;

// old register without formik
// import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

// class Register extends React.Component {
//   state = {
//     friend: {
//       id: Date.now(),
//       name: '',
//       age: '', 
//       email: '',
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       friend: {
//         ...this.state.friend,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   register = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post('http://localhost:5000/api/friends', this.state.friend)
//       .then(res => {
//         console.log('from inside register', res)
//       })
//       .catch(err => console.log(err));
//       this.props.history.push("/protected");
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.register}>
//           <input
//             type="text"
//             name="name"
//             placeholder="name"
//             value={this.state.friend.name}
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="age"
//             placeholder="age"
//             value={this.state.friend.age}
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="email"
//             value={this.state.friend.email}
//             onChange={this.handleChange}
//           />
//           <button>Register new friend</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Register;