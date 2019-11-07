import React from 'react'

import Grid from '../template/grid'
import  IconButton from '../template/iconButton'


export default props =>{
    //entre adiciona
    //shitf e entre pesquisa
    //esc limpa os campos
    const keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.search() : props.handleAdd()
        }else if(e.key === 'Escape') {
            props.handleAdd()
        }
    }
    
    return (
        <div role="form" className='todoForm'>
        
            <Grid cols='12 9 10'>
                <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Adicione uma tarefa"
                    onKeyUp ={keyHandler}
                    onChange={props.listen}
                    value={props.description}
                />
            </Grid>
            
            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary'
                    icone="plus" 
                    event={props.handleAdd}
                />

                <IconButton 
                    style='info'
                    icone="search" 
                    event={props.search}
                />

                <IconButton 
                    style='default'
                    icone="close" 
                    event={props.clear}
                />

            </Grid>
        </div>

    )
}