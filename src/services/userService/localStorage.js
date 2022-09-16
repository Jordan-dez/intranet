export const setAccesTokenStorage = (data) => {
    localStorage.setItem('accessToken', JSON.stringify(data))
}
export const getAccessTokenFromLocalStorage = () => {
    let localdata = localStorage.getItem('accessToken');
    // console.log("localdata",localdata);
    return localdata = JSON.parse(localdata);
}
export const RemoveFromLocalStorage = () => localStorage.removeItem('accessToken');