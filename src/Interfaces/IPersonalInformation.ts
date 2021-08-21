export interface IPersonalInformation {
    nombre?: string;
    capabillities?: string;
    buttonHire?: string;
    buttonCv?: string;
    photo?: string;
    socialMedia: ISocialMedia[];
}

export interface ISocialMedia {
    socialName: string;
    icon: string;
    link: string;
}