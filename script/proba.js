var keyboardIcon = document.querySelector('.search-form__keyboard');
var keyboard = document.querySelector('.keyboard');
var closeKeyboard = document.getElementById('close-keyboard');
var keyboardBtns = document.querySelectorAll('.keyboard button');
var searchForm = document.querySelector('.search-form__input');
var spinner = document.querySelector('.spinner');
var bar = document.querySelector('.sidebarMenu');
var act = document.querySelectorAll('li');
var req = "";
let youTuberItems = document.querySelectorAll('.yt');
let youTuberModal = document.querySelector('.youTuberModal');
let youTuberContainer = document.querySelector('#youtuberContainer');
let youtuberClose = document.querySelector('#youtuberClose');
let curimage ='';



keyboardIcon.onclick = function(){
    if (keyboard.style.top == '-50%'){
         keyboard.style.top ='50%';
     }else{
         keyboard.style.top = '-50%';
     }
}

spinner.onclick = function(){
    if (bar.classList.contains('rollUp')){
        bar.classList.remove('rollUp');
    }
    else{
        bar.classList.add('rollUp');
    }
}
closeKeyboard.onclick = function(){
     keyboard.style.top = '-50%';
}

act.forEach(function(el){
	el.onclick = function(){
		act.forEach(function(element){
			element.classList.remove('active');
			});
		el.classList.add('active');
		}
})
youtuberClose.onclick = function(){
	youTuberModal.style= 'display:none;'
	youTuberContainer.innerHTML="";
}

let lala = function(e){
	searchForm.value += e.target.textContent.trim();
	if(e.target.textContent.trim()=='RU');{
		repeat();
	}
}
youTuberItems.forEach(function(el){
	el.addEventListener('click',function(){
		youTuberModal.style= 'display:block;';
		curimage = el.dataset.youtuber;
		let url = '<iframe src="https://youtube.com/embed/'+ curimage + '" frameborder="0">'
		youTuberContainer.insertAdjacentHTML('beforeend',url);
						})
})


keyboard.addEventListener('click',lala);
        
function repeat(){
	alert("123");
}	
	
