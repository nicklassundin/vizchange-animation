export class Audio {
    constructor(id) {
        this.audio = document.getElementById(id);
        this.audio.volume = 0;
        this.audio.loop = true;
        this.fadeValue = 0.05;
        let audio = this.audio;
        window.addEventListener('click', () => {
            audio.play()
        })
        //function that fades in audio when page is opened
    }
    set 'volume'(value) {
        this.audio.volume = value;
    }
    get 'volume'() {
        return this.audio.volume;
    }
    // function that fades in audio when element enterse viewport and fade out when it leaves
    fadeAudio(start, end = start)  {

        let audio = this.audio;
        let fadeValue = this.fadeValue;
        document.addEventListener( 'scroll', () => {
            let startElement = document.getElementById(start);
            let startElementPosition = startElement.getBoundingClientRect();
            let elementTop = startElementPosition.top;

            let endElement = document.getElementById(end);
            let endElementPosition = endElement.getBoundingClientRect();
            let elementBottom = endElementPosition.bottom;

            let viewportHeight = window.innerHeight;
            let fadeAudio = setInterval(function () {
                if (elementBottom > 0 && elementTop < viewportHeight) {
                    if (audio.volume + fadeValue < .5) {
                        audio.volume = audio.volume + fadeValue;
                    } else {
                        clearInterval(fadeAudio);
                    }
                } else {
                    if (audio.volume > fadeValue) {
                        audio.volume = audio.volume - fadeValue;
                    } else {
                        clearInterval(fadeAudio);
                    }
                }
            }, 200);
        })
    }
    fadeOutAudio() {
        let audio = this.audio;
        let fadeValue = this.fadeValue;
        let fadeAudio = setInterval(function () {
            if (audio.volume > fadeValue) {
                audio.volume = audio.volume - fadeValue;
            } else {
                clearInterval(fadeAudio);
            }
        }, 200);
    }
    fadeInAudio() {
        let audio = this.audio;
        let fadeValue = this.fadeValue;
        console.log(audio)
        let fadeAudio = setInterval(function () {
            if (audio.volume + fadeValue < .5) {
                audio.volume = audio.volume + fadeValue;
            } else {
                clearInterval(fadeAudio);
            }
        }, 200);
    }
}