// Live reload - Ultra simple
console.log('✓ Live reload activated');

var lastCheck = 0;

setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/check-changes?' + Math.random(), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                var obj = JSON.parse(xhr.responseText);
                if (obj.lastChange > lastCheck && lastCheck > 0) {
                    console.log('File changed, reloading...');
                    location.reload();
                } else if (lastCheck === 0) {
                    lastCheck = obj.lastChange;
                }
            } catch(e) {
                console.log('Error:', e.message);
            }
        }
    };
    xhr.send();
}, 1000);
