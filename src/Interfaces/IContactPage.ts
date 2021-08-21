export interface IContactPage {
    title?: string;
    image?: string;
    contactInfo?: IContactInfo[];
    formInfo: IForm;
}

export interface IForm{
    title: string;
    buttonName: string;
    formElements: IFormElement[];
}

export interface IFormElement {
    id: string;
    type: string;
    name: string;
    icon?: string;
    label?: ILabels;
    placeHolder?: string;
    errors?: ErrorPayload[];
}

export interface ILabels {
    htmlName: string;
    text: string;
}

export interface IContactInfo {
    title: string;
    text: string;
}

export interface ErrorPayload {
    field?: string;
    code: string | null;
    message: string;
}