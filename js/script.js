const popup=document.querySelector('.modal');
const popupLink=document.querySelector('.popup-link');
const popupClose=popup.querySelector('.modal-close');
const nameInput=popup.querySelector('.input-name');
const emailInput=popup.querySelector('.input-email');
const messageInput=popup.querySelector('.input-message');
const messageForm=popup.querySelector('.message-form');
let isStorageSupport = true;
let storageName='';
let storageEmail='';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

popupLink.addEventListener('click',function(evt){
  evt.preventDefault();
  popup.classList.add('modal-show');
  if(storageName){
    nameInput.value=storageName;
    if(storageEmail){
      emailInput.value=storageEmail;
      messageInput.focus();}
    else{
      emailInput.focus();
    }}
  else{nameInput.focus();}
  }
);

popupClose.addEventListener('click',function(evt){
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

messageForm.addEventListener('submit',function(evt){
  if(!nameInput.value||!emailInput.value){
  evt.preventDefault();
  popup.classList.remove('modal-error');
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add('modal-error');
  }else{ if(isStorageSupport){
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email', emailInput.value);
    }
  }
});

window.addEventListener('keydown',function(evt){
  if(evt.keyCode===27){
    if(popup.classList.contains('modal-show')){
      evt.preventDefault();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});

/*slider*/
let pressButtons=document.querySelectorAll('.button-control');
let sliders=document.querySelectorAll('.slide');
let clickHandler=function(button,slide){
  button.addEventListener('click',function(){
    for(let j=0;j<sliders.length;j++){
      sliders[j].classList.remove('current-slide');
      pressButtons[j].classList.remove('current-control');
    }
    slide.classList.add('current-slide');
    button.classList.add('current-control');
  })
}
for(let i=0;i<pressButtons.length;i++){
  clickHandler(pressButtons[i],sliders[i]);
}


