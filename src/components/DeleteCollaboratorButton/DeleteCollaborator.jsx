import React from 'react'

const DeleteCollaborator = ({id}) => {

    const deleteCollabo = (id) => {
        console.log(id);
        console.log("test")
    }

    return (
        <button onClick={deleteCollabo}>
            Supprimer
        </button>
    )
}

export default DeleteCollaborator