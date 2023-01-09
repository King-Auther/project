let captcha;
const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generate() {

	// Clear old input
	document.getElementById("value").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	let uniquechar = "";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 7; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}

	// Store generated input
	captcha.innerHTML = uniquechar;
}

function printmsg() {
	const usr_input = document
		.getElementById("value").value;
		let queryString = decodeURIComponent(window.location.search);
		let media = queryString.substring(7);
		
	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha.innerHTML) {
        console.log(media)
        if(media=="Instagram")
        window.location.href="https://instagram.com/";
		else if(media==="Tinder")
    	window.location.href="https://tinder.com/";
    	else if(media==="Twitter")
    	window.location.href="https://twitter.com/";
    	else if(media==="Discord")
    	window.location.href="https://discord.com/";
	}
	else {
		
		this.generate();
	}
}

function myfunction(){
    console.log(23)
let age= document.getElementById("age").value;
let media= document.getElementById("Media").value; 
let fn= document.getElementById("fname").value; 
let ln= document.getElementById("lname").value; 
let gen= document.getElementById("gender").value; 

console.log(age);
if(age<18)
{
alert(`You are not 18+ so you cant use ${media}`);
}
else{
    
    if(fn !=""&&ln !="" && gen!=null)
    {
		let queryString = "?media=" + media;
		window.location.href = "captcha.html" + queryString;
    }
    else
    alert("You have not enetred all data!!");

}
}