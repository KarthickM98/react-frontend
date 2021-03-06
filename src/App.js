import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Header } from "./Component/Header"; // name expo component needs{}// className="App-header"
import { Home } from "./Component/Home";
import { Bollywood } from "./Component/Category";
import { PageNotFound } from "./Component/PageNotFound";
import { ShowContent } from "./Component/ShowContent";
import { contextData } from "./Component/Context";
import Scrollup from "./Component/Scrollup";
import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [data, load] = useContext(contextData);
  console.log(data);
  return (
    <Router>
      <Scrollup />
      <Header />
      {load ? (
        <>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/title/:category" element={<Bollywood />} />
            <Route path="/:show/:id" element={<ShowContent />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </>
      ) : (
        <Box
          sx={{ marginTop: "200px", display: "flex", justifyContent: "center" }}
        >
          <CircularProgress />
        </Box>
      )}
    </Router>
  );
}

export default App;
