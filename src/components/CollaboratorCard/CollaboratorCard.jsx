import React from 'react'

const CollaboratorCard = ({ collaborator }) => {
    return (
        <div>
            {
                collaborator &&<div>
                    <p>Nom :{collaborator.lastname} - prenom: {collaborator.firstname}</p>
                    <p>{collaborator.city}</p>
                    <p>{collaborator.service}</p>
                    <img src={collaborator.photo} alt={collaborator.lastname} />
                    {/* {
                        console.log(collaborator)
                    } */}
                </div>
            }
        </div>
    )
}

export default CollaboratorCard