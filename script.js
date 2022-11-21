let countm = 25
let counts = 1
let timerm = document.getElementById("timerm")
let timers = document.getElementById("timers")
let title = document.getElementById("title")
function mosmin(){
	if(countm<10){
		timerm.innerHTML = "0"+countm+":"
	}else{
		timerm.innerHTML = countm+":"
	}
}
function mosseg(){
	if(counts<10){
		timers.innerHTML = "0" + counts
	}else{
		timers.innerHTML = counts
	}
}
function inc(){
	console.log(counts);
    counts--;
	title.innerHTML = countm +":"+ counts
	mosmin()
	mosseg()
	if(countm<0&&counts<0){
		clearInterval(timer);
	}else if(counts<0){
		counts=60
		countm--	
	}
	
}

function iniciar(){
	timer = setInterval(function() {inc()}, 1000);
	document.querySelector("#start").disabled = true
	document.querySelector("#pause").disabled = false
}
function pausar(){
	clearInterval(timer);
	document.querySelector("#pause").disabled = true
	document.querySelector("#start").disabled = false
}
function resetar(){
	clearInterval(timer);
	countm=25
	counts=0
	document.querySelector("#pause").disabled = true
	document.querySelector("#start").disabled = false
	mosmin()
	mosseg()
}
function diminuir(){
	if(countm>0){
		countm=countm-5
		mosmin()
	}
	
}
function aumentar(){
	if(countm<60){
		countm=countm+5
		mosmin()
	}
	
}