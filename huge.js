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

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2d21d721fa5912ddba051c71b359352c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();