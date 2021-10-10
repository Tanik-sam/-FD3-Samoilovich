var SelectionBuild = React.createClass({
  
    displayName: 'SelectionBuild',

    propTypes: {
      word: React.PropTypes.string.isRequired,
      wordsArray: React.PropTypes.array.isRequired,
    },
    makeDefault: function(){
      this.setState((prevState,props)=>{return {listArray: this.props.wordsArray};})
      },
      getInitialState: function() {
        return { 
               listArray:this.props.wordsArray.slice(),
               notChangedArr:this.props.wordsArray.slice()
               }
      },

      
      inputTextChanged: function(EO)
      {
           var x=EO.target.value;   
           function ff(v,i,a)
           {
           console.log (v.text.indexOf(x))
           return v.text.indexOf(x)>-1
           }
    
      var newArr=this.props.wordsArray.filter(ff);
      console.log (newArr.map(v=>"элемент "+v.code+" "+v.text))
      this.setState( {listArray:newArr} );
      this.setState( {notChangedArr:newArr.slice()})
    
      
return;
   },
   checkBoxChecked:function(EO){
      function compareWords(a,b){
      if (a.text<b.text) return -1;
      if (a.text>b.text) return 1;
      return 0;
    };
    if (EO.target.checked==true ){

      this.setState((prevState,props)=>{return {listArray: prevState.listArray.sort(compareWords)};});
    console.log('aga', this.state.listArray) 
    }
    else {
      this.setState((prevState,props)=>{return {listArray: this.state.notChangedArr};})
    console.log('neaga', this.state.listArray);}
  },
    render: function() {
 
          var wordsSelection=this.state.listArray.map( v =>
              React.DOM.option({key:v.code,className:'Word'},v.text,
              )
            );
          return React.DOM.div( {className:'SelectionBuld'}, 
            React.DOM.div( {className:'WordText'}, this.props.word ),
            React.DOM.input( {type:"checkbox", defaultChecked:false, onChange: this.checkBoxChecked} ),
            React.DOM.input( {type:"text",defaultValue:"Введите текст", onChange:this.inputTextChanged} ),
            React.DOM.input( {value:'сброс',type:"button",onClick: this.makeDefault}),
            React.DOM.div({className:'SelBul'},
               React.DOM.select( {className:'WordArr',size:this.props.selectSize}, wordsSelection ),),
          );
     
     
    },
  });