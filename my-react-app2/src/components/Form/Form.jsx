import {Button} from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

const Form = () => {
    return (<main>
        <h1 className="title">
            The best pizza.
            <br/>
            <span>Straight out of the oven, straight to you.</span>
        </h1>
        <p>👋 Welcome! Please start by telling us your name:</p>
        <form action="#">
            <Input></Input>
            <Button></Button>
        </form>
            </main>)
}

export default Form;