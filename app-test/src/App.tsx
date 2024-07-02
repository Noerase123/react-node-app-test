import { useState } from 'react';
import './App.css';
import { CustomForm } from './components/CustomForm';
import { TForm } from './types';
import { FormContext } from './context';

function App() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    contactNumber: 0,
    gender: ""
  });
  
  const form: TForm = {
    fields: [
      {
        fieldtype: 'text',
        name: "email",
        placeholder: "Email here"
      },
      {
        fieldtype: 'text',
        name: "password",
        type: 'password',
        placeholder: "Password here"
      },
      {
        fieldtype: 'number',
        name: "contactNumber",
        placeholder: "Contact number here"
      },
      {
        fieldtype: 'dropdown',
        name: "gender",
        value: "Gender",
        selection: [
          {
            value: "male",
            label: "Male"
          },
          {
            value: "female",
            label: "Female"
          },
        ]
      },
    ],
  }

  return (
    <FormContext.Provider value={{ fields, setFields }}>
      <div className="App-header">
        <CustomForm data={form}/>
      </div>
    </FormContext.Provider>
  );
}

export default App;
