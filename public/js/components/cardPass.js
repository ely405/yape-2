'use strict';

const createCardPassword = (updatePageFunction, wrapperContainer)=>{
  let passCardContainer = $('<div/>',{'class':'row valign-wrapper flex-column container h-100vh'});
  let imgLogo = $('<img/>',{'src':'img/icons/bcp-logo.png', 'alt':'logo Bcp', 'class':'col s6 m-auto'});
  let titlePass = $('<h5/>',{'class':'center'}).html('Ingresa la clave de tu tarjeta');
  let descPass = $('<h6/>', {'class':'center'}).html('Tarjeta ****');
  let lastDigits = $('<span/>').html('últimos dígitos');
  let formPass = $('<form/>',{'class':'col m-auto s11 valign-wrapper flex-column'});
  let inpPassCard = $('<input/>',{'type':'number', 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat center to-enable', 'required':'required'});
  let btnRegisterPass = $('<button/>',{'type':'submit', 'class':'waves-effect btn disabled', 'disabled':'disabled'}).html('REGISTRAR');
  formPass.append(inpPassCard, btnRegisterPass);
  passCardContainer.append(imgLogo, titlePass, descPass, lastDigits, formPass);

  enableButton(formPass, '.to-enable', 'change', btnRegisterPass, inpPassCard, inpPassCard, inpPassCard);

  btnRegisterPass.click(()=>{
    state.screen = 'showHelloScreen';
    reRender(wrapperContainer, updatePageFunction, createShowHello(updatePageFunction, wrapperContainer));
  });
  return passCardContainer;
}
