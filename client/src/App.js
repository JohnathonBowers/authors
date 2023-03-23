import { Route, Routes } from "react-router-dom";
import AuthorList from "./components/AuthorList";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthorList />} />
      </Routes>
    </div>
  );
}

export default App;
