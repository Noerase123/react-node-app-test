import React, { FormEvent, useContext } from 'react'
import { TCustomTable } from '../types';
import { FieldComp } from './FieldComp';
import { FormContext } from '../context';

export function CustomForm({ data }: TCustomTable) {

  const { setFields }: any = useContext(FormContext);

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const formData = new FormData(e?.currentTarget);
    setFields({
      email: formData.get('email'),
      password: formData.get('password'),
      contactNumber: formData.get('contactNumber'),
      gender: formData.get('gender'),
    });
  }

  return (
    <form encType='multipart/form-data' id='custom-form' className='w-full' onSubmit={handleSubmit}>
      {data.fields.map((field, index) => FieldComp({
        params: field,
        index
      }))}
      <button id="submit-form" type='submit' onClick={() => handleSubmit()} className='bg-white text-[16px] p-2 rounded-full w-full'>
        Submit
      </button>
    </form>
  )
}
