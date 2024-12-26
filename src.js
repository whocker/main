GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/whocker/userhighlighter/main/src.js',
    onload: function(response) {
        var script = document.createElement('script');
        script.textContent = response.responseText;
        document.head.appendChild(script);
    }
});

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://en.wikipedia.org/w/index.php?title=User:Js/6tabs-vector.js&action=raw',
    onload: function(response) {
        var script = document.createElement('script');
        script.textContent = response.responseText;
        document.head.appendChild(script);
    }
});

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://en.wikipedia.org/w/index.php?title=User:Danski454/undo-move.js&action=raw',
    onload: function(response) {
        var script = document.createElement('script');
        script.textContent = response.responseText;
        document.head.appendChild(script);
    }
});

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://en.wikipedia.org/w/index.php?title=User:GeneralNotability/mark-locked.js&action=raw',
    onload: function(response) {
        var script = document.createElement('script');
        script.textContent = response.responseText;
        document.head.appendChild(script);
    }
});

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/whocker/ShowGender/refs/heads/main/src.js',
    onload: function(response) {
        var script = document.createElement('script');
        script.textContent = response.responseText;
        document.head.appendChild(script);
    }
});
