import { loadUsersByPage } from "../use-cases/load-users-by-page"

const state = {
    currentPage : 0,
    users : [],
}

const loadNextPage = async () => { 
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.length===0) return;

    state.currentPage += 1;
    state.users = users;  
}
const loadPreviousPage = async () => {
    if(state.currentPage ===1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    
    state.currentPage -= 1;
    state.users = users;  
}

/**
 * 
 * @param {User} userUpdated
 */
const onUserChanged = async (userUpdated) => {

    let wasFound=false;

    state.users = state.users.map(user=>{
        if(user.id === userUpdated.id)
        {
            wasFound=true;
            return userUpdated;
        }
        return user;        
    });

    if(state.users.length < 10 && !wasFound)
        state.users.push(userUpdated);
}

const reloadPage =async () => {
    const users = await loadUsersByPage(state.currentPage);
    if(users.length===0) 
    {
        await loadPreviousPage();
        return;
    }

    state.users = users;  
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
}