"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import iShop3 from './components/iShop3';

let marketNameText='Яблыка на талерке';
let goods=require('./goods.json');
let columnGoods=[ 
    {text:'название',code:1}, 
    {text:'цена',code:2}, 
    {text:'URL фото',code:3},
    {text:'единиц на складе',code:4} 
  ];

ReactDOM.render(
  <iShop3 
  marketName={marketNameText}
  rowG={goods}
  columnG={columnGoods}
  startWorkMode={1}
  />
  , document.getElementById('container') 
);



