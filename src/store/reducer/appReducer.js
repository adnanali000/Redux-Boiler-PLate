
const INITIAL_STATE = {
    appName:'Chat App',
    email:'adnan@gmail.com',
    arr:[1,2,3,4,5],
}

export default (state = INITIAL_STATE,action)=>{
    console.log('App Action: ',action);
    switch (action.type) {
        case "SETDATA":
            return({
                ...state,
                appName:action.data
            })
    }
    return state;
}