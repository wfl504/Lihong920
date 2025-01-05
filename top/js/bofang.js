// // JavaScript部分
// const overlays = document.querySelectorAll('.video-overlay');
// const videos = document.querySelectorAll('video');
// overlays.forEach((overlay, index) => {
//     overlay.addEventListener('click', function () {
//         const videoId = overlay.getAttribute('data-video-id');
//         const video = document.getElementById(videoId);
//         if (video.paused) {
//             video.play();
//         } else {
//             video.pause();
//         }
//     });
// });

// videos.forEach((video) => {
//     video.addEventListener('play', function () {
//         const overlay = document.querySelector(`[data-video-id="${video.id}"]`);
//         overlay.style.display = 'none';
//     });
//     video.addEventListener('ended', function () {
//         const overlay = document.querySelector(`[data-video-id="${video.id}"]`);
//         overlay.style.display = 'flex';
//     });
// });


function audio () {
    var audio = document.getElementById('audio');
    audio.play();
}

function audiopause () {
    var audio = document.getElementById('audio');
    audio.pause();
}



const overlays = document.querySelectorAll('.video-overlay');
const videos = document.querySelectorAll('video');
let currentPlayingVideo = null; // 用于跟踪当前播放的视频

overlays.forEach((overlay, index) => {
    overlay.addEventListener('click', function () {
        const videoId = overlay.getAttribute('data-video-id');
        const video = document.getElementById(videoId);
        // const videoClass = overlay.getAttribute('.icon-meun');
        // const videoelse = document.getElementsByClassName(videoClass);
        // 如果当前有视频正在播放，则先停止播放，并显示其覆盖层图片
        if (currentPlayingVideo && currentPlayingVideo !== video) {
            currentPlayingVideo.pause();
            currentPlayingVideo.currentTime = 0;
            const currentOverlay = document.querySelector(`[data-video-id="${currentPlayingVideo.id}"]`);
            currentOverlay.style.display = 'flex';
        }
        // 播放或暂停当前视频
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        // 更新当前播放的视频引用
        currentPlayingVideo = video;
    });
});

videos.forEach((video) => {
    video.addEventListener('play', function () {
        const overlay = document.querySelector(`[data-video-id="${video.id}"]`);
        overlay.style.display = 'none';
    });
    video.addEventListener('ended', function () {
        const overlay = document.querySelector(`[data-video-id="${video.id}"]`);
        overlay.style.display = 'flex';
        currentPlayingVideo.currentTime = 0;
    });
});


if (forEach.video.pause() || forEach.currentPlayingVideo.pause() || (forEach.currentPlayingVideo.pause() && forEach.currentPlayingVideo.currentTime === 0)) {
    audio();
    // audiopause();
}else {
    // audio();
    audiopause();
}

