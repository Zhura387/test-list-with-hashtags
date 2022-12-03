
import { TodoItem } from './TodoItem'
import {ITodo,Tags} from '../Types/data'
interface ITodoList {
    items:ITodo[]
    tag:Tags[]
    toggeleTodo:(id:number)=>void
    removeTodo:(id:number)=>void
    filt:(hash:string)=>void
    
} 

const TodoList: React.FC<ITodoList> =(props)=>{
    const {items,toggeleTodo,removeTodo, tag, filt}=props




    return(<>
        <div className='task'>
        {items.map(item => 
            (<TodoItem 
            key={item.id} 
            filt={filt}
            
            toggeleTodo={toggeleTodo}
            removeTodo={removeTodo}
            {...item}/>
            ))}
        </div>
        {tag.map((item)=>(
  <p key={item.id}>{item.title}</p>
))}

        </>
    )
}
export {TodoList}