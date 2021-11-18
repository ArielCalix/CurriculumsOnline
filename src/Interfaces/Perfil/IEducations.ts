export interface IEducations {
    title: string;
    education: IEducation[];
}

export interface IEducation {
    years: string;
    title: string;
    titleName: string;
    university: string;
    description: string[];
}