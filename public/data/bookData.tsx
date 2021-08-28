export interface ReadInterface {
    title: string;
    author: string;
    imagePath: string;
    rating: number; //rating out of 10
    review: string;
    publishDate?: string;
};



export const learningReadBookData: ReadInterface[] = [
    {
        title: "The Subtle Art of Not Giving a F*ck",
        imagePath: "/public/data/bookCovers/the_subtle_art_of_not_giving_a_fuck.png",
        author: "Mark Manson",
        rating: 10,
        review: "Some really cool ideas and interesting takes on society, life, media and habits",
        publishDate: "2016",
    },
    {
        title: "Come As You Are",
        imagePath: "/public/data/bookCovers/come_as_you_are.jpg",
        author: "Emily Nagoski",
        rating: 10,
        review: "Different ways to think about sex, with amazing insight",
    },
    {
        title: "How to Invent Everything",
        imagePath: "/public/data/bookCovers/how_to_invent_everything.jpg",
        author: "Ryan North",
        rating: 9,
        review: "Rebuilding civilization from scratch with all our knowledge, lots of interesting science, history and invention",
    },
    {
        title: "Declutter Your Mind",
        imagePath: "/public/data/bookCovers/declutter_your_mind.jpg",
        author: "S.J. Scott & Barrie Davenport",
        rating: 7,
        review: "Kinda generic / obvious but had a few standout point. Like forgiving yourself for past mistakes with the attitude that you were doing the best you could with what you had at the time",
    },
    {
        title: "Getting to Yes",
        imagePath: "/public/data/bookCovers/getting_to_yes.png",
        author: "Roger Fisher & William Urgy",
        rating: 9,
        review: "A bit thick but revolutionary ideas with regards to negotiation with enhancing examples",
    },
    {
        title: "Tax Free Wealth",
        imagePath: "/public/data/bookCovers/tax_free_wealth.jpg",
        author: "Tom Wheelwright",
        rating: 7,
        review: "A bit thick but good and important ideas",
    },
    {
        title: "The 4 Hour Work Week",
        imagePath: "/public/data/bookCovers/the_4_hour_work_week.jpg",
        author: "Tim Ferris",
        rating: 10,
        review: "Revolutionary concepts with regards to efficiency and value created for work",
    },
    {
        title: "Rich Dad Poor Dad",
        imagePath: "/public/data/bookCovers/rich_dad_poor_dad.jpg",
        author: "Robert Kiyosaki",
        rating: 9,
        review: "A classic that introcudes new ways to think about money",
    },
    {
        title: "The 5 Love Languages",
        imagePath: "/public/data/bookCovers/the_5_love_languages.jpg",
        author: "Gary Chapman",
        rating: 6,
        review: "A few examples were useful but mostly the core concept from the web is enough",
    },
    {
        title: "10% Happier",
        imagePath: "/public/data/bookCovers/10%_happier.jpg",
        author: "Dan Harris",
        rating: 9,
        review: "Kinda slow at the beginning as he's just explaining his life story. Some very good take aways though and the writing style is generally pretty good. 1) Take some take to conciously be more aware of your sense and emotions (look at nature, feel how soft your cloths are on your skin). 2) Meditate as a way to practice focus, try to just focus on your breath, when you get distracted realize this and gently go back to focus on your breath. 3) Respond don't react. When you find yourself feeling a way, identify the emtions, notice how they're impacting your body (sweaty palms, heart racing, etc), look at why your feel those emotions, what can be done about the situation, then gently nudge away the feelings. Worry is useful until its not -> worry is good so long as its motiviating action that is productive like planning or counter measure but after that its pointless and you should stop",
    },
] 

