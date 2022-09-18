import React from 'react'
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container text-center">
        <h1 className='text-orange'> 404 - Page non trouvée  !</h1>
        <p>La page recherchée n'existe pas veuillez retourner à la page d'accueil</p>
        <Link to="/direbonjour">Retour</Link>
      </div>

    </main>
  )
}

export default NotFoundPage