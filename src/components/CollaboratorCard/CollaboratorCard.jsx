import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import DeleteCollaborator from '../DeleteCollaboratorButton/DeleteCollaborator'

const CollaboratorCard = ({ collaborator }) => {
    const user = useSelector(state=>state.auth.user.user);
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
                            <DeleteCollaborator id={collaborator.id}/>
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