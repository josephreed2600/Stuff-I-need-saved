$('#asm-code').hide()
$('#machine-code').hide()
$('#ram-bank').hide()
$('#breakpoints').hide()
$('p').hide()
$('input').hide()
$('hr').hide()
$('#run-code').parent().show()

onkeypress = function(e) {
	var i = 0;
	switch(e.key) {
		case 'q': i=1; break;
		case 'e': i=16; break;
		case 'w': i=0; break;
		case 'a': i=2; break;
		case 's': i=0; break;
		case 'd': i=8; break;
		default: i=0; break;
	}
	RAMwrite(1,i);
}
