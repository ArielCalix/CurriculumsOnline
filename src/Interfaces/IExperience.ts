export interface IExperience {
    title: string;
    information: IExperienceInformation[];
}

export interface IExperienceInformation {
    date: string;
    place: string;
    role: string;
    description: string[];
}