import React, { Component } from 'react';
import axios from 'axios'
class SignUpForm extends Component {
    state = {
        newuser: {
            userName: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
      }

      handleSubmit = async(event)=>{
          event.preventDefault()
         const res = await axios.post('/api/users', {
              "user": this.state.newUser
          })
          console.log(res.data)
      }
   /*  handleChange =(event)=>{
        const updatedUser = {...this.state.newUser}
        updatedUser.password = event.target.value
        console.log("Changed")
        this.setState({newUser: updatedUser})
    } */
    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
  <form onSubmit={this.handleSubmit}>
    <div>
      <label htmlFor="userName">User Name</label>
      <input onChange={this.handleChange}  name="userName" type="text" value={this.state.newuser.UserName} />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input onChange={this.handleChange} name="password" type="text" />
    </div>
  <button>Sign Up</button>
</form>
            </div>
        );
    }
}

export default SignUpForm;