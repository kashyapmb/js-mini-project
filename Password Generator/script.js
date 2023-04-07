let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let getBtn = document.getElementById('getBtn')
let copyIcon = document.getElementById('copyIcon')

sliderValue.textContent = inputSlider.value
inputSlider.addEventListener('input',()=>{
	sliderValue.textContent = inputSlider.value
})

let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
let allNumbers = '0123456789'
let allSymbols = '~!@#$%^&*()-_+=<>{}[]'

getBtn.addEventListener('click',()=>{
	passBox.value = generatePass()
})

function generatePass(){
	let genPassword = ""
	let str = ""

	str+= uppercase.checked ? upperChars : ''
	str+= lowercase.checked ? lowerChars : ''
	str+= numbers.checked ? allNumbers : ''
	str+= symbols.checked ? allSymbols : ''

	if(str.length == 0){
		return genPassword
	}

	let i=1
	while(i<=inputSlider.value){
		genPassword += str.charAt((Math.random()*469) % str.length)
		
		i++
	}
	return genPassword
}

copyIcon.addEventListener('click', ()=>{
	if(passBox.value.length>=1){
		navigator.clipboard.writeText(passBox.value)
		copyIcon.innerText = 'check'
		copyIcon.title = "Password Copied"

		setTimeout(()=>{
			copyIcon.innerHTML = 'content_copy'
			copyIcon.title = "Copy Password"
		},4000)
	}
})

