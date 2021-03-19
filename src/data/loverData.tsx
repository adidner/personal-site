export interface loverDataInterface {
    nameFirst: string;
    nameLast: string;
    pictures: pictureWithDescription[];
    songs: string[]; //as youtube links
    dateingLength: string; //rating out of 10
    era: string;
};

export interface pictureWithDescription {
    path: string;
    description: string;
}

export const showData: loverDataInterface[] = [
    {
        nameFirst: "Jessica",
        nameLast: "King",
        pictures: [],
        songs: [
            "https://www.youtube.com/watch?v=dsJPrBdwQRg",
            "https://www.youtube.com/watch?v=3-7R8OwjjYQ",
            "https://www.youtube.com/watch?v=jLeklyUsDVI",
            "https://www.youtube.com/watch?v=a-VqEnvDKbw"
        ],
        dateingLength: "2 months",
        era: "Post grad at Alion in Hanover Maryland, 2020 december ->"
    },
    {
        nameFirst: "Lilli",
        nameLast: "Shriver",
        pictures: [
        ],
        songs: [
            "https://www.youtube.com/watch?v=d4lSke63WMI",
            "https://www.youtube.com/watch?v=kFMP26qjoX4",
            "https://www.youtube.com/watch?v=A2-aUNmYNLM",
            "https://www.youtube.com/watch?v=FaQHyHwFgeg",
            "https://www.youtube.com/watch?v=GbluEc_sgeY",
            "https://www.youtube.com/watch?v=S_w9RTYlsT4",
            "https://www.youtube.com/watch?v=PbSZhGONRBg",
            "https://www.youtube.com/watch?v=u99AklNGpyc",
            "https://www.youtube.com/watch?v=qYoTkgvUc7c",
            "https://www.youtube.com/watch?v=r6SCzCs1PuA"

        ],
        dateingLength: "4 months",
        era: "Senior year of college Corvallis 202 Oregon0 January ->"
    },
    {
        nameFirst: "Alison",
        nameLast: "Jones",
        pictures: [],
        songs: [
            "https://www.youtube.com/watch?v=eYDI8b5Nn5s",
            "https://www.youtube.com/watch?v=qCTMq7xvdXU",
            "https://www.youtube.com/watch?v=UzsXEgGVdhY",
            "https://www.youtube.com/watch?v=JybV1mL6EMA",
            "https://www.youtube.com/watch?v=aO7sxBP3kOI",
            "https://www.youtube.com/watch?v=ZK3HWSNNSiA",
        ],
        dateingLength: "1 year",
        era: "Junior/Senior year of college Corvallis Oregon 2018 - 2019"
    },
    {
        nameFirst: "Natasha",
        nameLast: "Bolshikof",
        pictures: [],
        songs: [
            "https://www.youtube.com/watch?v=m7Bc3pLyij0",
            "https://www.youtube.com/watch?v=KfXvjxbRhZk",
            "https://www.youtube.com/watch?v=b6Zh-sD3Wg0",
            "https://www.youtube.com/watch?v=fIcEF_4hvGQ",
            "https://www.youtube.com/watch?v=QeUFmGLhI_s"

        ],
        dateingLength: "1.5 years",
        era: "Sophmore/Junior year of college, Corvallis Oregon 2017 - 2018"
    },
    {
        nameFirst: "Ashley",
        nameLast: "Boone",
        pictures: [],
        songs: [
            "https://www.youtube.com/watch?v=aNO6yd66PpA",
            "https://www.youtube.com/watch?v=XaKr98ktoxU",
            "https://www.youtube.com/watch?v=iX_TFkut1PM",
            "https://www.youtube.com/watch?v=7Xf-Lesrkuc",
            "https://www.youtube.com/watch?v=64xcfvAk0wc",
            "https://www.youtube.com/watch?v=kY27wmTZwyg",
            "https://www.youtube.com/watch?v=2SKEp-H0Eqs",
            "https://www.youtube.com/watch?v=s1tAYmMjLdY",
            "https://www.youtube.com/watch?v=Npjn82awAhE",
            "https://www.youtube.com/watch?v=33Uh8G37hqM",
            "https://www.youtube.com/watch?v=VCEsveSK5to",
            "https://www.youtube.com/watch?v=L4sa2HoXpsE",
            "https://www.youtube.com/watch?v=RfoqELZWcp8",
            "https://www.youtube.com/watch?v=DQ4r7HegRQw",
            "https://www.youtube.com/watch?v=TxFynNE7n04",
            "https://www.youtube.com/watch?v=Eg3IVWk_Gb0",
            "https://www.youtube.com/watch?v=LBaxde247Mw",
            "https://www.youtube.com/watch?v=lTcKU2yXV2k",
            "https://www.youtube.com/watch?v=54WRoguNKYc",
            "https://www.youtube.com/watch?v=SPUJIbXN0WY",
            "https://www.youtube.com/watch?v=TBXQu8ORnBQ",
            "https://www.youtube.com/watch?v=Z5-rdr0qhWk",
            "https://www.youtube.com/watch?v=aynCgnbbgbM",
            "https://www.youtube.com/watch?v=2SUwOgmvzK4",
            "https://www.youtube.com/watch?v=wnPiMyLf-Vw",
            "https://www.youtube.com/watch?v=eG2U2sjshTM",
            "https://www.youtube.com/watch?v=F7RbBB-lT5o",
            "https://www.youtube.com/watch?v=6JHu3b-pbh8",
            "https://www.youtube.com/watch?v=lp-EO5I60KA",
            "https://www.youtube.com/watch?v=re6vLJqVGQw",
            "https://www.youtube.com/watch?v=xLPGtQoRUbk",
            "https://www.youtube.com/watch?v=Qwm7crkV124",
            "https://www.youtube.com/watch?v=_51Su40bv7Q",
            "https://www.youtube.com/watch?v=QAo_Ycocl1E",
            "https://www.youtube.com/watch?v=50S9X7TlbUk",
            "https://www.youtube.com/watch?v=GbpnAGajyMc",
            "https://www.youtube.com/watch?v=a01QQZyl-_I",
            "https://www.youtube.com/watch?v=L-ip02FknUo",
            "https://www.youtube.com/watch?v=o5osPtE7kXI",
            "https://www.youtube.com/watch?v=LuN6gs0AJls",
            "https://www.youtube.com/watch?v=NnilaaFrza4",
            "https://www.youtube.com/watch?v=-CmadmM5cOk",
        ],
        dateingLength: "2 years",
        era: "Junior/Senior year of highschool Portland Oregon 2014 - 2016"
    },

];