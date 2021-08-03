let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
history2 = document.getElementById("history2");
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
			//history2.innerHTML = "previous Calculation : "+screenValue+"="+eval(screenValue);
			window.value = "previous Calculation : "+screenValue+"="+eval(screenValue);
        }
		else if(buttonText == 'LC'){
			screenValue = " ";
			history2.innerHTML = window.value;
			
		}
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
		
		

    })
}