"use client"

import ContactCard from "./perceptions";
import EmailModal from "./email";
import { useState } from "react";

const Contact = () => {

    const [contactMe, setContactMe] = useState(false);

    const handleOpenEmailModal = () => setContactMe(true);

    const handleCloseEmailModal = () => setContactMe(false);

    return(
        <>
        {contactMe ?
        
        <>
            <EmailModal handleCloseEmailModal={handleCloseEmailModal} contactMe={contactMe} />
            <ContactCard handleOpenEmailModal={handleOpenEmailModal} />
        </>
            : 
            <ContactCard handleOpenEmailModal={handleOpenEmailModal} />
        }
    </>
    )
}

export default Contact