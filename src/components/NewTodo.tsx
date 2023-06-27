import { useRef } from 'react'
import './NewTodo.css'
const NewTodo :React.FC<{onAddTodo:(text:string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoTextInputRef.current!.value
        if (enteredText.trim().length === 0) {
            return;
        }
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={submitHandler} className='form'>

            <input type="text" id="text" ref={ todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo