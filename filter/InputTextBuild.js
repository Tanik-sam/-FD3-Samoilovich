var InputTextBuild = React.createClass({
  
    displayName: 'InputTextBuild',

    propTypes: {
      wordsArray: React.PropTypes.array.isRequired,
     // cbNewText: React.PropsTypes.func,
     },
    getInitialState: function() {
      return { 
        selectedAnswerCode: null,
        listArray:this.props.wordsArray,
      };
  },
    inputTextChanged: function(EO)
  {
       var x=EO.target.value;   
       function ff(v,i,a)
       {
       console.log (v.text.indexOf(x))
       return v.text.indexOf(x)>-1
       }
  var wordsArray1=this.props.wordsArray.filter(ff);
  this.setState( {listArray:wordsArray1} );
  this.props.cbNewText(this.props.wordsArray.filter(ff));//;this.props.listArray);
  console.log (wordsArray1.map(v=>"элемент "+v.code+" "+v.text))
  },
    


    render: function() {
        return (React.DOM.input({type:"text",defaultValue:"Введите текст", onChange:this.inputTextChanged}))   
           
    },
});