export const fictionReadBookData: ReadInterface[] = [
    {
        title: "Mistborn",
        imagePath: "/public/data/bookCovers/mistborn.jpg",
        author: "Brandon Sanderson",
        rating: 10,
        review: "Wonderful world with an amazing and unique magic system that has very interesting weaknesses/tradeoffs",
    },
    {
        title: "Ready Player One",
        imagePath: "/public/data/bookCovers/ready_player_one.jpg",
        author: "Ernest Cline",
        rating: 9,
        review: "Solid story, with some nice twists and turns. References and easter eggs abound. I like the D&D ones and old game ones that my dad gave me context for.",
        publishDate: "2011",
    },
    {
        title: "Ex-Heroes",
        imagePath: "/public/data/bookCovers/ex_heroes.iffi",
        author: "Peter Clines",
        rating: 9.5,
        review: "Zombies and Super Heros. ",
        publishDate: "2010",
    },
    {
        title: "Hero",
        imagePath: "/public/data/bookCovers/hero.iffi",
        author: "Perry Moore",
        rating: 10,
        review: "Lovely vibe, morals and character development",
        publishDate: "2007",
    },
    {
        title: "Harry Potter",
        imagePath: "/public/data/bookCovers/harry_potter.iffi",
        author: "J. K. Rowling",
        rating: 8,
        review: "A bit darker than I remember but well described as oh, thats such a *insert main character here* thing to say/do",
        publishDate: "1997",
    },
    {
        title: "Michael Vey",
        imagePath: "/public/data/bookCovers/michael_vey.iffi",
        author: "Richard Paul Evans",
        rating: 10,
        review: "Love the characters and the powers. Such Michael is such a real high schooler feeling character and I love the chemistry between him and Taylor.",
        publishDate: "2011",
    },
    {
        title: "Percy Jackson",
        imagePath: "/public/data/bookCovers/percy_jackson.iffi",
        author: "Rick Riordan",
        rating: 10,
        review: "Tantilizing story, super well crafted characters and well written worlds and action",
        publishDate: "2005",
    },
    {
        title: "Enders Game",
        imagePath: "/public/data/bookCovers/enders_game.iffi",
        author: "Orson Scott Card",
        rating: 9,
        review: "The brilliance of ender and the way the entire arc of him working for the lazer tag 0 gravity teams is awesome. Some much creativity with the formations, and fighting styles. A bit slow towards the end and not a huge fan of the whole depressing overworked kid vibe",
        publishDate: "1985",
    },
    {
        title: "Creatures of Light and Darkness",
        imagePath: "/public/data/bookCovers/creatures_of_light_and_darkness.iffi",
        author: "Roger Zelazny",
        rating: 9,
        review: "I remember liking it a lot although I don't remember it that well, some really creative and out there stuff",
        publishDate: "1969",
    },
    {
        title: "Perks of Being a Wall Flower",
        imagePath: "/public/data/bookCovers/perks_of_being_a_wall_flower.iffi",
        author: "Stephen Chbosky",
        rating: 9,
        review: "So much personality and understanding of how it feels to be in highschool",
        publishDate: "1999",
    },
    {
        title: "Temeraire",
        imagePath: "/public/data/bookCovers/temeraire.iffi",
        author: "Niome Novak",
        rating: 7,
        review: "Napolean era warfare but with dragons and a world war II kinda vibe with air forces",
        publishDate: "2006",
    },
    {
        title: "Rangers Apprentice",
        imagePath: "/public/data/bookCovers/rangers_apprentice.iffi",
        author: "John Flanagan",
        rating: 9,
        review: "Fantasy/D&D vibes to the max",
        publishDate: "2004",
    },
    {
        title: "Graceling",
        imagePath: "/public/data/bookCovers/graceling.iffi",
        author: "Kristin Cashore",
        rating: 10,
        review: "Fantasy/D&D vibes with super skills/super power. A bit slow towards the end",
        publishDate: "2008",
    },
    {
        title: "Old Mans War",
        imagePath: "/public/data/bookCovers/old_mans_war.iffi",
        author: "John Scalzi",
        rating: 10,
        review: "Sci-fi where the universe is a lot bigger and more intimidating than you'd think",
        publishDate: "2005",
    },
    {
        title: "Midnight at the well of Souls",
        imagePath: "/public/data/bookCovers/well_of_souls.iffi",
        author: "Jack L Chalker",
        rating: 10,
        review: "Intergalactic travel, a variety of species, reincarnation and an experimental world at the center of it all",
        publishDate: "1977",
    },
    {
        title: "A Night in the Lonesome October",
        imagePath: "/public/data/bookCovers/a_night_in_the_lonesome_october.iffi",
        author: "Roger Zelazny",
        rating: 10,
        review: "Halloween, murder mystery vibes, well written and keeps you guessing until the very end",
        publishDate: "1993",
    },
    {
        title: "Eleanore and Park",
        imagePath: "/public/data/bookCovers/elenore_and_park.iffi",
        author: "Rainbow Rowell",
        rating: 7,
        review: "Another book that captures how it feels to be 17",
        publishDate: "2012",
    },
    {
        title: "City of Bones",
        imagePath: "/public/data/bookCovers/city_of_bones.iffi",
        author: "Cassandra Clare",
        rating: 9,
        review: "Dystopian ficition with teenagers and super powers before it was cool",
        publishDate: "2007",
    },
]; 

