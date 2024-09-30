import { Routes, Route, BrowserRouter} from 'react-router-dom';

//pages
import BrowseProject from './pages/BrowseProject';
import SearchProject from './pages/SearchProject';
import AddProject from './pages/AddProject';
import DisplayProject from './pages/DisplayProject';
import UpdateProject from './pages/UpdateProject';
import ContactUs from './pages/ContactUs';
import ManageProject from './pages/ManageProject';

function App() {
  let id = "66f8d89e74c97113e7749cc8"
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchProject />} />
          <Route path="/browse" element={<BrowseProject />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/update-project" element={<UpdateProject />} />
          <Route path="/manage-project" element={<ManageProject id={id}/>} />
          <Route path="/project-details" element={<DisplayProject />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Add other routes here */}
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;