import React from 'react'
import { TField } from '../types';

type TFieldComp = {
  params: TField;
  index: number;
}

export function FieldComp({params, index}: TFieldComp) {

  const comp = {
    text: <input type='text' className='w-full text-[16px] p-2' {...params} />,
    number: <input type='number' className='w-full text-[16px] p-2' {...params} />,
    dropdown: (
      <select name={params.name} className='w-full'>
        {params.selection?.map(select => (
          <option key={select.value} value={select.value}>{select.label}</option>
        ))}
      </select>
    ) 
  }
  return (
    <div key={index} className='my-2 w-full overflow-hidden'>
      {comp[params.fieldtype]}
    </div>
  );
}
