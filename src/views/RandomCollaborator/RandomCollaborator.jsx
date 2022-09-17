import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner';
import CollaboratorCard from '../../components/CollaboratorCard/CollaboratorCard';
import { getRandomCollaborator } from '../../services/collaboratorService/collaboratorService';

const RandomCollaborator = () => {

  const [collaborator, setCollaborator] = useState(null);

  const fetchRandomCollaborator = async () => {
    const response = await getRandomCollaborator().catch(error => {
      console.log(error);
    })
    return response
  }

  const nextRandomCollaborator = () => {
    fetchRandomCollaborator().then(collaborator => setCollaborator(collaborator.data))

  }
  useEffect(() => {
    fetchRandomCollaborator()
      .then(collaborator => setCollaborator(collaborator.data))
  }, []);


  return (
    <>
      <Banner />
      <main>
        <h4>Bienvenue sur l'intranet</h4>
        <p>la plate forme de l'entreprise qui vous permet de retrouver tous les collaborateurs</p>
        <p>Avez-vous dit bonjour à :</p>
        {
          collaborator && <CollaboratorCard collaborator={collaborator} />
        }
        <button onClick={nextRandomCollaborator}>Dire bonjour à quelqu'un d'autre</button>
      </main>
    </>

  )
}

export default RandomCollaborator