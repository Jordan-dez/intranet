import axiosInstance, { getAuthorizationHeader } from "../axiosInstance/axiosIntance";
import axios from "axios"

// fetching allCollaborators
export async function getCollaborators() {
    const data = axiosInstance.get("collaborateurs")
    return data
}

export function getCollaborator(id) {
    const data = axiosInstance.get(`collaborateurs/${id}`)
    return data
}
// fetching random collaborator
export async function getRandomCollaborator() {
    const data = axiosInstance.get("collaborateurs/random", {
        headers: { Authorization: getAuthorizationHeader() }
    })
    return data;
}
//adding a new collaborator
export async function addCollaborator(collaborator) {
    try {
        const addResponse = await axiosInstance.post("collaborateurs", collaborator)
        return addResponse
    } catch (e) {
        console.log(e);
    }
}

//update collaborator
export async function updateCollaborator(id, collaborator) {
    try {
        const updateResponse = await axiosInstance.put(`collaborateurs/${id}`, collaborator)
        return updateResponse
    } catch (e) {
        console.log(e);
    }
}
export async function deleteCollaborator(id) {
    try {
        const deleteResponse = await axiosInstance.delete(`collaborateurs/${id}`)
        return deleteResponse
    } catch (e) {
        console.log(e);
    }
}