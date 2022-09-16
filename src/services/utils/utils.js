import { RemoveFromLocalStorage } from "../userService/localStorage";


export const containFirstname = (collaborator, value) => !value.length || collaborator.firstname.toLowerCase().includes(value.toLowerCase())
export const containCity = (collaborator, value) => !value.length || collaborator.city.toLowerCase().includes(value.toLowerCase())
export const containService = (collaborator, value) => !value.length || collaborator.service.toLowerCase().includes(value.toLowerCase())


export const logOut = () => {
    RemoveFromLocalStorage();
    window.location.href = '/';
}