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
      getInitialState: function() {
        return { 
               listArray:this.props.wordsArray,
               countClick:0,
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
      this.setState( {listArray:newArr},gg() );

      function gg(){ console.log ('reкуку')}
    
      
return;
   },
   checkBoxChecked:function(EO){
    console.log("нажата ли сейчас кнопка ", EO.target.value );
      function compareWords(a,b){
       if (a.text<b.text) return -1;
       if (a.text>b.text) return 1;
       return 0;
     }
     //this.setState({listArray:this.setState.listArray.sort()});
    console.log('aga', this.state.listArray.sort(compareWords), 'countClick=',this.setState.countClick)
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