import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Video } from './Video';
import { Provider } from 'react-redux';
import { store } from './Store';

const state = {
    modules: [
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
  }
  const {modules} = state;
  
function App() {
    return(
        <div>  
            <Provider store={store}>
                <Video/>
                <Sidebar />
            </Provider>
        </div>
)}


export default App;
