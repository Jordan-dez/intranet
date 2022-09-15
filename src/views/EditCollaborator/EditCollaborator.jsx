import React, { useState, useEffect } from 'react'
import EditCreateForm from '../../components/EditCreateForm/EditCreateForm'
import { useParams } from 'react-router-dom'
import { getCollaborator } from '../../services/collaboratorService/collaboratorService';
import Banner from '../../components/Banner/Banner';


const EditCollaborator = () => {

    const params = useParams();
    const { id } = params;
    const [collaborator, setCollaborator] = useState(null);
    console.log(id);
    useEffect(() => {
        const getdata = async () => {
            const response = await getCollaborator(id)
            setCollaborator(response.data)
        }
        getdata();
    }, [id]);

    return (
        <div>
            <Banner/>
            <h1>Editer un collaborateur</h1>
            <EditCreateForm isEdit={true} user={collaborator} />
        </div>
    )
}

export default EditCollaborator