import React, { useEffect, useRef, useState } from 'react'
import { getCollaborators } from '../../services/collaboratorService/collaboratorService';
import CollaboratorCard from '../CollaboratorCard/CollaboratorCard';

const CollaboratorListing = ({ collaborators }) => {

    return (
        <div>
            {
                collaborators && collaborators.map((collaborator) => <CollaboratorCard key={collaborator.id} collaborator={collaborator} />)
            }
        </div>
    )
}

export default CollaboratorListing