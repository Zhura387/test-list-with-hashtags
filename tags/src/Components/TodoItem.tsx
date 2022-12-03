
import { ITodo,Tags } from '../Types/data'
interface ITodoItem extends ITodo{
    toggeleTodo:(id:number)=>void
    removeTodo:(id:number)=>void
  
}
interface ITodoItem extends Tags{
  
    filt:(hash:string)=>void
}

const TodoItem: React.FC <ITodoItem>=(props)=>{
    const{id,title,hash,complete,toggeleTodo,removeTodo,filt}=props

    return(
        <>
        <div className='taskText'>
<input type='checkbox'checked={complete} onChange={()=>toggeleTodo(id)}/>
<p>{title} { hash?<button onClick={()=>filt(hash)}>{hash}</button>:''}</p>
<button onClick={()=>removeTodo(id)}>X</button>


        </div>

          </>
    )
    
}
export {TodoItem}