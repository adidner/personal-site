 export interface experienceJobInterface {
     roleTitle: string;
     companyTitle: string;
     startDate: string;
     endDate: string;
     Location: string;
     experienceBody: experienceBodyInterface[];
     //extra to add stuff and put in a conditionally expandable show more kind of tab/section
     bestPart: string;
     worstPart: string;
     reflection: string;
     companySize: string;
 }

 export interface experienceBodyInterface {
     IntroPrompt: string;
     bulletList: string[];
 }