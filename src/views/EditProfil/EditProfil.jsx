import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner';
import { getCollaborator } from '../../services/collaboratorService/collaboratorService';

const EditProfil = () => {
    const params = useParams();
    const { id } = params;
    const [profil, setProfil] = useState(null);
    console.log(id);
    useEffect(() => {
        const getdata = async () => {
            const response = await getCollaborator(id)
            setProfil(response.data)
        }
        getdata();
    }, [id]);

    console.log("data",profil)
  return (
    <div>
        <Banner/>
        <h1>Editer profil</h1>
        

    </div>
  )
}

export default EditProfil