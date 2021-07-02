document.addEventListener('keyup', (e) => {
  const url = 'http://huge.cf/download/?huge-url=' + encodeURI(document.querySelector('#search').value);
  if (e.key === 'Enter') {
    window.open(url);
  } 
})

function aenter(){
  const url = 'http://huge.cf/download/?huge-url=' + encodeURI(document.querySelector('#search').value);
  window.open(url);
}

  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://analytics.1ove.club/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '7']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();

