import React from 'react';
import Register from '../userAccount/Register.jsx'
import CompaniesMain from  '../companies/CompaniesMain.jsx'
import PersonalMain from '../personalUser/PersonalMain.jsx'
import {BranchForPromoCodeComp} from '../../composers/BranchForPromoCodeComp.jsx' 
 

 const MainPage = React.createClass({
  componentWillMount(){
   

  },
	render() {



		if (this.props.user.profile.type=='user') {
      return (

         <BranchForPromoCodeComp user={this.props.user} />
      );
    } else {
        return (
          <CompaniesMain  company={this.props.user} />

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