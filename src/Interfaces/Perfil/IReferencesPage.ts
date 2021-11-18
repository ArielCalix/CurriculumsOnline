export interface IReferencesPage {
    title: string;
    references: IReferences[]
}

export interface IReferences {
    id: number;
    photo: string;
    name: string;
    role: string;
    description: string[];
}