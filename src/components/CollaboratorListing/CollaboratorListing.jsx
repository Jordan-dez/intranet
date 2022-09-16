import React, { useEffect, useRef, useState } from 'react'
import { deleteCollaborator, getCollaborators } from '../../services/collaboratorService/collaboratorService';
import CollaboratorCard from '../CollaboratorCard/CollaboratorCard';

const CollaboratorListing = ({ collaborators,setIsDeleted }) => {


    const deleteUser = async (id) => {
        const response = await deleteCollaborator(id)
        window.location.reload()
    }
    
    return (
        <div>
            {
                collaborators && collaborators.map((collaborator) => <CollaboratorCard key={collaborator.id} collaborator={collaborator} deleteUser={deleteUser} />)
            }
        </div>
    )
}

export default CollaboratorListing