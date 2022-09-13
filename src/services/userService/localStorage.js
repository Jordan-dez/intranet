export const setAccesTokenStorage=(data) =>{
    localStorage.setItem('accessToken', JSON.stringify(data))
}
export const getAccessTokenFromLocalStorage=(data) =>{
 localStorage.getItem('accessToken');   
}