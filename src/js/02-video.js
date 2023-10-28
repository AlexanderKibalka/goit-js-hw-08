import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import throttle from 'lodash.throttle';
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

player.setCurrentTime(savedTime);

player.on('timeupdate', throttle(getCurrentTime, 1000));
