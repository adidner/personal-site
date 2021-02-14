import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link href="/">
                <a>Home</a>
            </Link></li>
            
            <li><Link href="/personalprojects">
                <a>Personal Projects</a>
            </Link></li>
            
            <li><Link href="/professionalprojects">
                <a>Professional Projects</a>
            </Link></li>

            <li><Link href="/selfimprovement">
                <a>Self Improvement</a>
            </Link></li>        

            <li>
                <DropDown
                    title={"Favorites"}
                    folderName={"favorites"}
                    subLinks={[
                        {link:"books", title: "Books"},{link: "movies", title: "Movies"},
                        {link: "shows", title: "Shows"},{link:"songs", title: "Songs"},
                        {link: "videogames", title: "Video Games"}
                    ]}
                />
            </li>

            <li>
                <DropDown
                    title={"Hobbies"}
                    folderName={"hobbies"}
                    subLinks={[
                        {link: "coding", title: "Coding"},{link: "cooking", title: "Cooking"},
                        {link: "dance", title: "Dance"},{link: "dungeonsanddragons", title: "Dungeons and Dragons"},
                        {link: "exercise", title: "Exercise"},{link: "piano", title: "Piano"},{link: "reading", title: "Reading"},{link: "tv", title: "TV"}
                    ]}
                />
            </li>

            <li>
                <DropDown
                    title={"Interesting Asides"}
                    folderName={"interestingasides"}
                    subLinks={[
                        {link:"cute", title: "Cute"},{link: "funfacts", title: "Fun Facts"},
                        {link: "lessons", title: "Lessons I've Learned"},
                        {link: "memes", title: "Best Memes"},{link: "tiktoks", title: "Best TikToks"}
                    ]}
                />
            </li>

        </ul>
    </div>
  )
}

interface subLinkObj {
    title: string;
    link: string;
}

interface DropDownProps {
    title: string;
    folderName: string;
    subLinks: subLinkObj[];
}

function DropDown(props: DropDownProps){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <div>
                {props.title}
            </div>

            <ul>
                {props.subLinks.map((current) => {
                    return (
                        <li><Link href={"/" + props.folderName + "/" + current.link}>
                            <a>{current.title}</a>
                        </Link></li>
                    );
                })}

            </ul>
        </div>
    );
}

export default Navbar;