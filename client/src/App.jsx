
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register"
import Verify from "./Verify"
import PageNotFound from "./PageNotFound";
import Error from "./Error";
import Result from "./Result";
import Successful from "./Successful";
import Voting from "./Voting";
import Help from "./Help";
import Instruction from "./Instruction";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Voting" element={<Voting />} />
          <Route path="/Successful" element={<Successful />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Instruction" element={<Instruction />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
