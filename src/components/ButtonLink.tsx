import React from 'react';

interface ButtonLinkProps{
    title: string;
    link: string;
}

export default function ButtonLink(props: ButtonLinkProps){
    return (
        <div className="button-link">
            <a href={props.link} >
                {props.title}
            </a>
        </div>
    );
}