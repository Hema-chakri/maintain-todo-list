// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteItem} = props
  const {title, id} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" onClick={onDelete} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
