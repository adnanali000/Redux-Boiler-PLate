
const INITIAL_STATE = {
    userName:'adnan000',
    email:'adnan@gmail.com',
    arr:[1,2,3,4,5],
}

export default (state = INITIAL_STATE,action)=>{
    console.log('Auth Action: ',action);

    return state;
}