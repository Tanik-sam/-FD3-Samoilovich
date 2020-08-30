var iShop = React.createClass({

  displayName: 'iShop',

  getDefaultProps: function() {
    return { question: "Вопрос ни о чём" }
  },

  render: function() {

    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      var cGs=        
        React.DOM.div({key:columnG.code,className:'Column'},
          React.DOM.span({className:'ColumnN'},columnG.text)
        )
        cG.push(cGs);
    }
    var rG=[];
    for ( var b=0; b<this.props.rowG.length; b++ ) {
      var rowGood=this.props.rowG[a];
      var cGs=        
        React.DOM.div({key:rowG.codeGood,className:'Row'},
          React.DOM.span({className:'RowN'},rowG.nameGood),
          React.DOM.span({className:'RowN'},rowG.priceGood),
          React.DOM.span({className:'RowN'},rowG.urlGood),
          React.DOM.span({className:'RowN'},rowG.quantityGood),
        )
        cG.push(cGs);
    }

    return React.DOM.div( {className:'iShop'}, 
      React.DOM.div( {className:'MarketName'}, this.props.marketName ),
      React.DOM.div( {className:'ColumnName'}, cG ),
      React.DOM.div( {className: 'RowName'}, rG ),
    );
  },

});