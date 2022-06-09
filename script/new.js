var RI = function(){
	var first = Math.floor(Math.random()*(9-1)+1);
	var second = Math.floor(Math.random()*(9-1)+1);
	var ans = prompt(first + ' * '+ second + ' = ',0);
	if (ans == (first*second)){
		alert('Верно, ваш ответ ' + ans)
	}else{
		alert('Не верно, правельный ответ ' + first*second)
	}
}

RI();