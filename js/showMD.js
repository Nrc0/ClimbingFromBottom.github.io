var server = '';
var basepath = '';
var contentPath = '';

$(document).ready(function() {
    updateContent('https://raw.githubusercontent.com/ClimbingFromBottom/ClimbingFromBottom/main/learning-md/Reseau/wireshark.md');
});

// Update content with given markdown
// URL should be either full path or relative chrooted to content folder
function updateContent(url) {
    if (url.match("^" + basepath)) {
//            if (!url.match("^" + basepath + contentPath)) {
            url = url.substring(basepath.length);
//          }
    }

    if (!url) {
        url = "index.md";
    }
    
    if (url.match(".md$")){ 
        url = contentPath + url;
    }

    $.ajax({
    method: 'GET',
    url: url
    }).done(setMarkdown);
}

function setMarkdown(content) { 
  $('.content').html(markdown.toHTML(content));
}

window.onpopstate = function(e){
    if(e.state){
        updateContent(e.state.dest);
    }
    else { 
        updateContent("");
    }
};
