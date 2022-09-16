import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import DeleteCollaborator from '../DeleteCollaboratorButton/DeleteCollaborator'
import { deleteCollaborator } from '../../services/collaboratorService/collaboratorService'

const CollaboratorCard = ({ collaborator,deleteUser }) => {
    
    const user = useSelector(state => state.auth.user.user);

    return (
        <div>
            {
                collaborator && <div>
                    <p>Nom :{collaborator.lastname} - prenom: {collaborator.firstname}</p>
                    <p>{collaborator.city}</p>
                    <p>{collaborator.service}</p>
                    <img src={collaborator.photo} alt={collaborator.lastname} />
                    {/* {
                        console.log(collaborator)
                    } */}
                    {
                        user.isAdmin ? <>
                            <Link to={`/modifiercollaborateur/${collaborator.id}`} >Modifier</Link>
                            {/* <DeleteCollaborator id={collaborator.id}/> */}
                            {console.log(collaborator.id)}
                            <button onClick={() => deleteUser(collaborator.id)}>Supprimer</button>
                        </>
                            :
                            null
                    }
                </div>
            }
        </div>
    )
}

export default CollaboratorCard