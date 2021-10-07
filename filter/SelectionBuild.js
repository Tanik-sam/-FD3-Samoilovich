var SelectionBuild = React.createClass({
  
    displayName: 'SelectionBuild',

    propTypes: {
      word: React.PropTypes.string.isRequired,
      wordsArray: React.PropTypes.array.isRequired,
    },
    makeDefault: function(){
      var makeReset=12;
      console.log (makeReset);
      },


   makeArray: function(arrr){
    console.log(arrr)
    wordsArray=arrr

return;
   },
    render: function() {
 
          var wordsSelection=this.props.wordsArray.map( v =>
              React.DOM.option({key:v.code,className:'Word'},v.text,
              )
            );
          return React.DOM.div( {className:'SelectionBuld'}, 
            React.DOM.div( {className:'WordText'}, this.props.word ),
            React.DOM.input( {type:"checkbox"} ),
            React.createElement(InputTextBuild, {wordsArray:this.props.wordsArray,cbNewText:this.makeArray} ),
            //React.DOM.input( {type:"text",defaultValue:"Введите текст", onChange:this.textChanged} ),
            React.DOM.input( {value:'сброс',type:"button",onClick: this.makeDefault}),
            React.DOM.div({className:'SelBul'},
               React.DOM.select( {className:'WordArr',size:this.props.selectSize}, wordsSelection ),),
          );
     
     
    },
  });