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