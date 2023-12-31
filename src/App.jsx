import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/MyMain";
import FirstPage from "./components/FirstPage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="gen-color-body">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/:location/:lat/:lon" element={<MyMain />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
