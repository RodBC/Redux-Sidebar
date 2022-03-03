import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Video } from './Video';
import { Provider } from 'react-redux';
import { store } from './Store';

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
