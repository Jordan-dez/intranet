export const setAccesTokenStorage = (data) => {
    localStorage.setItem('accessToken', JSON.stringify(data))
}
export const getAccessTokenFromLocalStorage = (data) => {
    let localdata = localStorage.getItem('accessToken');
    // console.log("localdata",localdata);
    return localdata = JSON.parse(localdata);
}