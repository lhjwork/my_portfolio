import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Main from './pages/Main';
import Wsiwyg from './pages/WYSIWYG';

function App() {
    return (
        <Router>
            <Routes>
                <>
                    <Route path='*' element={<Main />} />
                    <Route path='/wysiwyg' element={<Wsiwyg />} />
                </>
            </Routes>
        </Router>
    );
}

export default App;
