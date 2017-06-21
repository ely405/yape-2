'use strict';

const createResendCodeScreen = (updatePageFunction, wrapperContainer)=>{
  console.log(state.screen);
  console.log(state.apiData.data.phone);
  console.log(state.apiData.data.code);
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

  checkCode(inpCode, dataResend, wrapperContainer, updatePageFunction);
  // countDownInterval(22, resendCode(wrapperContainer, updatePageFunction, inpCode, message), dataResend, wrapperContainer, updatePageFunction);
  return resendWrapper;
}

const checkCode = (input, data, wrapperContainer, updatePageFunction)=>{
  console.log(data.code);
  input.keyup(()=>{
    console.log(input.val());
    console.log(data.code);
    if(input.val() == data.code){
      state.screen = 'createUserAccountScreen';
      reRender(wrapperContainer, updatePageFunction, createUserAccount(updatePageFunction, wrapperContainer));
    }else{
      $('#span-message').html('Contraseña inválida');
    }
  });
}

// const countDownInterval = (init, functionResend, data, wrapperContainer, updatePageFunction)=>{
//   setInterval(()=>{
//     $('#count-down').html(init -= 1);
//     functionResend;
//     if(init == 1){
//       console.log('init = 1');
//       countDownInterval(22, functionResend, data, wrapperContainer, updatePageFunction);
//     }
//   }, 1000)
// }
//
// const resendCode = (wrapperContainer, updatePageFunction, inputCode, messageContainer)=>{
//   console.log('entra a resend');
//   console.log(state.apiData.data.phone);
//   $.post('/api/resendCode', {
//     "phone" : state.apiData.data.phone
//   }, (dataCode)=>{
//     console.log(dataCode);
//     state.apiData = dataCode;
//     checkCode(inputCode, dataCode, wrapperContainer, updatePageFunction);
//   })
// }
