import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner';
import CollaboratorCard from '../../components/CollaboratorCard/CollaboratorCard';
import Footer from '../../components/Footer/Footer';
import { getRandomCollaborator } from '../../services/collaboratorService/collaboratorService';
import style from "./RandomCollaborator.module.css"
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
        <div className='container'>
          <div className={`${style.title_container}`}>
            <h1>Bienvenue sur <span className="text-orange">OneSoft </span> <span>Intranet</span></h1>
            <p>La plate-forme de l'entreprise qui vous permet de retrouver tous les collaborateurs</p>
            <p>Avez-vous dit bonjour à :</p>
          </div>
          <div className={`text-center ${style.sayhelloctnr}`}>
            {
              collaborator &&
              <>
                <CollaboratorCard collaborator={collaborator} />
                <div>
                  <button onClick={nextRandomCollaborator}>Dire bonjour à quelqu'un d'autre</button>
                </div>
              </>

            }
          </div>
        </div>
      </main>
      <Footer/>
    </>

  )
}

export default RandomCollaborator