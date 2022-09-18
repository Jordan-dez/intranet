import { RemoveFromLocalStorage } from "../userService/localStorage";

/***
 * le rôle de chacune de ces fonctions est retourner true si aucune 
 * saisie n'a ete faite dans les champs du formulaire ou 
 * de retourner un élément s'il a été trouvé
 */
export const containFirstname = (collaborator, value) => !value.length || collaborator.firstname.toLowerCase().includes(value.toLowerCase()) || collaborator.lastname.toLowerCase().includes(value.toLowerCase())
export const containCity = (collaborator, value) => !value.length || collaborator.city.toLowerCase().includes(value.toLowerCase())
export const containService = (collaborator, value) => !value.length || collaborator.service.toLowerCase().includes(value.toLowerCase())

/**
 * fonction de déconnexion elle supprime le user du localStorage
 * et redirige vers la page login
 */
export const logOut = () => {
    RemoveFromLocalStorage();
    window.location.href = '/';
}