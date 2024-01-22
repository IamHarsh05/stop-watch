let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
let Rechour = 00;
let Recminute = 00;
let Recsecond = 00;
let Reccount = 00;


function start(){
    var start = document.getElementById("start-stop").innerHTML;
    // console.log (start);
    if(start == "Stop"){
        document.getElementById("start-stop").innerHTML = "Start";
        timer = false;	    
        // console.log("stop");
    }
    else{
        // console.log(start);
        document.getElementById("start-stop").innerHTML = "Stop";
        timer = true;
	    stopWatch();
    }
}


function oldrecord(){
	let Rechour = hour;
	let Recminute = minute;
	let Recsecond = second;
	let Reccount = count;
	
	document.getElementById("record").style.visibility = "visible";
	document.getElementById("new_records").style.visibility = "hidden";
	
	if (hour < 10) {
		Rechour = "0" + Rechour;
	}
	
	if (minute < 10) {
		Recminute = "0" + Recminute;
	}
	
	if (second < 10) {
		Recsecond = "0" + Recsecond;
	}
	
	if (count < 10) {
		Reccount = "0" + Reccount;
	}
	
	document.getElementById('rec-hr').innerHTML = Rechour;
	document.getElementById('rec-min').innerHTML = Recminute;
	document.getElementById('rec-sec').innerHTML = Recsecond;
	document.getElementById('rec-count').innerHTML = Reccount;
}

function new_records_div() {
	
	var hide = document.getElementsByClassName("record");
	for(var i = 0; i < hide.length; i++){
		hide[i].style.visibility = "hidden"; 
		hide[i].style.display = "block"; 
	}

	let old_records = document.getElementById("record").outerHTML;
	console.log(old_records);
	
	oldrecord();

	let new_records;
	new_records = old_records;
	// console.log(new_records);

	document.getElementById('new_records').innerHTML = new_records;
}


function reset(){
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	Rechour = 0;
	Recminute = 0;
	Recsecond = 0;
	Reccount = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
	document.getElementById("start-stop").innerHTML = "Start";

	var hide = document.getElementsByClassName("record");
	console.log(hide.length);
	if(hide.length  < 1){
		for(var i = 0; i < hide.length; i++){
			hide[i].style.visibility = "visible"; 
			hide[i].style.display = "block"; 
		}
	}
	else{
		for(var i = 0; i < hide.length; i++){
			hide[i].style.visibility = "hidden";
			hide[i].style.display = "none"; 
			hide.length = 0;
		}
	}
	// document.getElementsByClassName("records").style.visibility = "visible";	
}

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}
