import React, { Component } from 'react';
import CreateItem from './CreateItem.jsx'
import {ItemListComposer} from './ItemListComposer.jsx'

 class ItemsFragment extends Component {
	render() {
		company= this.props.company
		return (
			
				<div className="ui padded   grid">
					<CreateItem company={company} />
					<ItemListComposer branch={company.profile.branchId}  />
				</div>	
			
		);
	}
}
export default ItemsFragment;



