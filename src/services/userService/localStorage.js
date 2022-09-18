/***cette fonction permet d'aller stocker l'utilisateur connecté  dans
 * le localstorage
 * 
*/
export const setAccesTokenStorage = (data) => {
    localStorage.setItem('accessToken', JSON.stringify(data))
}
/***cette fonction permet de récupérer l'utilisateur connecté qui est stocké dans
 * le localstorage
 * 
 * 
*/
export const getAccessTokenFromLocalStorage = () => {
    let localdata = localStorage.getItem('accessToken');
    return localdata = JSON.parse(localdata);
}
/***
 * cette fonction permet de supprimé l'utilisateur connecté du localStorage
 */
export const RemoveFromLocalStorage = () => localStorage.removeItem('accessToken');