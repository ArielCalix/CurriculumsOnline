import { ErrorPayload } from "@formspree/react/dist/types/src/useForm";
export interface IContactPage {
    title?: string;
    image?: string;
    contactInfo?: IContactInfo[];
    formInfo: IForm;
}

export interface IForm{
    title: string;
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
