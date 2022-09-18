import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner';
import EditCreateForm from '../../components/EditCreateForm/EditCreateForm';
import Footer from '../../components/Footer/Footer';
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
  return (
    <>
      <Banner />
      <main>
        <div className="container">
          <h1 className='text-center'>Editer mon profil</h1>
          <EditCreateForm isEdit={true} user={profil} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default EditProfil