addEventListener("DOMContentLoaded", (e) => {
	let cc_num = document.getElementById('cc_number');
	let cvv = document.getElementById('cvv');
	[document.getElementById('phone'), cc_num, cvv].forEach((x) => {
		x.addEventListener('keypress', (e) => {
			code = (e.keyCode ? e.keyCode : e.which);
			if (code >= 48 && code <= 57 || code === 43)  {
				return;
			}
			e.preventDefault();
		});
	});
});


function check_luhns() {
	var numbers = cc_num.value.split('').map((i) => Number(i));
	
	var check_num = numbers.splice(numbers.length-1, 1);
	
	numbers = numbers.reverse();
	
	
	numbers.filter((_, i) => Boolean(i&1)).forEach((value) => {
		var n = value*2;
		if (n>9) {n-=9};
		check_num += n;
	}
	
	return check_num%10==0;
}

function verify_number() {
	
}
