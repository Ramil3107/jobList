import { Route, Routes } from "react-router-dom";
import { DetailedJob } from "./pages/DetailedJob/DetailedJob";
import { JobList } from "./pages/JobList/JobList";


function App() {
  return (
   <Routes>
    <Route path="/" element={<JobList />}/>
    <Route path="job-details" element={<DetailedJob />}/>
   </Routes>
  );
}

export default App;
