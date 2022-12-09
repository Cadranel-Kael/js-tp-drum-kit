document.documentElement.classList.add('js-enabled');

const keyDivs = document.getElementsByClassName('key');
const keyAudios = document.getElementsByTagName('audio');

function playAudio (key) {
    for (const keyAudio of keyAudios) {
        if(key === keyAudio.dataset.key) {
            keyAudio.currentTime = 0;
            keyAudio.play();
        }
    }
}

function animate(key, currentDiv) {
    currentDiv.classList.add('playing');
    document.body.classList.add(key);
    currentDiv.addEventListener('transitionend', (e) => {
        e.currentTarget.classList.remove('playing');
        document.body.classList.remove(key);
    })
}

window.addEventListener('keydown', (e) => {
    const key = e.key;
    playAudio(key);
    for (const keyDiv of keyDivs) {
        if(key === keyDiv.dataset.key) {
            animate(key, keyDiv);
        }
    }
})

for (const keyDiv of keyDivs) {
    keyDiv.addEventListener('click', (e) => {
        playAudio(e.currentTarget.dataset.key);
        animate(e.currentTarget.dataset.key, keyDiv);
    })
}

