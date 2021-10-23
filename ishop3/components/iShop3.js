import React from 'react';
import PropTypes from 'prop-types';

import './iShop3.css';

import iShopTr3 from './iShopTr3';
 
class iShop3 extends React.Component {

  static propTypes = {
    
    marketName: PropTypes.string.isRequired,
    rowG:PropTypes.array.isRequired,
    columnG: PropTypes.array.isRequired,
    };

    state = {
      
        selectedGoodId: 23,
        rowG2: this.props.rowG.slice() 
    }

    selectedGood = (cdVl) => {
  
    this.setState({selectedGoodId: cdVl} ); 
    console.log("this.state.selectedGoodId=",this.state.selectedGoodId,)
  }
  deleteGood = (delCdVl) => {
   
    function fff(v,i,a){return v.codeGood!=delCdVl}
    var k=this.state.rowG2.filter(fff);
    
     this.setState({rowG2:k})
    console.log(this.state.rowG2)
    console.log("длина",this.state.rowG2.length)
  }

  render() {
    var b=1;
    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      <th  key="columnGood.code" className='ColumnN'>  {columnGood.text}</th>
      
      cG.push(cGs);
    }
    var stringSelect=this.state.rowG2.map( v =>
      <iShopTr3 key={v.codeGood} codeValue={v.codeGood}
        nameGood={v.nameGood} priceGood={v.priceGood} urlGood={v.urlGood} quantityGood={v.quantityGood} 
        selectedGoodId={this.state.selectedGoodId}
        cbselectedGood={this.selectedGood}
        cbdeleteGood={this.deleteGood}
      />)
        
      return (
        <div  className='iShop3'>
      <table className='tableIshop'> 
      <caption className='MarketName'>{this.props.marketName}</caption>
        <tbody className='tableBody'> 
        <tr className='ColumnName'>{cG} </tr> 
         stringSelect,
                  ),
                  </tbody>
                  </table>
      </div>
    );
  }

}

export default iShop3;

