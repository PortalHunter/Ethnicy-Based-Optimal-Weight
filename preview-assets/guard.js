
/* Loaded first: if anything later fails, show a plain message instead of failing silently. */
window.ebowShowFatal = function (msg) {
  var r = document.getElementById('results');
  if (!r) return;
  r.style.display = 'block';
  r.innerHTML = '';
  var d = document.createElement('div');
  d.className = 'fatal';
  d.appendChild(document.createTextNode('Sorry, the calculator hit an error and could not show results (' + msg + '). Please reload the page, or open the file in Safari, Chrome, Firefox or Edge.'));
  r.appendChild(d);
};
window.onerror = function (msg) { window.ebowShowFatal(String(msg)); };
