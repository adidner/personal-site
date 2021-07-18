import React from 'react';

interface SourceButtonProps{
    title: string;
    link: string;
}

export default function SourceButton(props: SourceButtonProps){
    //This could probably be re-designed at some point to be fancier (like adding tags around things like on adams site) or a fancy animation on hover, or a github icon or something
    return (
        <div className="button-link">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
            </a>
        </div>
    );
}