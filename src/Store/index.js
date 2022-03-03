import { createStore } from "@reduxjs/toolkit";

const reducer = () => {
    return(
    [
      {
        id: 1,
        title: 'iniciando com react',
        lessons: [
          { id:1, title: 'primeira aula'},
          { id:2, title: 'segunda aula' }
          ]
        },
        {
          id: 2,
          title: 'Aprendendo redux',
          lessons: [
            { id:1, title: 'terceira aula'},
            { id:2, title: 'quarta aula' }
          ]
        }        
    ]        
)}


export const store = createStore(reducer);
