import React from 'react';

const Todos=()=>{
        const [todos, setTodos] = React.useState({})
        const [todo, setTodo] = React.useState('')
        return(
            <div style={{ fontSize: '2rem' }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1em'}}>
                <label>Todo:</label>
                <input 
                    type='text' 
                    placeholder='Enter Todo Here' 
                    value={todo} 
                    onChange={(e)=>setTodo(e.target.value)}
                    style={{ height: '2rem' }}    
                />
                
                <button onClick={()=>{
                    setTodos({...todos, [Object?.values?.(todos)?.length+1]:{val: todo, checked: false}})
                    setTodo('')
                    }}
                    disabled={!todo}
                    style={{ height: '2rem' }}
                >Add</button>
                </div>
                <div>
                    <ul>
                    {React.Children.toArray(Object?.values(todos)?.map((todo, index)=>(
                        <li>
                            <div key={index} onClick={()=>setTodos({...todos, [index+1]:{...todos[index+1], checked:true}})}>
                                <span style={{ textDecoration: todo.checked ? 'line-through' : '' }}>
                                {todo.val}
                                </span>
                            </div>
                        </li>
                    )))}
                    </ul>
                </div>
            </div>
        );
}

export default Todos;