//Libraries
import './style/css/main.css';
import "./Libraries/bootstrap/bootstrap.min.css"

import Button from "./Components/Button";
import FilledButton from "./Components/FilledButton";
import HeaderGuest from "./Components/HeaderGuest";

function App() {
    return (
        <div className="container-fluid d-flex justify-content-end" style={{"width": "100%"}}>
            <FilledButton name="Log In"/>
            <Button name="Sign Up"/>
            <HeaderGuest/>
        </div>
    );
}

export default App;
