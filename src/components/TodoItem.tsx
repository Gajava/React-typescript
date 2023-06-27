import './TodoItem.css'
const TodoItem: React.FC<{ text: string; onRemoveTodo: (e: React.MouseEvent) => void }> = (props) => {
    return (
      <li  className='item' onClick={props.onRemoveTodo} >{props.text}</li>
    )
}
export default TodoItem