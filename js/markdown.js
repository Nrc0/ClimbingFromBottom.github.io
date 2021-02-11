function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function imageZoom(img) {
  if(img.classList.contains('zoom')){
    $('.zoom').off('mousemove');
    img.classList.remove('zoom');
  } else {
    $('.zoom').off('mousemove');
    $('.zoom').removeClass('zoom');
    img.classList.add('zoom');

    $('.zoom').on('mousemove', function(event) {
      // This gives you the position of the image on the page
      var bbox = event.target.getBoundingClientRect();

      // Then we measure how far into the image the mouse is in both x and y directions
      var mouseX = event.clientX - bbox.left;
      var mouseY = event.clientY - bbox.top;

      // Then work out how far through the image as a percentage the mouse is
      var xPercent = (mouseX / bbox.width) * 100;
      var yPercent = (mouseY / bbox.height) * 100;

      // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
      //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
      // It's a bit clearer in jQuery:
      $(this).css('transform-origin', (xPercent+'% ' + yPercent+ '%') );
      // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

    }); 
  }
}

// #################################################
// ############### Markdown to HTML ################
// #################################################
const replaceRegex = function(regex, replacement){
	return function(str){
		return str.replace(regex, replacement);
	}
}
// Regular expressions for Markdown (a bit strict, but they work)
const codeBlockRegex = /((\n\t)(.*))+/g;
const inlineCodeRegex = /(`)(.*?)\1/g;
const imageRegex = /!\[([^\[]+)\]\(([^\)]+)\)/g;
const linkRegex = /\[([^\[]+)\]\(([^\)]+)\)/g;
const headingRegex = /\n(#+\s*)(.*)/g;
const boldItalicsRegex = /(\*{1,2})(.*?)\1/g;
const strikethroughRegex = /(\~\~)(.*?)\1/g;
const blockquoteRegex = /\n(&gt;|\>)(.*)/g;
const horizontalRuleRegex = /\n((\-{3,})|(={3,}))/g;
const unorderedListRegex = /(\n\s*(\-|\+)\s.*)+/g;
const orderedListRegex = /(\n\s*([0-9]+[.]).*)+/g;
const tableRegex = /(\|[^\n]+\|\r?\n)((?:\|:?[-]+:?)+\|)(\n(?:\|[^\n]+\|\r?\n?)*)?/g;
const paragraphRegex = /\n+(?!<pre>)(?!<h)(?!<ul>)(?!<blockquote)(?!<hr)(?!\t)([^\n]+)\n/g;
// Replacer functions for Markdown
const codeBlockReplacer = function(fullMatch){
  let lines = '';
  fullMatch.split('\n').forEach( line => { lines += line.substring(1) + '\n'; } );
	return '\n<pre>' + lines + '</pre>';
}
const inlineCodeReplacer = function(fullMatch, tagStart, tagContents){
	return '<code>' + tagContents + '</code>';
}
const imageReplacer = function(fullMatch, tagTitle, tagURL){
	return '<img src="' + tagURL + '" alt="' + tagTitle + '" onclick="imageZoom(this);"/>';
}
const linkReplacer = function(fullMatch, tagTitle, tagURL){
	return '<a href="' + tagURL + '">' + tagTitle + '</a>';
}
const headingReplacer = function(fullMatch, tagStart, tagContents){
	return '\n<h' + tagStart.trim().length + ' id=\'' + tagContents.replace(/\s/g, '')  + '\'>' + '<span>'  + tagContents + '</span>' + '</h' + tagStart.trim().length + '>';
}
const boldItalicsReplacer = function(fullMatch, tagStart, tagContents){
	return '<' + ( (tagStart.trim().length==1)?('em'):('strong') ) + '>'+ tagContents + '</' + ( (tagStart.trim().length==1)?('em'):('strong') ) + '>';
}
const strikethroughReplacer = function(fullMatch, tagStart, tagContents){
	return '<del>' + tagContents + '</del>';
}
const blockquoteReplacer = function(fullMatch, tagStart, tagContents){
	return '\n<blockquote>' + tagContents + '</blockquote>';
}
const horizontalRuleReplacer = function(fullMatch){
	return '\n<hr />';
}
const unorderedListReplacer = function(fullMatch){
	let items = '';
	fullMatch.trim().split('\n').forEach( item => { items += '<li>' + item.substring(2) + '</li>'; } );
	return '\n<ul>' + items + '</ul>';
}
const orderedListReplacer = function(fullMatch){
	let items = '';
	//fullMatch.trim().split('\n').forEach( item => { items += '<li>' + item.substring(item.indexOf('.')+2) + '</li>'; } );
	fullMatch.trim().split('\n').forEach( item => { items += '<li>' + item + '</li>'; } );
  return '\n<ol>' + items + '</ol>';
}
const tableRegexReplacer = function(fullMatch, tagTitle, tagSeparation, tagContents){
  var regExp = /\|(.*)\|/g;
  let titles = regExp.exec(tagTitle)[1].split('|');
  regExp.lastIndex = 0;
  //// Table Title ////
  var res = "\n<table><tr>";
  titles.forEach(item => {res += "<th>" + item.trim() + "</th>"});
  res += "</tr>";

  //// Table Content ////
  let contents = tagContents.trim().split('\n');
  contents.forEach(function(item){
    res += "<tr>";
    var lines = regExp.exec(item)[1].split('|');
    regExp.lastIndex = 0;
    lines.forEach(row => {res += "<td>" + row.trim() + "</td>"});
    res += "</tr>";
  });
  res += "</table>";
  return res;
}
const paragraphReplacer = function(fullMatch, tagContents){
	return '<p>' + tagContents + '</p>';
}
// Rules for Markdown parsing (use in order of appearance for best results)
const replaceCodeBlocks = replaceRegex(codeBlockRegex, codeBlockReplacer);
const replaceInlineCodes = replaceRegex(inlineCodeRegex, inlineCodeReplacer);
const replaceImages = replaceRegex(imageRegex, imageReplacer);
const replaceLinks = replaceRegex(linkRegex, linkReplacer);
const replaceHeadings = replaceRegex(headingRegex, headingReplacer);
const replaceBoldItalics = replaceRegex(boldItalicsRegex, boldItalicsReplacer);
const replaceceStrikethrough = replaceRegex(strikethroughRegex, strikethroughReplacer);
const replaceBlockquotes = replaceRegex(blockquoteRegex, blockquoteReplacer);
const replaceHorizontalRules = replaceRegex(horizontalRuleRegex, horizontalRuleReplacer);
const replaceUnorderedLists = replaceRegex(unorderedListRegex, unorderedListReplacer);
const replaceOrderedLists = replaceRegex(orderedListRegex, orderedListReplacer);
const replaceTable = replaceRegex(tableRegex, tableRegexReplacer);
const replaceParagraphs = replaceRegex(paragraphRegex, paragraphReplacer);
// Fix for tab-indexed code blocks
const codeBlockFixRegex = /\n(<pre>)((\n|.)*)(<\/pre>)/g;
const codeBlockFixer = function(fullMatch, tagStart, tagContents, lastMatch, tagEnd){
  let lines = '';
  tagContents.split('\n').forEach( line => { lines += line + '\n'; } );
	//console.log(tagStart + lines + tagEnd);
	return tagStart + lines + tagEnd;
}
const fixCodeBlocks = replaceRegex(codeBlockFixRegex, codeBlockFixer);
// Replacement rule order function for Markdown
// Do not use as-is, prefer parseMarkdown as seen below
const replaceMarkdown = function(str) {
  return replaceParagraphs(replaceOrderedLists(replaceUnorderedLists(replaceTable(
		replaceHorizontalRules(replaceBlockquotes(replaceceStrikethrough(
			replaceBoldItalics(replaceHeadings(replaceLinks(replaceImages(
				replaceInlineCodes(replaceCodeBlocks(str))
      ))))
    )))
	))));
}
// Parser for Markdown (fixes code, adds empty lines around for parsing)
// Usage: parseMarkdown(strVar)
const parseMarkdown = function(str) {
	return fixCodeBlocks(replaceMarkdown('\n' + str + '\n')).trim();
}

function showMDpage(filepath){
	$.get(filepath, function(data) {
    html = parseMarkdown(data);
    //console.log(html);
    $('.content').html(html);
	});
}

function createTableOfContent(){
  var TableOfContent =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>Table des matieres</h2>" +
    "<ul>";

  var elem, title, link;
  $('.content h2, .content h3, .content h4, .content h5').each(function(){
    elem = $(this);
    title = elem.text();
    link = "#" + elem.attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    TableOfContent += newLine;

  });
    
  TableOfContent +=
    "</ul>" +
  "</nav>";

  $('#content').prepend(TableOfContent);
}

//function startMD(cat, file){

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get('cat');
const file = urlParams.get('file');

if(cat != null && file != null) {
  cat_title = cat.replace('_', ' ');
  document.getElementById('title-cat').innerHTML = (cat_title.charAt(0).toUpperCase() + cat_title.slice(1));

  document.getElementById('fiches-box').classList.remove('full-box');
  document.getElementById('fiches-box').classList.add('side-box');
  document.getElementById('content').style.display = "block";

  //showMDpage('https://raw.githubusercontent.com/ClimbingFromBottom/ClimbingFromBottom.github.io/main/learning-md/' + cat + '/' + file + '.md');
  showMDpage('https://raw.githubusercontent.com/ClimbingFromBottom/md-files/main/' + cat + '/' + file + '.md');

  backToTop();

  window.setTimeout(function () {
  createTableOfContent();
  }, 500);
}
//}
