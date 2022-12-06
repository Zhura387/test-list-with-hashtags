import './styles.css'
interface ITodoPopup {
}
const TodoPopup: React.FC<ITodoPopup> = () => {
    return (
        <div className='popup'>
            <span><p>After set text with hashtags you can view all tasks with the same tag by clicking on it</p></span>
        </div>
    )
}
export { TodoPopup }