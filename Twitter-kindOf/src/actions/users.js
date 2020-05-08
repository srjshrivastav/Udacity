export const RECEIVE_USER = 'RECEIVE_USER'
export function getUser(users){
    return{
        type:RECEIVE_USER,
        users
    }
}