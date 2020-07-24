import React, { FC } from 'react';
import { IForm } from '../../types'

import Field from '../Field';

const Form: FC<IForm> = ({ name, fields }) => (
    <form name={name}>
        <h4>{name}</h4>
        {fields.map(field => (
            <div key={`field-${field.id}`}>
                <Field id={field.id} name={field.name} type={field.type} />
            </div>)
        )}
        <button type="button" onClick={() => console.log('todo: log values here')}>submit me / save pdf</button>
    </form>
)

export default Form