import React, { useState, useEffect } from 'react'
import EditCreateForm from '../../components/EditCreateForm/EditCreateForm'
import { useParams } from 'react-router-dom'
import { getCollaborator } from '../../services/collaboratorService/collaboratorService';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';


const EditCollaborator = () => {

    const params = useParams();
    const id = params?.id;
    const [collaborator, setCollaborator] = useState(null);
    console.log(id);
    useEffect(() => {
        const getdata = async () => {
            const response = await getCollaborator(id)
            setCollaborator(response?.data)
        }
        getdata();
    }, [id]);

    return (
        <>
            <Banner />
            <main>
                <div className="container">
                    <h1>Editer un collaborateur</h1>
                    <EditCreateForm isEdit={true} user={collaborator} />
                </div>

            </main>
            <Footer/>
        </>
    )
}

export default EditCollaborator