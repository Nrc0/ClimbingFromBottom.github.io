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
