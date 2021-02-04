function getLearningList(id_clicked) {

  $clickedBtn = $('#' + id_clicked)

  if($clickedBtn.hasClass('clicked')) {
      
    $clickedBtn.next().empty();

    $clickedBtn.removeClass('clicked');

  } else {

    var list = JSON.parse(eval(id_clicked));

    for(i=0; i < list.length; i++) {
      var linkBtn = document.createElement('a');
      linkBtn.innerHTML = list[i].title;
      linkBtn.setAttribute('href', 'learn-page.html?cat=' + id_clicked + '&file=' + list[i].name)
      $clickedBtn.next().append(linkBtn);
    }

    $clickedBtn.addClass('clicked');

  }
}
