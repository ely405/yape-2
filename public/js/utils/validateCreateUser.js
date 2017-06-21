'use strict';

const validateCreateUser = (name, email, code)=>{
  console.log(name.val());
  console.log(email.val());
  console.log(code.val());
}

const enableButton = (parent, childrenClass, evento, buttonToEnable, name, email, code)=>{
  parent.on(evento, childrenClass, ()=>{
    if(name.val() != '' && email.val() != '' && code.val() != ''){
      console.log('todo lleno');
      buttonToEnable.removeClass('disabled');
      buttonToEnable.removeAttr('disabled');
    }
  })
}
