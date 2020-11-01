
const set_data = (data)=>{
    return(dispatch)=>{
        dispatch({type:'setData',Data:data})
    }
}

export {
    set_data
}