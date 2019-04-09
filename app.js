window.onload = function() {
	

	h.addEventListener("click", ()=> {
		console.log(this);
		// alert(this.dataset.gondr);
	});

	let btn = document.querySelector("#btn");
	let name = document.querySelector("#name");
	btn.addEventListener("click", function() {
		console.log(name.value);
	});
}