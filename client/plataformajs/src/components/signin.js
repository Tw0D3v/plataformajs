import React, { Component } from 'react';
import axios  from 'axios'; 


export default class Signin extends Component {



state ={    users: [], username:"",email:"",password:"",_id:"",};

async componentDidMount() {
    this.getUser();
    console.log(this.state.users);
  }


  getUser = async () => {
    const res = await axios.post("http://localhost:4000/api/auth/signup");
    this.setState({ users: res.data });
    this.getUser();
  };


  onSubmit = async () => {
    
    const res = await axios.post("http://localhost:4000/api/auth/signup", {
      username: this.state.username,
    });
    this.setState({ username: "" ,emial:"",password:""});
    this.getUser();
    console.log(res);
  };

    
    render() {

        return (
            <div className='formulario'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name='username' placeholder='username' />
                    <input type="text" name='email' placeholder='@email.com'  />
                    <input type="password" name='password' placeholder='password' />
                    <button type='submit'> enviar</button>
                </form>
            </div>
        )
    }
}