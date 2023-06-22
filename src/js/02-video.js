import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

const actualTimeOnPlayer = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(actualTimeOnPlayer).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

const onPlay = (e) =>  {
    const currentTime = e.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
};

const throttled = throttle(onPlay, 1000);

player.on('timeupdate', throttled);