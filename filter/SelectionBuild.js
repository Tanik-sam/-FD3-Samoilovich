var SelectionBuild = React.createClass({
  
    displayName: 'SelectionBuild',

    textChanged: function(EO){
 
  var x=EO.target.value;   
 
  function ff(v,i,a){
  console.log (v.text.indexOf(x))
  return v.text.indexOf(x)>-1}
  console.log (this.props.wordsArray.filter(ff));
  },
    
    
    
    propTypes: {
      word: React.PropTypes.string.isRequired,
      wordsArray: React.PropTypes.array.isRequired,
    },
    makeDefault: function(){
      var makeReset=12;
      console.log (makeReset);
      },


   makeArray: function(arrr){
wordsArray=arrr
console.log(wordsArray)
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
            React.createElement(InputTextBuild, {wordsArray:this.wordsArray,cbNewText:this.makeArray} ),
            //React.DOM.input( {type:"text",defaultValue:"Введите текст", onChange:this.textChanged} ),
            React.DOM.input( {value:'сброс',type:"button",onClick: this.makeDefault}),
            React.DOM.div({className:'SelBul'},
               React.DOM.select( {className:'WordArr',size:this.props.selectSize}, wordsSelection ),),
          );
     
     
    },
  });