//this is modal component
import React from 'react';

const CreateBranchForm = React.createClass({
	handleCreate(e){
			e.preventDefault()
			name = this.refs.branchname.value.trim()
			city = this.refs.b_city.value.trim()
			storeID = Meteor.userId();
				Meteor.call('addBranch', name,city,storeID, error => {
	            if (error) {
	                console.log('error', error);
	            } else {
	            	console.log('branch added')
	            	this.refs.branchname.value="";
	            	this.refs.b_city.value="";
	           

	            } 
	             
	        });
	},
	render() {
		return (
			<div className="className">
				 <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Create Branch</button>
			  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title" id="myModalLabel">Create a branch</h4>
                      </div>
                      <div className="modal-body">
							 <form>
							  <div className="form-group">
							    <label >Branch Name</label>
							    <input 
							    	type="text" 
							    	ref="branchname" 
							    	className="form-control"  
							    	placeholder="BranchName" />	 
							  </div>
							  
							  <div className="form-group">
							    <label >City</label>
							    <input 
							    	type="text" 
							    	ref="b_city"
							    	className="form-control"  
							    	placeholder="Branch City" />
							  </div>
						</form>
                      </div>
                      <div className="modal-footer">
                        <div className="left-side">
                            <button type="button" className="btn btn-danger btn-simple" data-dismiss="modal">Cancel</button>
                        </div>
                        <div className="divider"></div>
                        <div className="right-side">
                            <button type="button" onClick={this.handleCreate} data-dismiss="modal" className="btn btn-primary btn-simple">Create</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
			</div>
    
		);
	}
});

export default CreateBranchForm