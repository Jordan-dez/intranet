import React, { useEffect, useRef, useState } from 'react'
import { deleteCollaborator, getCollaborators } from '../../services/collaboratorService/collaboratorService';
import CollaboratorCard from '../CollaboratorCard/CollaboratorCard';
import style from "./CollaboratorListing.module.css"


const CollaboratorListing = ({ collaborators, setIsDeleted }) => {

    /***
     * cette fonction prend  prend l'id de la personne que l'administrateur veut 
     * supprimé l'envoie au service deleteCollaborator qui le supprime et 
     * change  IsDeleted(qui est un props qui vient de la view Collaborator) à true
     * pour permettre à la view de se mettre à jour
     */
    const deleteUser = async (id) => {
        const response = await deleteCollaborator(id)
        setIsDeleted(true)
    }

    return (
        <div className={`${style.card_container}`}>
            {
                collaborators && collaborators.map((collaborator) => <CollaboratorCard key={collaborator.id} collaborator={collaborator} deleteUser={deleteUser} needbuttons={true} />)
            }
        </div>
    )
}

export default CollaboratorListing