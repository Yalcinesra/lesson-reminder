
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import LesenCard from "./components/LesenCard";
import data from "./data"

const App = () => {
  return (
    <div>
    <MyNavbar/>
       <LesenCard  data={data} />
       
    </div>
  )
}

export default App