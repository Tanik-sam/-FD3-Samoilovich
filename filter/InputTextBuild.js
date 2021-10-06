var InputTextBuild = React.createClass({
  
    displayName: 'InputTextBuild',

  inputTextChanged: function(EO)
  {
       var x=EO.target.value;   
       function ff(v,i,a)
       {
       console.log (v.text.indexOf(x))
       return v.text.indexOf(x)>-1
       }
  var wordsArray1=this.props.wordsArray.filter(ff);
  this.props.cbNewText(wordsArray1)
  return;
  },
       
    
    propTypes: {
     wordsArray: React.PropTypes.array.isRequired,
     cbNewText: ReactPropsTypes.func,
    },

    render: function() {
        return (React.DOM.input({type:"text",defaultValue:"Введите текст", onChange:this.inputTextChanged} )),    
           
    },
});