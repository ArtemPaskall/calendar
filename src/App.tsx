import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { MoviesList } from './Components/MoviesList/MoviesList';
import { CalendarComponent } from './Components/Calendar/Calendar';

const App = () => {
  return (
    <>
      <div className="App">
        <h1 className="App__title">Super film</h1>
        <Routes>
          <Route path="/" element={<CalendarComponent />} />
          <Route path="/movies-list/:date" element={<MoviesList />} />
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
