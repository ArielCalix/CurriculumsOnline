export interface IAboutPage{
    resume: IResume;
    basicInformation: IBasicInformation;
}

export interface IResume{
    title: string;
    description: string[];
    link: ILink;
}

export interface ILink{
    url: string;
    text: string;
}

export interface IBasicInformation{
    title: string;
    items: IItems[]
}

export interface IItems {
    title: string;
    content: string;
}