var iShopTr = React.createClass({

  displayName: 'iShopTr',

  deleteRow: function(stringNumber){
    console.log("ты меня нажал", "я", stringNumber);
  },

  render: function() {

    var rowGood=this.props.rowG;
    console.log(this.props.rowNumber);
   
    return React.DOM.tr({key:this.props.codeGood,className:'Row'},
           React.DOM.td({className:'RowN'},this.props.nameGood),
           React.DOM.td({className:'RowN'},this.props.priceGood),
           React.DOM.td({className:'RowN'},
           React.DOM.img({className:'Img', src: this.props.urlGood, width:150, height:150}),
           ),
           React.DOM.td({className:'RowN'},this.props.quantityGood),
           React.DOM.td({className:'RowN'},
           React.DOM.input( {type:'button',value:'delete',onClick:this.deleteRow(this.props.codeGood)} ), ),
           )
         
  },

})
