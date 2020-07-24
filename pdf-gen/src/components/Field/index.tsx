import React, { FC } from 'react';
import { IField } from '../../types';

const getInputType = (type: string) => {
     if (type === 'number') return type 
     else return 'text'
}

const Field: FC<IField> = ({ id, name, type }) => (
    <label htmlFor={name}>{name}: 
        <input style={{ margin: 8 }} name={name} type={getInputType(type)} />
    </label>
)

export default Field