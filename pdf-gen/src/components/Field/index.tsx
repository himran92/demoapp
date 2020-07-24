import React, { FC } from 'react';
import { IField } from '../../types';

const getInputType = (type: string) => {
     if (type === 'number') {
         return 'number'
     } else return 'text'
}

const Field: FC<IField> = ({ id, name, type }) => (<input name={name} type={getInputType(type)} />)

export default Field