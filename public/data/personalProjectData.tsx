export interface personalProjectDataInterface {
    title: string;
    srcLink: string;
    description: string;
    techStack: string[];
    noteableThings: string;
    reflection: string;
    picturesSrc: string[];
    dateStarted: string;
    dateEnded: string;
    //TODO: look into adding a section on other helpful links or video src to be displayed here too or youtube embedded jazz where applicable
};


export const personalProjectData: personalProjectDataInterface[] = [
    {    
        title: "Personal Site",
        srcLink: "https://github.com/adidner/personal-site",
        description: "A personal website made to show my programming skills and personality",
        techStack: ["TypeScript", "React", "NextJS", "SCSS", "Netlify"],
        noteableThings: "",
        reflection: "It was a great decision to figure out hosting early on as I can constantly publish results. I also though it was a good decision to do a lot of design and archetecting before hand. I kind of wish I decided to work with a professional designer but oh well, that can be for version 2.0",
        picturesSrc: ["data/bookCovers/ready_player_one.jpg"],
        dateStarted: "2/7/21",
        dateEnded: "Present",
    },
    {    
        title: "Calorie Counter App",
        srcLink: "https://github.com/adidner/calorie-counter",
        description: "An app made to have an extremely simple system for counting calories (all apps I found had a lot of excess cruft)",
        techStack: ["TypeScript", "React Native", "Expo"],
        noteableThings: "Made for me to use personally for my own use cases",
        reflection: "Some things I definielty should have done spikes on / designed with more scalability in mind. Like the storing of past data over time and using classes in certain places",
        picturesSrc: ["data/bookCovers/ready_player_one.jpg"],
        dateStarted: "1/10/21",
        dateEnded: "Present",
    },
    {    
        title: "Custom Work Out App",
        srcLink: "https://github.com/adidner/simple-custom-workout",
        description: "An app to create customizable workout with breaks in between. (All the apps I've seen are unsatisfactory for my needs and desire for custom blocks with reps and exercise names, followed by timers in sequence)",
        techStack: ["TypeScript", "React Native", "Expo"],
        noteableThings: "Made for me to use personally for my own use cases",
        reflection: "Overall I've actually been pretty happy with this one so far, nothing comes to mind for things I've learned/messedup/would change",
        picturesSrc: ["data/bookCovers/ready_player_one.jpg"],
        dateStarted: "10/11/20",
        dateEnded: "Present",
    },
    {    
        title: "Spotify Cards",
        srcLink: "https://github.com/adidner/SpotifyCards",
        description: "A script I wrote to take a spotify playlist and make cute little 4x6 cards with the album art, artist name, song title and some styling. Cards are to be printed and put up as decoration as seen below.",
        techStack: ["Python"],
        noteableThings: "Inspired by this tiktok: ", //TODO: put tik tok here
        reflection: "",
        picturesSrc: ["data/personalProjectPics/SpotifyCards.jpg"], //TODO: add screenshots of final products
        dateStarted: "7/26/20",
        dateEnded: "10/4/20",
    },
    {    
        title: "Infinite Paths",
        srcLink: "https://github.com/adidner/TextAdventure",
        description: "A choose your own adventure book turned into an interactive app. Live now: https://play.google.com/store/apps/details?id=com.infinitepaths.imagination",
        techStack: ["Python", "JavaScript", "React Native", "Expo"],
        noteableThings: "I used python to do web scrapping to grab the content and process it, then React Native to create scafolding and a choice framework ",
        reflection: "Publishing is always a pain. Working with a freelance designer for app logo's was a cool experience. I wish I'd have reached out to other freelancer or professionals to know how to make my app look cleaner/professional. I also wish I'd spent some money on a bit of marketing to get the download to a more respectable number",
        picturesSrc: ["data/personalProjectPics/InfinitePaths.jpg"],//TODO: add app screenshots
        dateStarted: "3/29/20",
        dateEnded: "5/31/20",
    },
    {    
        title: "Youtube Playlist Creator",
        srcLink: "https://bitbucket.org/adidner/videocreator/src/master/",
        description: "An automated youtube video creation bot, the concept being it will take conent via API's and then automatically create videos and upload to youtube via their API",
        techStack: ["Python"],
        noteableThings: "Worked for the most part, video creation and youtube upload.",
        reflection: "Never really took the final step to make it super passive via a cron job or something similar. Lacked professional look and feel. Should have consulted designer/gotten professional logo rather than doing it myself but was a broke student at the time. Also youtubes auto upload API was updated pretty often and the overhead of adjusting my breaking code was super annoying",
        picturesSrc: ["data/personalProjectPics/YoutubePlaylistCreator.png"],
        dateStarted: "3/13/19",
        dateEnded: "5/27/19",
    },
    {    
        title: "Secrets and Assassins",
        srcLink: "https://bitbucket.org/adidner/s-a/src/master/",
        description: "An in person, role based tag game where the game setup is managed by the app and SMS messages",
        techStack: ["JavaScript", "React Native", "Expo"],
        noteableThings: "Proud that I published the app and got it to work as desired. Also proud that I got to play test with friends",
        reflection: "I think my general archetctural premis was flawed (sending SMS rather than owning/using a server), might consider designing from scratch again someday as a website. Also just general lack of experience made lots of things difficult but very good learning experiences",
        picturesSrc: ["data/personalProjectPics/SecretsAndAssasins.png"],
        dateStarted: "11/15/18",
        dateEnded: "1/24/19",
    },


];