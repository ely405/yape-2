'use strict';

const createUserAccount = (updatePageFunction, wrapperContainer)=>{
  console.log(state.screen);
  let createUserContainer = $('<div/>',{'class':'row valign-wrapper flex-column container', 'id':'create-user-container'});
  let imgLockOne = $('<img/>',{'src':'img/icons/lockone.png', 'alt':'Lock One', 'class':'col s6 m-auto'});
  let userTitle = $('<h5/>',{'class':'center'}).html('Crea tu usuario Yape');
  let userPar = $('<p/>').html('Ingresa un nombre, email y clave de usuario.');

  let formContainer = $('<form/>',{'class':'col m-auto s11 valign-wrapper flex-column'});
  let userName = $('<input/>',{'id':'user-name', 'type':"text", 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat to-enable', 'placeholder':'Nombre', 'required':''});
  let userEmail = $('<input/>',{'id':'user-email', 'type':'email', 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat to-enable', 'placeholder':'correo@ejemplo.com', 'required':'true'});
  let userPass = $('<input/>',{'id':'user-pass', 'type':'password', 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat to-enable', 'placeholder':'Ingresa clave de 6 dígitos', 'required':'true '})
  let formPar = $('<p/>',{'class':'center'}).html('Cuida esta clave como oro, es tu clave de acceso a Yape.');
  let btnAccount = $('<button/>',{'type':'submit', 'class':'waves-effect btn disabled', 'id':'btn-account', 'disabled':'disabled'}).html('CREAR CUENTA');
  formContainer.append(userName, userEmail, userPass, formPar, btnAccount);
  createUserContainer.append(imgLockOne, userTitle, userPar, formContainer);

  enableButton(formContainer, '.to-enable', 'keyup', btnAccount, userName, userEmail, userPass);

  btnAccount.click(()=>{
    state.screen = 'congratulationsScreen';
    validateCreateUser(userName, userEmail, userPass);
    reRender(wrapperContainer, updatePageFunction, createCongratulations(updatePageFunction, wrapperContainer));
  });
  return createUserContainer;
}
