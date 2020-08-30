var iShop = React.createClass({

  displayName: 'iShop',

  render: function() {

    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      var cGs=        
        React.DOM.div({key:columnGood.code,className:'Column'},
          React.DOM.span({className:'ColumnN'},columnGood.text)
        )
        cG.push(cGs);
    }
    var rG=[];
    for ( var b=0; b<this.props.rowG.length; b++ ) {
      var rowGood=this.props.rowG[b];
      var rGs=        
        React.DOM.div({key:rowGood.codeGood,className:'Row'},
          React.DOM.span({className:'RowN'},rowGood.nameGood),
          React.DOM.span({className:'RowN'},rowGood.priceGood),
          React.DOM.span({className:'RowN'},rowGood.urlGood),
          React.DOM.span({className:'RowN'},rowGood.quantityGood),
        )
        rG.push(rGs);
    }

    return React.DOM.div( {className:'iShop'}, 
      React.DOM.div( {className:'MarketName'}, this.props.marketName ),
      React.DOM.div( {className:'ColumnName'}, cG ),
      React.DOM.div( {className: 'RowName'}, rG ),
    );
  },

});