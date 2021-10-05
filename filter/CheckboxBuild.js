var CheckBoxBuild = React.createClass({

    displayName: 'CheckBoxBuild ',

    propTypes: {
      word: React.PropTypes.string.isRequired,
      wordsArray: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      
          var wordsSelection=this.props.wordsArray.map( v =>
              React.DOM.option({key:v.code,className:'Word'},v.text,
              )
            );
          return React.DOM.div( {className:'CheckBoxBuild '}, 
            React.DOM.div( {className:'WordText'}, this.props.word ),
            React.DOM.select( {className:'WordArr'}, wordsSelection ),
          );
        },
      
  });