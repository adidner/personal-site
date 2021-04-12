import React from 'react';

interface SourceButtonProps{
    title: string;
    link: string;
}

export default function SourceButton(props: SourceButtonProps){
    return (
        <div className="button-link">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
            </a>
        </div>
    );
}