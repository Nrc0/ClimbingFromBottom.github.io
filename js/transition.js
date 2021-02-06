function pageTransitionIn(logo, redirect) {
  var svg = document.createElement("object");
  svg.setAttribute('id', 'svg-transition-in');
  svg.setAttribute('data', 'images/logo/' + logo);
  svg.setAttribute('type', 'image/svg+xml');
  $('body').append(svg);
  svg.classList.add('transition');
  
  window.setTimeout(function () {
		window.location.replace(redirect);
	}, 2000);
}

function pageTransitionOut() {
  document.getElementById("full-page").removeAttribute("hidden");
  //var svg = document.getElementById("svg-transition-out");
  //svg.classList.add('transition');
}
