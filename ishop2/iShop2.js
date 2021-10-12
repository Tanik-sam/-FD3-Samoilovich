var iShop2 = React.createClass({

  displayName: 'iShop2',



  render: function() {
    var b=1;
    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      var cGs=React.DOM.th({key:columnGood.code,className:'ColumnN'},columnGood.text);
      cG.push(cGs);
    }
     
     var stringSelect=this.props.rowG.map( v =>
     React.createElement(iShopTr, {key:v.codeGood,
        nameGood:v.nameGood, priceGood:v.priceGood, urlGood:v.urlGood, quantityGood:v.quantityGood})
        )
    




     return React.DOM.div( {className:'iShop2'}, 
      React.DOM.table({className:'tableIshop'}, 
        React.DOM.caption( {className:'MarketName'}, this.props.marketName ),
        React.DOM.tbody( {className:'tableBody'}, 
         React.DOM.tr( {className:'ColumnName'}, cG ), 
         stringSelect,
                  ),
      )
      
    );
  },

});