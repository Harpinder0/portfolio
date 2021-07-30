import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './app.css'
import Navbar from "./Component/Navbar";
import CvDownload from "./Component/CvDownload"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Navbar} />
        <Route exact path='/cvdownload' component={CvDownload} />
      </Switch>
    </>
  );
}

export default App;
