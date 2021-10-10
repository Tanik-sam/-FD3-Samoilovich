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
      this.setState( {listArray:newArr},gg() );
      this.setState( {notChangedArr:newArr},gg() );
      function gg(){ console.log (' ку-ку')}
    
      
return;
   },
   checkBoxChecked:function(EO){
    console.log(EO.target.checked)
      function compareWords(a,b){
      if (a.text<b.text) return -1;
      if (a.text>b.text) return 1;
      return 0;
    };
    if (EO.target.checked==true ){
      this.state.listArray.sort(compareWords); - это не меняет сам список в браузере
      //this.setState.listArray((prevState,props)=>{return {listArray: this.state.listArray.sort(compareWords)};})// - а это не хочет работать
    console.log('aga', this.state.listArray) //- хотя здесь все норм
    }
    else {console.log('neaga', this.state.notChangedArr);
      this.setState.listArray((prevState,props)=>{return {listArray: this.state.notChangedArr};})// а это вроде работает, во всяком случае ошибки не выдает.
    console.log('neaga', this.state.listArray);}
  },
    render: function() {
 
          var wordsSelection=this.state.listArray.map( v =>
              React.DOM.option({key:v.code,className:'Word'},v.text,
              )
            );
          return React.DOM.div( {className:'SelectionBuld'}, 
            React.DOM.div( {className:'WordText'}, this.props.word ),
            React.DOM.input( {type:"checkbox", defaultChecked:false, onClick: this.checkBoxChecked} ),
            React.DOM.input( {type:"text",defaultValue:"Введите текст", onChange:this.inputTextChanged} ),
            React.DOM.input( {value:'сброс',type:"button",onClick: this.makeDefault}),
            React.DOM.div({className:'SelBul'},
               React.DOM.select( {className:'WordArr',size:this.props.selectSize}, wordsSelection ),),
          );
     
     
    },
  });