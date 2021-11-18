import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IContactPage, IForm, IFormElement } from "../../Interfaces/Perfil/IContactPage";
const formData: IContactPage = {
    title: 'Contactame',
    image: 'images/staticmap.png',
    contactInfo: [
        { title: 'Dirección', text: 'Col. Nueva Esperanza, Danlí, El Paraíso' },
        { title: 'Teléfono', text: '(504) 9767-0648' },
        { title: 'Correo', text: 'acalixvasquez@gmail.com' },
    ],
    formInfo: {
        title: 'Pongamonos en contacto para un café',
        buttonName: 'Enviar',
        formElements: [
            {
                id: 'name',
                type: 'text',
                name: 'name',
                placeHolder: 'Nombre',
                icon: 'user-circle',
                label: {
                    htmlName: 'name',
                    text: 'Nombre completo'
                }
            },
            {
                id: 'subject',
                type: 'text',
                name: 'subject',
                placeHolder: 'Asunto',
                icon: 'file-text',
                label: {
                    htmlName: 'asunto',
                    text: 'Asunto'
                }
            },
            {
                id: 'email',
                type: 'email',
                name: 'email',
                placeHolder: 'Correo',
                icon: 'envelope',
                label: {
                    htmlName: 'email',
                    text: 'Correo Electrónico'
                }
            },
            {
                id: 'message',
                type: 'message',
                name: 'message',
                label: {
                    htmlName: 'message',
                    text: 'Mensaje'
                }
            }
        ]
    }
}

export function ContactPage() {
    return <div className="section" id="contact">
        <div className="cc-contact-information" style={{ backgroundImage: `url(${formData.image})` }}>
            <div className="container">
                <div className="cc-contact">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card mb-0" data-data-aos="zoom-in">
                                <div className="h4 text-center title">{formData.title}</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            {
                                                <ContactForm
                                                    title={formData.formInfo.title}
                                                    buttonName={formData.formInfo.buttonName}
                                                    formElements={formData.formInfo.formElements} />
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            {
                                                formData.contactInfo?.map(info => {
                                                    return <React.Fragment key={info.title}><p className="mb-0"><strong>{info.title}</strong></p>
                                                        <p className="pb-2">{info.text}</p>
                                                    </React.Fragment>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
function ContactForm(formEl: IForm) {
    const [state, handleSubmit] = useForm("xayalllz");
    if (state.succeeded) {
        return <p>Gracias por ponerte en contacto</p>;
    }
    return (<form onSubmit={handleSubmit}>
        <div className="p pb-3"><strong>{formEl.title}</strong></div>
        <div className="row mb-3">
            <div className="col">
                {
                    formEl.formElements.map(el => {
                        return <FormElement key={el.id}
                            id={el.id} type={el.type} name={el.name} label={el.label} placeHolder={el.placeHolder} errors={state.errors} icon={el.icon} />
                    })
                }
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" type="submit" disabled={state.submitting}>{formEl.buttonName}</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
}

function FormElement(formEl: IFormElement) {
    return <React.Fragment>
        {
            (formEl.label) ?
                <label htmlFor={formEl.label?.htmlName}>
                    {formEl.label?.text}
                </label> :
                <></>
        }

        {
            (formEl.id === 'message') ?
                <textarea className="form-control"
                    placeholder={formEl.placeHolder}
                    id={formEl.id}
                    name={formEl.name} /> :
                <div className="input-group">
                    {(formEl.icon) ? <span className="input-group-addon">
                        <i className={`fa fa-${formEl.icon}`}></i>
                    </span> : <></>}
                    <input className='form-control'
                        id={formEl.id}
                        type={formEl.type}
                        name={formEl.name}
                        placeholder={formEl.placeHolder} />
                </div>
        }
        {
            (formEl.errors) ?
                <ValidationError
                    prefix={formEl.name}
                    field={formEl.id}
                    errors={formEl.errors} /> :
                <></>
        }
    </React.Fragment >
}