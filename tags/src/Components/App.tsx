import { useState } from 'react'
import { ITodo, Tags } from '../Types/data'
import { TodoList } from './TodoList/TodoList'
import '../App.css'

const App: React.FC = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])
    const [tag, setTag] = useState<Tags[]>([]);

    let a = text.replace('#', ' #').split(' ').filter(v => v.startsWith('#')).join('');
    console.log(a)
    let b = text.replace(a, "")
    console.log(b)

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: b,
            hash: a,
            complete: false,
        }])
        setText('')
    }

    const handleEdit = (id: number, text: string): void => {
        const arr = todos.map(item => item.id === id ? { ...item, title: text } : item)
        setTodos([...arr]);
    }

    const filt = (hash: string): void => {
        setTag(todos.filter((item) => item.hash === hash))
    }
    console.log(tag)
    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
    }
    console.log(todos)
    const removeTag = (id: number): void => {
        setTag(tag.filter(item => item.id !== id))
    }
    const toggeleTodo = (id: number): void => {
        setTodos(todos.map(item => {
            if (item.id !== id) return item

            return {
                ...item,
                complete: !item.complete
            }
        }))
    }
    return (
        <div>
            <div className='title'>
                <h3>Todo-list</h3>
            </div>
            <div className='wrapper'>
                <div className='content'>
                    <div className='input'>
                        <input placeholder='input text with hashtags' value={text} onChange={(e) => setText(e.target.value)}></input>
                        <span className='submit' onClick={addTodo}>add</span>
                    </div>
                    <div>
                        <TodoList items={todos} removeTag={removeTag} tag={tag} filt={filt} handleEdit={handleEdit} removeTodo={removeTodo} toggeleTodo={toggeleTodo} />
                    </div>
                </div>
            </div >
        </div>
    )
}
export { App }