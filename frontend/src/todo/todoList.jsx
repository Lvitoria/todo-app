import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={ todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
                <td>
                    <IconButton  
                        style="success"
                        icone="check"
                        event={() => props.MarkAsDone(todo)}
                        hide={todo.done}
                    />

                    <IconButton  
                        style="warning"
                        icone="undo"
                        event={() => props.MarkAsPending(todo)}
                        hide={!todo.done}
                    />

                    <IconButton  
                        style="danger"
                        icone="trash-o"
                        event={() => props.handleRemove(todo._id)}
                        
                    />
                </td>
            </tr>
        ))
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>description</th>
                    <th className="tableActions">actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}