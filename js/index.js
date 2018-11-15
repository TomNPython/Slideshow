/* function for swapping between different words for "hello" in different languages on click  - using howto w3 slideshow*/

var languageIndex = 1;
showLanguages(languageIndex);

// next/prev control 
function plusLanguage(n) {
showLanguages(languageIndex += n);
}

function showLanguages(n) {
  var i;
  var lang = document.getElementsByClassName('language');
  // getting all language sections
  if (n > lang.length)  {
    languageIndex = 1;
  }
  if (n < 1) {
    languageIndex = lang.length;
  }
  for (i = 0; i < lang.length; i++) {
    lang[i].style.display = 'none';
  } // hiding languages
  lang[languageIndex-1].style.display = 'block'; // showing relevant language
}
