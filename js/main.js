function pull() {
	
	var app     = document.getElementById("app"),
		header  = document.getElementById("header"),
		content = document.getElementById("content"),
		slide   = document.getElementById("slide"),
		pull    = document.getElementById("pull"),
		list    = document.getElementById("list");
		
	function setup() {
		app.style.height = window.innerHeight + "px";
		app.style.width = window.innerWidth + "px";
	}
	
	function add() {
		var item = document.createElement("li");
		item.classList.add("hidden");
		item.innerHTML = '\
			<div class="avatar"></div>\
			<div class="info">\
				<h3>New Lorem</h3>\
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>\
			</div>';
		list.insertBefore(item, list.firstChild);
		setTimeout(function() { item.classList.remove("hidden") }, 0);
		
	}

	slide.addEventListener("touchmove", function() {
		var distance = content.scrollTop;
		if (pull.className != "step3") {
			if      (distance < -50) pull.className = "step2";
			else if (distance > -50) pull.className = "step1";
		}
	});

	slide.addEventListener("touchend", function() {
		var distance = content.scrollTop;
		if (distance < -50) {
			pull.className = "step3";
			slide.className = "refreshing";
			setTimeout(function() {
				pull.className = "step1";
				slide.className = "";
				add();
			}, 2000);
		}
	});

	header.addEventListener("touchmove", function() { event.preventDefault() });
	window.addEventListener("orientationchange", function() { setup() });
	window.addEventListener("resize", function() { setup() });
	setup();

}