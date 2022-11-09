import { Route, Routes } from "react-router-dom";
import { DetailedJobPage } from "./pages/DetailedJobPage/DetailedJobPage";
import { JobListPage } from "./pages/JobListPage/JobListPage";


function App() {
  return (
   <Routes>
    <Route path="/" element={<JobListPage />}/>
    <Route path="job-details" element={<DetailedJobPage />}/>
   </Routes>
  );
}

export default App;
