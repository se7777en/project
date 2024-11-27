'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();


    document.querySelectorAll('.video__item').forEach(video => {
        video.addEventListener('play', function() {
            document.querySelectorAll('.video__item').forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });

    
});