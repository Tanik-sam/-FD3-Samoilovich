import React from 'react';
import PropTypes from 'prop-types';

import './IShopTr3.css';

class IShopTr3 extends React.Component {

  answerClicked = (EO) => {
    this.props.cbSelected(this.props.code);
  }
  selectedGoodClicked=(eo)=>{
  this.props.cbselectedGood(this.props.codeValue);
  console.log("сработал selectedGoodClicked", this.props.codeValue);
  }
  deleteRow=(eo)=>{
    eo.stopPropagation();
    console.log("ты меня нажал", "я", this.props.codeValue);
    this.props.cbdeleteGood(this.props.codeValue);
  }

  render() {
    var classGoodName="IShopTr3"
    if (this.props.selectedGoodId==this.props.codeValue) {classGoodName="IShopTrRed"} else classGoodName="IShopTr3"
    console.log(classGoodName)
   
    return React.DOM.tr({key:this.props.codeGood,className:classGoodName,  onClick:this.selectedGoodClicked }, 
           React.DOM.td({className:'RowN'},this.props.nameGood),
           React.DOM.td({className:'RowN'},this.props.priceGood),
           React.DOM.td({className:'RowN'},
           React.DOM.img({className:'Img', src: this.props.urlGood, width:150, height:150}),
           ),
           React.DOM.td({className:'RowN'},this.props.quantityGood),
           React.DOM.td({className:'RowN'},
           React.DOM.input( {type:'button',value:'delete',onClick:this.deleteRow} ), ),)
           
         
  }
}

  export default IShopTr3;
