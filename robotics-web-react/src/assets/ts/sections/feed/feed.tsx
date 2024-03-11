import React from "react";

interface FeedSectionProps {
    postUrl: string;
    postCaption: string;
    postUserUrl: string;
}

const FeedSection: React.FC<FeedSectionProps> = ({ postUrl, postCaption, postUserUrl }): React.JSX.Element => {
    return (
        <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
        
    )
}