import React from 'react'

const CollaboratorCard = ({ collaborator }) => {
    return (
        <div>
            {
                collaborator &&<div>
                    <p>{collaborator.lastname} - {collaborator.firstname}</p>
                    <p>{collaborator.country}</p>
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