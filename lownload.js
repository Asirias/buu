function OpenDownloadsite()
{
	console.log(document.getElementById("texts").value);
if(document.getElementById("texts").value == "maturi")
{
	window.open("https://1drv.ms/f/s!Amn1qn6-q3wwgRgNkcW8wvh8mEZZ");
	document.getElementById("scce").innerHTML = "";
}else
{
	document.getElementById("scce").style.color = 'red';
	document.getElementById("scce").innerHTML = "パスが違います";
}
}