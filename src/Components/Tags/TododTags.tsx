import './styles.css'
import { Tags } from '../../Types/data'
interface ITodoTags {
    tag: Tags[]
    removeTag: (id: number) => void
}
const TodoTags: React.FC<ITodoTags> = (props) => {
    const { tag, removeTag } = props
   
    return (
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
    )
}
export { TodoTags }