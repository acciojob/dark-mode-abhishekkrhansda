//your JS code here. If required
let mode = localStorage.getItem("darkMode")
let btn = document.querySelector("#btn")

if(mode === true){
	document.body.classList.add("dark-mode")
}

btn.addEventListener("click",()=>{

	document.body.classList.toggle("dark-mode")
	let darkMode = document.body.classList.contains("dark-mode");
	localStorage.setItem("darkMode",darkMode);
	
})
