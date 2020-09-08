var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
      word: React.PropTypes.string.isRequired,
      wordsArray: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      
          var wordsCode=this.props.wordsArray.map( v =>
              React.DOM.div({key:v.code,className:'Words'},
                React.DOM.span({className:'Count'},v.count),
                React.DOM.span({className:'Text'},v.text),
              )
            );
          return React.DOM.div( {className:'Filter'}, 
            React.DOM.div( {className:'WordText'}, this.props.word ),
            React.DOM.div( {className:'WordArr'}, wordsCode ),
          );
        },
      
  });