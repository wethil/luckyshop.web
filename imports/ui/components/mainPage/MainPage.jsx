import React from 'react';
import Register from '../userAccount/Register.jsx'
import {CompaniesMainComposer} from  '../companies/CompaniesMainComposer.jsx'


 

 const MainPage = React.createClass({
  componentWillMount(){
   

  },
	render() {



		if (this.props.user.profile.type=='user') {
      return (

        <span>user</span>
      );
    } else {
        return (
          <CompaniesMainComposer  company={this.props.user} />

        );
    }
	}
});

export default MainPage;

		





{/*
 <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Username or Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username or Email" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-default">Sign In</button>
</form>*/}