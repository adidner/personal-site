export interface gameDataInterface {
    title: string;
    publisher: string;
    imagePath: string;
    rating: number; //rating out of 10
    review: string;
    releaseDate: string;
};

export const gameData: gameDataInterface[] = [
    {
        title: "Overwatch",
        publisher: "Blizzard Entertainment",
        imagePath: "overwatch.jfif",
        rating: 10,
        review: "Amazing idea, great mechanics and visuals, great replayability through trying new heros, lots of depth via various hero interactions and balance updates/hero releases",
        releaseDate: "2015",
    },
    {
        title: "Valorant",
        publisher: "Riot Games",
        imagePath: "valorant.jpg",
        rating: 8,
        review: "I mostly play with friends, a cool and unique concept, I just prefer overwatch because abilites are fun and my aim is not so great",
        releaseDate: "",
    },
    {
        title: "Hearthstone",
        publisher: "Blizzard Entertainment",
        imagePath: "hearthstone.jfif",
        rating: 9,
        review: "A concept they've really pushed in terms of development over the years, new game modes, building deck on the fly modes, adventures, auto chess, plus really awesome card design, the montitization style is a bit over the edge though",
        releaseDate: "2014",
    },
    {
        title: "Starcraft II",
        publisher: "Blizzard Entertainment",
        imagePath: "startcraft_2.jpg",
        rating: 8,
        review: "Sweet idea, cool lore and differences in design between races, lots of depth and nuance to game play, personally just not to into the RTS style and what it requires you to do to get better",
        releaseDate: "2010",
    },
    {
        title: "Darkest Dungeon",
        publisher: "Red Hook Studios",
        imagePath: "darkest_dungeon.jpg",
        rating: 9,
        review: "Dark and gritty, dramatic and nuanced, reminds me of old fashion rougelikes but a bit more punishing and forces you to make trade offs for your characters, just a tad depressing too though",
        releaseDate: "2015",
    },
    {
        title: "Minecraft",
        publisher: "Mojang Studios",
        imagePath: "minecraft.jfif",
        rating: 10,
        review: "Playing with friends, exploration, exploits, infinite value farms, building cool things, keeping turtules as pets, whats not to love",
        releaseDate: "2011",
    },
    {
        title: "Jackbox (7)",
        publisher: "Jackbox Games",
        imagePath: "jackbox.jfif",
        rating: 10,
        review: "Great party games to play with friends that make you laugh and reveal random inside jokes and childish ideas",
        releaseDate: "2020",
    },
    {
        title: "Ragnarok",
        publisher: "Norsehelm Productions",
        imagePath: "ragnarok.png",
        rating: 10,
        review: "Nostalga from my childhood and father, an original rougelike with a lot of depth and knowledge and cool items/abilities, not a lot of replayability value because as far as we know there is just one way to win but I great time none the less",
        releaseDate: "",
    },
    {
        title: "Skyrim",
        publisher: "Bethesda Games",
        imagePath: "skyrim.png",
        rating: 7,
        review: "Highly modable, cool abilities and gameplay, but feels a bit fetch questy (ie, go here and do this, okay now, go here and do this, repeat forever)",
        releaseDate: "2011",
    },
    

];