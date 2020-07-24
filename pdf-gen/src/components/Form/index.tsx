import React, { FC } from 'react';
import { IForm } from '../../types'

import Field from '../Field';

const Form: FC<IForm> = ({ id, name, fields }) => (
    <form name={name}>
        {fields.map(field => (
            <div key={`field-${field.id}`}>
                <Field id={field.id} name={field.name} type={field.type} />
            </div>)
        )}
    </form>
)

export default Form