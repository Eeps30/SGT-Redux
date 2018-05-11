export default store => next => action => {

    if(!action.payload || !action.payload.then){
        console.log('No Promises Here');
        return next(action)
    }

    console.log('Found a Promise!');

    action.payload.then(resp => {
        const newAction = {...action, payload: resp};

        store.dispatch(newAction);
    });

    return action.payload;
}