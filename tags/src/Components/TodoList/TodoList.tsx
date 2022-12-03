
import { TodoItem } from '../TodoItem/TodoItem'
import { ITodo, Tags } from '../../Types/data'
import './styles.css'
interface ITodoList {
    items: ITodo[]
    tag: Tags[]
    toggeleTodo: (id: number) => void
    removeTodo: (id: number) => void
    filt: (hash: string) => void
    handleEdit: (id: number, text: string) => void
    removeTag: (id: number) => void
}

const TodoList: React.FC<ITodoList> = (props) => {
    const { items, toggeleTodo, removeTodo, handleEdit, tag, removeTag, filt } = props




    return (<>
        <div className='task'>
            {items.map(item =>
            (<TodoItem
                key={item.id}
                filt={filt}
                handleEdit={handleEdit}
                toggeleTodo={toggeleTodo}
                removeTodo={removeTodo}
                {...item} />
            ))}
        </div>
        <div className=' tagWrapper'>
            <div className=' tagContent'>
                {tag.map((item) => (

                    <div className='tags'>
                        <p key={item.id}> {item.title} </p>
                        <span onClick={() => removeTag(item.id)}><img src='./1.png' alt='' /></span>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}
export { TodoList }