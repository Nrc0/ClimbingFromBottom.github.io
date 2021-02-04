function getKey(filepath) {
	var input = document.getElementById("key-field");

	var key = JSON.parse(data).key;

	if(sha1(input.value) == key){
		var modal = document.getElementById("whatafile").childNodes; // modal
		var tmp = modal[1].childNodes; // modal-dialog
		tmp = tmp[1].childNodes; // modal-content
		var header = tmp[1].childNodes; // modal-header
		var body = tmp[3].childNodes; // modal-body
		var footer = tmp[5].childNodes; // modal-footer
		
		body[1].innerHTML = JSON.parse(data).text;
		body[1].style.color = "green";
	} else {
		input.classList.add("invalid");
		$('.key-field').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
		      $('.key-field').delay(200).removeClass('invalid');
		});
	}
}

function setupChalls() {
	const urlParams = new URLSearchParams(window.location.search);
	const cat = urlParams.get('cat');

	document.getElementById('title-cat').innerHTML = (cat.charAt(0).toUpperCase() + cat.slice(1))

	var list = JSON.parse(eval(cat));

  var jsonKey = document.createElement("script");
  jsonKey.type = "text/javascript";
  jsonKey.src = "challenge-files/" + cat + "/" + list[0].name + "/key.json";
  $("head").append(jsonKey);

	// ## Adding the first chall of the list ##
	var $challDiv = $('.chall');
	$challDiv.addClass(list[0].name);
	$challDiv.attr('data-target', '#' + list[0].name);
	
	//Adding the image of the chall
	var $challImg = $challDiv.children()[0];
	$challImg.setAttribute("src", "challenge-files/" + cat + "/" + list[0].name + "/icon.png");

	//Adding the title of the chall
	$challDiv.children()[1].innerHTML = list[0].title;

	var $modalDiv = $('.modal');
        $modalDiv.attr('id', list[0].name);

	var modal = document.getElementById(list[0].name).childNodes; // modal
        var tmp = modal[1].childNodes; // modal-dialog
        tmp = tmp[1].childNodes; // modal-content
        var header = tmp[1].childNodes; // modal-header
        var body = tmp[3].childNodes; // modal-body
        var footer = tmp[5].childNodes; // modal-footer
	var $modalDiv = $('.modal');
	$modalDiv.attr('id', list[0].name);

	header[1].innerHTML = list[0].title;
	body[1].innerHTML = list[0].desc;
  //footer[1].attr('onclick', "getKey('challenge-files/" + cat + "/" + list[0].name + "/key.json');")

	//console.log($challDiv);

	for (i=1; i < list.length; i++) {

    var jsonKey = document.createElement("script");
    jsonKey.type = "text/javascript";
    jsonKey.src = "challenge-files/" + cat + "/" + list[i].name + "/key.json";
    $("head").append(jsonKey);

		var $challDiv = $('.' + list[i-1].name).clone();
		$challDiv.attr('data-target', '#' + list[i].name);
		$challDiv.addClass(list[i].name);
		$('.box').append($challDiv);

		//Adding the image of the chall
		var $challImg = $challDiv.children()[0];
		$challImg.setAttribute("src", "challenge-files/" + cat + "/" + list[i].name + "/icon.png");

		//Adding the title of the chall
		$challDiv.children()[1].innerHTML = list[i].title;
	
		var $modalDiv = $('#' + list[i-1].name).clone();
		$modalDiv.attr('id', list[i].name);
		$('.modals').append($modalDiv);

		var modal = document.getElementById(list[i].name).childNodes; // modal
		var tmp = modal[1].childNodes; // modal-dialog
		tmp = tmp[1].childNodes; // modal-content
		var header = tmp[1].childNodes; // modal-header
		var body = tmp[3].childNodes; // modal-body
		var footer = tmp[5].childNodes; // modal-footer

		header[1].innerHTML = list[i].title;
		body[1].innerHTML = list[i].desc;
    //footer[1].attr('onclick', "getKey('challenge-files/" + cat + "/" + list[i].name + "/key.json');")
	}
}

window.onload = setupChalls;
