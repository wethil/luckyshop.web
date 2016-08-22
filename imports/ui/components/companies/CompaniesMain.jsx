import React from 'react';
import Logout from '../userAccount/Logout.jsx'
import CreateBranchForm from './forms/CreateBranchForm.jsx'
import {BranchListComposer} from '../../composers/BranchListComposer.jsx'
 const CompaniesMain = React.createClass({
	render() {
		return (
			<div className="container" >
			<CreateBranchForm />
			<BranchListComposer company={this.props.company} />
				hi company
				<Logout /> 

			</div>
		);
	}
});
export default CompaniesMain