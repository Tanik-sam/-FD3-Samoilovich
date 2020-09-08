var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
      word: React.PropTypes.string.isRequired,
      wordsArray: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      
          var wordsCode=this.props.wordsArray.map( v =>
              React.DOM.select({key:v.code,className:'Word'},v.text,
              )
            );
          return React.DOM.div( {className:'Filter'}, 
            React.DOM.div( {className:'WordText'}, this.props.word ),
            React.DOM.div( {className:'WordArr'}, wordsCode ),
          );
        },
      
  });