export interface ToReadInterface {
    title: string,
    author: string,
}


export const fictionToReadBookData: ToReadInterface[] = [
    {
        title: "Even the Darkest Stars",
        author: "Heather Fawcett",
    },
    {
        title: "Wren Hunt",
        author: "Mary Watson",
    },
    {
        title: "Shadow of the Fox",
        author: "Julie Kagawa",
    },
    {
        title: "Shadow and Bone",
        author: "Leigh Bardugo",
    },
    {
        title: "Inherits the Stars",
        author: "James P. Hogan",
    },
    {
        title: "American Gods",
        author: "Neil Gaiman",
    },
    {
        title: "Worm",
        author: "John McCrae",
    },
    {
        title: "Steel Heart",
        author: "Brandon Sanderson",
    },
    {
        title: "Bastard Gentleman",
        author: "Scott Lynch",
    },
    {
        title: "The Sharing Knife",
        author: "Lois McMaster Bujold",
    },
    {
        title: "Vicious",
        author: "V.E. Schwab",
    },
];

export const learningToReadBookData: ToReadInterface[] = [
    {
        title: 'Your money or your life',
        author: 'Viki Robin',
    },
    {
        title: 'Sum',
        author: 'David Eagleman',
    },
    {
        title: 'Talking to Strangers',
        author: 'Malcom Gladwell',
    },
    {
        title: 'The Rational Optimist',
        author: 'Matt Ridley',
    },
    {
        title: 'Freakanomics',
        author: 'Stephen Dubner & Steven Levitt',
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
    },
    {
        title: 'The Automatic Millionaire',
        author: 'David Bach',
    },
    {
        title: '7 Habits of Highly Effective People',
        author: 'Stephen Covey',
    },
    {
        title: 'Mans Search for Meaning',
        author: 'Victor Frankel',
    },
    {
        title: 'How To',
        author: 'Randall Munroe',
    },
    {
        title: 'Atlas Shrugged',
        author: 'Ayn Rand',
    },
    {
        title: 'Fountainhead',
        author: 'Ayn Rand',
    },
    {
        title: 'Wealth Attraction',
        author: 'Dan Kennedy',
    },
    {
        title: 'Mastery',
        author: 'Robert Greene',
    },
    {
        title: 'Influence: the Psychology of Persuasion',
        author: 'Robert Cialdini',
    },
    {
        title: 'Cashflow Quadrant',
        author: 'Robert Kiyosaki',
    },
    {
        title: 'Money Master the Game',
        author: 'Tony Robbins',
    },
    {
        title: 'Brotopia',
        author: 'Emily Chang',
    },
    {
        title: 'One up on Wall Street',
        author: 'John Rothchild & Peter Lynch',
    },
    {
        title: 'Rule #1',
        author: 'Phil Town',
    },
    {
        title: 'Attached',
        author: 'Amir Levine & Rachel S.F. Heller',
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
    },
    {
        title: 'The Little Book of Common Sense Investing',
        author: 'John Bogie',
    },
    {
        title: 'Unwritten Laws, the Unofficial Rules of Line',
        author: 'Hugh Rawson',
    },
    {
        title: 'Quiet',
        author: 'Susan Cain',
    },
    {
        title: 'Show Your Work',
        author: 'Austin Kleon',
    },
    {
        title: 'Anything You Want',
        author: 'Derek Sivers',
    },
    {
        title: 'How to Take Smart Notes',
        author: 'S. Ahrens',
    },
    {
        title: 'Philosophy of Software Design',
        author: 'John Ousterhout',
    },
    {
        title: 'Design of Everyday Things',
        author: 'Don Norman',
    },
    {
        title: 'The Mindset',
        author: 'Carol Dweck',
    },
];
