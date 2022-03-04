// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Contact from './fourth Ass/Contact';
// import Header from './fourth Ass/Header';
// import Home from './fourth Ass/Home';
// import Student from './fourth Ass/Student';
// import PageNotFound from './fourth Ass/PageNotFound';
import Employee from './EmployeeDetails/Employee';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/student' element={<Student />} />
        </Routes>
      </Router> */}
    <Employee/>
    {/* <EmployeeForm/> */}
    </div>
  );
}

export default App;
