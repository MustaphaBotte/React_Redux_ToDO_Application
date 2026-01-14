import './App.css';
import { Provider } from 'react-redux';
import { store } from './ToDos/store';
import ToDoList from './ToDos/ToDoList';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import AddToDoFrm from './ToDos/AddToDoFrm';


function App() {

  return (
   <Provider store={store}>
       <BrowserRouter>
           <Routes>
                 <Route path='/' element={<ToDoList></ToDoList>}></Route>
                 <Route path='/AddToDo' element={<AddToDoFrm></AddToDoFrm>}></Route>
           </Routes>
       </BrowserRouter>
   </Provider>
  );
}

export default App;
