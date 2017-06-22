'use strict';

const createShowHello = (updatePageFunction, wrapperContainer)=>{
  let showHelloContainer = $('<div/>',{'class':'h-100vh purple lighten-2 white-text valign-wrapper flex-column space-between'});
  let helloContainer = $('<div/>',{'class':'valign-wrapper flex-column row'});
  let imgFace = $('<img/>',{'src':'img/icons/happy-face.png', 'alt':'Happy face', 'class':'col s4 m-auto'});
  let hello = $('<h4/>',{'class':'center'}).html('Hola');
  let showBalance = $('<a/>',{'href':'#'}).html('Mostrar saldo');
  let eye = $('<i/>',{'id':'eye','class':'bg-contain bg-no-repeat'});
  helloContainer.append(imgFace, hello, showBalance.prepend(eye));
  let lastedContainer = $('<div/>',{'class':'purple darken-4 row h-60pr m-b-0'});
  let lasted = $('<h6/>',{'class':'valign-wrapper space-around p-1'}).html('ÚLTIMOS MOVIMIENTOS');
  let rightArrow = $('<i/>',{'id':'right-arrow', 'class':'bg-contain bg-no-repeat p-1'});
  lasted.append(rightArrow);
  let fastContainer = $('<div/>',{'class':'row'});
  let imgFast = $('<img/>',{'src':'img/icons/icon.png', 'alt':'icon', 'class':'col s6'});
  let par1 = $('<p/>').html('¿Aún no realizas tu primer pago?');
  let par2 = $('<p/>').html('Es rápido y sencillo');
  fastContainer.append(imgFast, par1, par2);
  let iconContainer = $('<div/>',{'class':'row valign-wrapper'});
  let imgSend = $('<img/>',{'src':'img/icons/send.png', 'alt':'send', 'class':'col s3 pull-s2'});
  let imgQr = $('<img/>',{'src':'img/icons/code-qr.png', 'alt':'code qr', 'class':'col s3 pull-s1'});
  iconContainer.append(imgSend, imgQr);
  lastedContainer.append(lasted, fastContainer, iconContainer);
  showHelloContainer.append(helloContainer, lastedContainer);
  return showHelloContainer;
}
