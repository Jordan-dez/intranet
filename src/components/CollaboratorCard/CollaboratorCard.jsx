import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { deleteCollaborator } from '../../services/collaboratorService/collaboratorService'
import moment from 'moment';

const CollaboratorCard = ({ collaborator, deleteUser, needbuttons = false }) => {

    const user = useSelector(state => state.auth.user.user);

    return (
        <div>
            {
                collaborator && <div>
                    <p>Nom :{collaborator.lastname} - prenom: {collaborator.firstname}</p>
                    <p>{collaborator.city}</p>
                    <p>{collaborator.service}</p>
                    <img src={collaborator.photo} alt={collaborator.lastname} />
                    <p>{moment(new Date(collaborator?.birthdate), "MM/DD/YYYY").month(0).from(moment().month(0)).split(" ")[0]} ans</p>
                    {
                        user.isAdmin && needbuttons ? <>
                            <Link to={`/modifiercollaborateur/${collaborator.id}`} >Modifier</Link>
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