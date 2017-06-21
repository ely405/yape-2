'use strict';

const createResendCodeScreen = (updatePageFunction, wrapperContainer)=>{
  let dataResend = state.apiData.data;
  console.log(dataResend);
  let resendWrapper = $('<section/>',{'class':'row valign-wrapper flex-column container bg-no-repeat h-95vh flex-center', 'id':'message-container'});
  let resendTitle = $('<h4/>',{'class':'center'}).html('Ahora ingresa tu código');
  let resendPar = $('<p/>',{'class':'center'}).html('Enviamos un código de validación al número');
  let phoneToSend = $('<strong/>').html(state.apiData.data.phone);
  resendPar.append(phoneToSend);
  let inpCode = $('<input/>',{'id':'inp-code', 'type':'text', 'class':'validate p-l-126 col s11 bg-contain bg-no-repeat', 'placeholder':'- - - - -'});
  let retryPara = $('<p/>',{'class':'center'}).html('Reintentar en ');
  let clockIcon = $('<i/>',{'id':'clock-icon','class':'bg-contain bg-no-repeat'});
  let countDown = $('<span/>',{'id':'count-down'});
  let message = $('<span/>',{'id':'span-message'})
  retryPara.append(clockIcon, countDown);
  resendWrapper.append(resendTitle, resendPar, inpCode, retryPara, message);

  counter(inpCode, dataResend, wrapperContainer, updatePageFunction);
  return resendWrapper;
}

const counter = (input, data, wrapperContainer, updatePageFunction)=>{
  checkCode(input, data, wrapperContainer, updatePageFunction, data.code);
  let interval = setInterval(()=>{
    data.code = null;
    console.log(data.code);
    getNewCode(data, input, wrapperContainer, updatePageFunction);
  }, 10000);
}

const checkCode = (input, data, wrapperContainer, updatePageFunction, password)=>{
  console.log(state.password + ' password');
  console.log(data.code + ' code');
  console.log(password);
  state.password = data.code;
  input.keyup(()=>{
    if(input.val() == password){
      state.screen = 'createUserAccountScreen';
      reRender(wrapperContainer, updatePageFunction, createUserAccount(updatePageFunction, wrapperContainer));
    }else{
      $('#span-message').html('Contraseña inválida');
    }
  });
}

const getNewCode = (dataResend, input, wrapperContainer, updatePageFunction)=>{
  $.post('api/resendCode', {
    "phone" : dataResend.phone
  }, (dataCode)=>{
    console.log(dataCode);
    state.password = dataCode.data;
    console.log(state.password);
    checkCode(input, dataResend, wrapperContainer, updatePageFunction, dataCode.data)
  })
}
