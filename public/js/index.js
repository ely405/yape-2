'use strict';

const update = ()=>{
  render(documentRoot);
}

const render = (documentRoot)=>{
  documentRoot.empty();
  let wrapper = $('<section/>');
  documentRoot.append(wrapper.append(createWelcome(update, wrapper)));
}

const reRender = (resultContainer, update, screenToAppend)=>{
  resultContainer.empty();
  resultContainer.append(screenToAppend);
}

const state={
  screen : null,
  dataApi : null,
  password: null
}

const documentLoad = ()=>{
  state.screen = 'welcome';
  let rootToLoad = $('#root');
  render(rootToLoad);
}

$(document).ready(function(){
  documentLoad();
  $('.carousel').carousel();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 5 // Creates a dropdown of 15 years to control year
  });
});
