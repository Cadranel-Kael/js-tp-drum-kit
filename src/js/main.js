document.documentElement.classList.add('js-enabled');
app = {
    keyDivs: document.getElementsByClassName('key'),
    keyAudios: document.getElementsByTagName('audio'),
    playAudio: function(key) {
        for (const keyAudio of this.keyAudios) {
            if(key === keyAudio.dataset.key) {
                keyAudio.currentTime = 0;
                keyAudio.play();
            }
        }
    },
    animate: function(key, currentDiv) {
        currentDiv.classList.add('playing');
        document.body.classList.add(key);
        currentDiv.addEventListener('transitionend', (e) => {
            e.currentTarget.classList.remove('playing');
            document.body.classList.remove(key);
        })
    },
    init: function () {
        window.addEventListener('keydown', (e) => {
            const key = e.key;
            this.playAudio(key);
            for (const keyDiv of this.keyDivs) {
                if(key === keyDiv.dataset.key) {
                    this.animate(key, keyDiv);
                }
            }
        })

        for (const keyDiv of keyDivs) {
            keyDiv.addEventListener('click', (e) => {
                this.playAudio(e.currentTarget.dataset.key);
                this.animate(e.currentTarget.dataset.key, keyDiv);
            })
        }
    }
}

app.init();
