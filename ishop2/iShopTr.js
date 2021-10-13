var iShopTr = React.createClass({

  displayName: 'iShopTr',



 // selectedGoodClicked: function(eo){
   // this.setState((prevState,props)=>{return{selectedGoodId: 1};}); 
   // console.log(this.props.selectedGoodId)
 // },
  deleteRow: function(eo){
    
    console.log("ты меня нажал", "я", this.props.codeValue);
  },

  render: function() {
    
   
    return React.DOM.tr({key:this.props.codeGood,className:'Row',  onClick:this.props.cbselectedGood, id:this.props.selectedGoodId}, 
           React.DOM.td({className:'RowN'},this.props.nameGood),
           React.DOM.td({className:'RowN'},this.props.priceGood),
           React.DOM.td({className:'RowN'},
           React.DOM.img({className:'Img', src: this.props.urlGood, width:150, height:150}),
           ),
           React.DOM.td({className:'RowN'},this.props.quantityGood),
           React.DOM.td({className:'RowN'},
           React.DOM.input( {type:'button',value:'delete',onClick:this.deleteRow} ), ),)
           
         
  },

})
