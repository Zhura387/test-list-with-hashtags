import './styles.css'
interface TodoPopup {
}
const TodoPopup: React.FC<TodoPopup> = () => {
    return (
        <div className='popup'>
            <span><p>After set text with hashtags you can view all tasks with the same tag by clicking on it</p></span>
        </div>
    )
}
export { TodoPopup }