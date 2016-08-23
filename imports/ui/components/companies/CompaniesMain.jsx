import React from 'react';
import Logout from '../userAccount/Logout.jsx'
import CreateBranchForm from './forms/CreateBranchForm.jsx'
import {BranchListComposer} from '../../composers/BranchListComposer.jsx'
 const CompaniesMain = React.createClass({
	render() {
		return (
			<div className="container" >
			<Logout /> 
			
			<CreateBranchForm />
			<BranchListComposer company={this.props.company} />
				hi company
				

			</div>
		);
	}
});
export default CompaniesMain