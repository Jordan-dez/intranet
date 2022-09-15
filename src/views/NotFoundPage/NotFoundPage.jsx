import React from 'react'
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
        <p>page non trouvée 404 !</p>
        <Link to="/direbonjour">Retour</Link>
    </div>
  )
}

export default NotFoundPage