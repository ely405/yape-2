'use strict';

const createCongratulations = (updatePageFunction, wrapperContainer)=>{
  console.log(state.screen);
  let congratulations = $('<div/>',{'class':'row valign-wrapper flex-column flex-center h-100vh amber accent-3', 'id':'congratulations'});
  let imgCongr = $('<img/>',{'src':'img/icons/check.png', 'alt':'Check', 'class':'col s7 m3 m-inherit'});
  let titleGood = $('<h5/>').html('¡Bien!');
  let parGood = $('<p/>').html('Ahora puedes usar Yape.');
  congratulations.append(imgCongr, titleGood, parGood);

  setTimeout(()=>{
    console.log('set time ot');
    state.screen = 'registerCardScreen';
    reRender(wrapperContainer, updatePageFunction, createRegisterCard(updatePageFunction));
  }, 3000);
  return congratulations;
}
