import { useState, useRef, useCallback } from 'react';
import { Play } from 'lucide-react';

function TsVideo({
                     url,
                     light = null,
                     width = "100%",
                     height = "400px",
                     controls = true,
                     playing = false,
                     onPlay = () => {},
                     onPause = () => {},
                     onEnded = () => {},
                     onReady = () => {},
                     className = "",
                     style = {}
                 }) {
    const [isLoaded, setIsLoaded] = useState(!light);
    const [isPlaying, setIsPlaying] = useState(playing);
    const iframeRef = useRef(null);

    // Extract video ID from YouTube URL
    const getYouTubeVideoId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(url);
    const thumbnailUrl = light || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handleThumbnailClick = useCallback(() => {
        setIsLoaded(true);
        setIsPlaying(true);
        onPlay();
        onReady();
    }, [onPlay, onReady]);

    // Thumbnail view (light mode)
    if (light && !isLoaded) {
        return (
            <div
                className={`relative cursor-pointer ${className}`}
                style={{ width, height, ...style }}
                onClick={handleThumbnailClick}
            >
                {/* Thumbnail Image */}
                <img
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                />

                {/* Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <Play
                            size={28}
                            className="text-gray-800 ml-1"
                            fill="currentColor"
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Video player view
    return (
        <div
            className={className}
            style={{ width, height, ...style }}
        >
            <iframe
                ref={iframeRef}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&controls=${controls ? 1 : 0}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => onReady()}
            />
        </div>
    );
}

export default TsVideo;