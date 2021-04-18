import React, { ReactNode } from 'react';


//Takes a set of text and returns the same set of text but with any links made to actually be links

export default function linkify(targetText: string): ReactNode{
    let wordArray: string[] = targetText.split(" ");
    let componentString: string = "";

    for(let current of wordArray){
        if(current.includes("http")){
            componentString += ("<a href={" + current + "}>" + current + "</a> ");
        }
        else{
            componentString += current + " ";
        }
    }

    return (
        <div dangerouslySetInnerHTML={{__html: componentString}}/>
        // <div>
        //     words <a href={"https://linkedwords"}>linkwords</a> morewords
        // </div>
    );
}