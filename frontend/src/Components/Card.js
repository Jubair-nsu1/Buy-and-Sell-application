import { FaTimes } from 'react-icons/fa'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Product = ({title,price,rent,description,onDelete,onUpdate}) => {
    return (
        <div class="container mt-3">
            <div class="card shadow p-2 mb-4 bg-body-tertiary rounded" style="width: 50rem; cursor: pointer" onClick={() => onUpdate(task.id)}>
                <div class="card-body">
                    <div>
                        <h1>My First Bootstrap Page</h1>
                        <p style="font-weight:bold">This part is inside a container class.</p>
                        <p>The .container class provides a responsive fixed width container.</p>
                        <p>Resize the browser window to see that the container width will change at different breakpoints.</p>
                    </div>
                    <div>
                        <FaTimes
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => onDelete(task.id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product