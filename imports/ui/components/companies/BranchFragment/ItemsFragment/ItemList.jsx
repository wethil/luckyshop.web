import React, { Component } from 'react';
import faker from 'faker'

 class ItemList extends Component {
	render() {

		cards = []
	items=this.props.items
	if(items && items.length>0) {
		items.forEach(function (item) {
			cards.push(	<div key={item._id} className="four wide column animated fadeIn ">
						<div className="ui card">
					  <div className="content">
					    <div className="right floated meta">%{item.additionalDiscount} </div>
					    <img className="ui avatar image" src="https://pbs.twimg.com/profile_images/543749686226456577/e3g8uJRD.jpeg" />{options[item.clothesType].text} 
					  </div>
					  <div className=" ui small image">
					    <img  src={item.photo} />
					  </div>
					  <div className="content">
					    <a className="header"> {item.name} </a>
					  </div>
					   <div className="ui bottom attached button">
					    	 {item.quantity} left
					    </div>
					</div>
			</div>)
		
	
		});
	}else {
		cards = <h4> Please add some clothes </h4>
	}
		return (
			<div className="eleven wide column" style={{marginLeft:'39%'}}>
						<div className="row" style={{width:'100%'}}>
							<div className="ui  stackable grid"  >
									{cards}
								</div>
						 </div>
						<div className="row"> </div>
					</div>
		);
	}
}
export default ItemList;

const options = [
  { text: 'Skirt', name: 'Skirt', value: 0 },
  { text: 'Shoe', name: 'Shoe', value: 1 },
  { text: 'T-shirt', name: 'T-shirt', value: 2 },
]


const skirts=[
	"https://s-media-cache-ak0.pinimg.com/236x/8a/53/c2/8a53c2693e448001a2161832fcbf2704.jpg",
	"http://demandware.edgesuite.net/sits_pod30/dw/image/v2/AAXE_PRD/on/demandware.static/-/Sites-WAREHOUSE/default/dw0348fe1f/images/hi-res/warehouse_02730077_1.jpg?sw=376&sh=568&sm=cut",
	"https://www.bardot.com/globalassets/productsimportfromamazon/90340sb/154030/images/outputimages/large/90340sb_154030_mf_01_large.jpg",
	"https://i.s-jcrewfactory.com/is/image/jcrew/95435_RD5338?$ary_tn250$",
	"https://mediaus.topshop.com/wcsstore/TopShopUS/images/catalog/TS05R28KMDT_3col_F_1.jpg",
	"http://dzasv7x7a867v.cloudfront.net/product_photos/33521538/314470-8259ce7fea9e4a49b483f163d253c137_original.png",
	"http://images.sportsdirect.com/images/products/59200421_4pl.jpg",
	"http://imagena1.lacoste.com/sits_pod26/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw91e22e07/TH6604_CCA_24.jpg?sw=340&sh=329",
	"http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw3079af19/images/hi-res/38958_DSE.jpg?sw=500&sh=500&sfrm=png",
	"http://johnlewis.scene7.com/is/image/JohnLewis/001867186?$prod_grid3$"
]