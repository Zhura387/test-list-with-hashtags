
import { TodoItem } from '../TodoItem/TodoItem'
import { ITodo } from '../../Types/data'
import './styles.css'
interface ITodoList {
    items: ITodo[]
    toggeleTodo: (id: number) => void
    removeTodo: (id: number) => void
    filt: (hash: string) => void
    handleEdit: (id: number, text: string) => void
}

const TodoList: React.FC<ITodoList> = (props) => {
    const { items, toggeleTodo, removeTodo, handleEdit, filt } = props
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
    </>
    )
}
export { TodoList }