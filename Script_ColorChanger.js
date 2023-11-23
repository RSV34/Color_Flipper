const hex= [0 , 1 , 2 , 3 , 4 , 5 ,6 , 7 , 8 , 9 ,'a','b','c','d','e','f'];

const btn = document.getElementsByTagName('div')[1];

btn.addEventListener('click',function(){
	let HexColor= '#';
	for(i=0 ; i<6 ; i++) {
		HexColor += hex[Math.floor(Math.random() * hex.length)];
	}
	console.log(HexColor);
	document.getElementsByTagName('span')[0].textContent = HexColor;
	document.body.style.backgroundColor = HexColor;
});


