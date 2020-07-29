import React, { FC, useRef, FormEvent } from 'react';
import pdfform from "pdfform.js/pdfform"

import { IForm } from '../../types'
import Field from '../Field';
import addressForm from '../../assets/address.pdf'
import personalInfoForm from '../../assets/personal_info.pdf'

const Form: FC<IForm> = ({ name, fields }) =>  { 
    const formEl = useRef() as React.MutableRefObject<HTMLFormElement>; // lol

    const pdfTemplate = name === 'Personal Info' ? personalInfoForm : addressForm;
    const fileName = name.split(' ').join('_').toLowerCase();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); 

        const formInputs = Array.from(formEl.current.elements) as HTMLFormElement[]
        const formValues = formInputs.reduce((acc, input) => { 
            if (!input.name) return acc; // button (this is a stopgap)
            return {...acc, [input.name]: [input.value]}
        }, {})

        const xhr = new XMLHttpRequest();
        xhr.open('GET', pdfTemplate, true); 
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
			if (this.status === 200) {
                try {
                    const completedForm = pdfform().transform(this.response, formValues);
                    let blob = new Blob([completedForm], {type: 'application/pdf'});
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = `${fileName}.pdf`;
                    link.click();
                    
                } catch (err) {
                    console.log(err)
                }
			} else {
				console.log('error:', this.status);
			}
        };
        xhr.send();

    }
    return (
        <form ref={formEl} name={name} onSubmit={handleSubmit}>
            <h4>{name}</h4>
            {fields.map(field => (
                <div key={`field-${field.id}`}>
                    <Field id={field.id} name={field.name} type={field.type} />
                </div>)
            )}
            <button type="submit">submit / save pdf</button>
        </form>
    )
}

export default Form
