import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import Menu from "./components/Menu/Menu.jsx";
import {Counter} from "./components/Counter/Counter.jsx";
import {ProductList} from "./components/ProductList/ProductList.jsx";

function App() {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Header/>
            <Form/>
            <button onClick={() => setVisible(!isVisible)}>Menu</button>
            {isVisible ? <Menu/> : null}

        </>
    )
}

export default App
