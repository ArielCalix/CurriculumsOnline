import React from "react";
import { IPersonalInformation } from "../../Interfaces/Perfil/IPersonalInformation";

export function Footer(props: IPersonalInformation) {
    return <footer className="footer">
        <div className="container text-center">
            {
                props.socialMedia.map(social => {
                    return <a key={social.socialName+'foo'} className="cc-facebook btn btn-link" href={`${social.link}`}>
                        <i className={`fa fa-${social.icon} fa-2x`} data-aria-hidden="true"></i>
                    </a>
                })
            }
        </div>
        <div className="h4 title text-center">{props.nombre}</div>
        <div className="text-center text-muted">
            <p>&copy; Creative CV. All rights reserved.<br />Design -
                <a className="credit" href="https://templateflip.com">TemplateFlip</a>
            </p>
        </div>
    </footer>
}