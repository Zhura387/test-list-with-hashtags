import { useState } from 'react'
import { ITodo, Tags } from '../../Types/data'
import './styles.css'
interface ITodoItem extends ITodo {
    toggeleTodo: (id: number) => void
    removeTodo: (id: number) => void
    handleEdit: (id: number, text: string) => void
}
interface ITodoItem extends Tags {

    filt: (hash: string) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, hash, complete, toggeleTodo, removeTodo, handleEdit, filt } = props
    const [isEdit, setIsEdit] = useState(false)
    const [text, setText] = useState(title)

    const toggle = () => {
        if (isEdit) {
            handleEdit(id, text)
            setIsEdit(!isEdit)
        } else {
            setIsEdit(!isEdit)
        }
    }

    return (
        <>
            <div className='taskWrapp'>
                <input type='checkbox' checked={complete} onChange={() => toggeleTodo(id)} />

                
                {isEdit ? (<input className='inputEdit' onChange={(e) => setText(e.target.value)} value={text} />) : (<p>{title} {hash ? <span className='hash' onClick={() => filt(hash)}>{hash}</span> : ''}</p>)}
                <span className='edit' onClick={() => toggle()}>{isEdit ? <img src='./3.png' alt='edit.png' /> : <img src='./2.png' alt='edit.png' />}</span>
                <span className='del' onClick={() => removeTodo(id)}><img src='./1.png' alt=''/></span>
            </div>

        </>
    )

}
export { TodoItem }