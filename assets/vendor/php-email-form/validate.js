function sendToWhatsapp(){
	let number = "+6285321504200";

	let name = document.getElementById('name').value;
	let tel = document.getElementById('tel').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Telephone : " +tel+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}