'use strict';

const validateCreateUser = (name, email, code)=>{
  console.log(name.val());
  console.log(email.val());
  console.log(code.val());
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
}

const enableButton = (parent, childrenClass, evento, buttonToEnable, name, email, code)=>{
  parent.on(evento, childrenClass, ()=>{
    if(name.val() != '' && email.val() != '' && code.val() != ''){
      console.log('todo lleno');
      buttonToEnable.removeClass('disabled');
      buttonToEnable.removeAttr('disabled');
    }
    // for(var i= 0, i<=array.length; i++){
    //   if(array[i].val() != ''){
    //     buttonToEnable.removeClass('disabled');
    //     buttonToEnable.removeAttr('disabled');
    //   }
    // }
  })
}
