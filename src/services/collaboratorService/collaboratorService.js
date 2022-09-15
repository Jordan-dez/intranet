import axiosInstance from "../axiosInstance/axiosIntance";
import axios from "axios"

// fetching allCollaborators
export async function getCollaborators() {
    const data = axiosInstance.get("collaborateurs")
    return data
}
// fetching random collaborator
export async function getRandomCollaborator() {
    const data = axiosInstance.get("collaborateurs/random")
    return data;
}
//adding a new collaborator
export async function addCollaborator(collaborator) {
    try{
        const addResponse = await axiosInstance.post("collaborateurs",collaborator)
    }catch(e){
        console.log(e);
    }
}