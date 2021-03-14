 export interface experienceJobInterface {
     roleTitle: string;
     companyTitle: string;
     startDate: string;
     endDate: string;
     location: string;
     experienceBody: experienceBodyInterface[];
     //extra to add stuff and put in a conditionally expandable show more kind of tab/section
     bestPart: string;
     worstPart: string;
     reflection: string;
     companySize: string;
     techStack: string[];

 }

 export interface experienceBodyInterface {
     introPrompt: string;
     bulletList: string[];
 }


 export const experienceJobdata: experienceJobInterface[] = [
    {
        roleTitle: "Associate Software Engineer",
        companyTitle: "Alion Science and Technology",
        startDate: "July 2020",
        endDate: "Present",
        location: "Hanover, MD",
        experienceBody: [
            {
                introPrompt: "",
                bulletList: [],
            },
            {
                introPrompt: "",
                bulletList: [],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "",
        worstPart: "",
        reflection: "",
        companySize: "",
        techStack: [],
    },
    {
        roleTitle: "Mobile Software Developer & Full Stack Software Developer",
        companyTitle: "Virtual Concierge Service",
        startDate: "September 2019",
        endDate: "July 2020",
        location: "Corvallis, OR",
        experienceBody: [
            {
                introPrompt: "",
                bulletList: [],
            },
            {
                introPrompt: "",
                bulletList: [],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "",
        worstPart: "",
        reflection: "",
        companySize: "",
        techStack: [],
    },
    {
        roleTitle: "Teaching Assistant (TA)",
        companyTitle: "Oregon State University",
        startDate: "September 2019",
        endDate: "December 2019",
        location: "Corvallis, OR",
        experienceBody: [
            {
                introPrompt: "",
                bulletList: [],
            },
            {
                introPrompt: "",
                bulletList: [],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "",
        worstPart: "",
        reflection: "",
        companySize: "",
        techStack: [],
    },
    {
        roleTitle: "Software Development Intern",
        companyTitle: "Pivotal Software, Inc.",
        startDate: "June 2019",
        endDate: "September 2019",
        location: "San Francisco, CA",
        experienceBody: [
            {
                introPrompt: "",
                bulletList: [],
            },
            {
                introPrompt: "",
                bulletList: [],
            }
        ],
        //extra to add stuff and put in a conditionally expandable show more kind of tab/section
        bestPart: "",
        worstPart: "",
        reflection: "",
        companySize: "",
        techStack: [],
    },
 ];