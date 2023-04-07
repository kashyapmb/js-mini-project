let display = document.querySelector('.display')
let startBtn = document.getElementById('startBtn')
let stopBtn = document.getElementById('stopBtn')
let resetBtn = document.getElementById('resetBtn')

let mSeconds = 0
let seconds = 0
let minutes = 0

let timer

startBtn.addEventListener('click',()=>{
	document.body.style.backgroundColor='green'
	if(timer!=null){
		clearInterval(timer)
	}
	timer=setInterval(startTimer,10)
})
stopBtn.addEventListener('click',()=>{
	document.body.style.backgroundColor='#fa0024'
	clearInterval(timer)
})
resetBtn.addEventListener('click',()=>{
	document.body.style.backgroundColor='#121212'
	clearInterval(timer)
	display.innerHTML=`00 : 00 : 00`
	mSeconds = seconds = minutes = 0
})

function startTimer(){
	mSeconds++
	if(mSeconds==100){
		mSeconds=0
		seconds++
		if(seconds==60){
			seconds=0
			minutes++
		}
	}

	let minutesString = minutes<10 ? `0${minutes}` : minutes
	let secondsString = seconds<10 ? `0${seconds}` : seconds
	let mSecondsString = mSeconds<10 ? `0${mSeconds}` : mSeconds


	display.innerHTML = `${minutesString} : ${secondsString} : ${mSecondsString}`
}