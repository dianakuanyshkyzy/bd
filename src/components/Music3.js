import { useEffect, useRef } from 'react';

const Music3 = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            // Ensure autoplay works after user interaction
            const playAudio = () => {
                audio.play().catch(err => {
                    console.log('Autoplay blocked:', err);
                });
            };
            window.addEventListener('click', playAudio, { once: true });

            return () => {
                window.removeEventListener('click', playAudio);
            };
        }
    }, []);
    return (
        <audio ref={audioRef} loop autoPlay style={{ display: 'none' }}>
            <source src="/audio/audio3.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default Music3;
