import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { deleteCollaborator } from '../../services/collaboratorService/collaboratorService'
import moment from 'moment';
import style from './CollaboratorCard.module.css'

const CollaboratorCard = ({ collaborator, deleteUser, needbuttons = false }) => {

    const user = useSelector(state => state.auth.user.user);

    return (
        <>
            {
                collaborator &&
                <figure className={`${style.card}`}>
                    <div>
                        <img src={collaborator.photo} alt={collaborator.lastname} title={`${collaborator.lastname} - ${collaborator.firstname}`} style={{ width: 200 }} />
                        <span>{collaborator.service}</span>
                    </div>
                    <figcaption>
                        <p className={`${style.collaborator_name_container}`}><span className={`${style.collaborator_name}`}>{collaborator.lastname} {collaborator.firstname} </span><span className={`${style.collaborator_age}`}>({moment(new Date(collaborator?.birthdate), "MM/DD/YYYY").month(0).from(moment().month(0)).split(" ")[0]} ans)</span> </p>
                        <p className={`${style.collaborator_adress}`}>{collaborator.city},{collaborator.country}</p>
                        <p className={`${style.collaborator_contacts}`}><span><i className="fa-solid fa-phone"></i></span> <span>{collaborator.phone}</span></p>
                        <p className={`${style.collaborator_contacts}`}><span><i className="fa-solid fa-at"></i></span>  <span>{collaborator.email}</span></p>
                        <p className={`${style.collaborator_contacts}`}><span><i className="fa-solid fa-cake-candles"></i></span> <span>{new Date(collaborator.birthdate).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' })}</span></p>
                        {
                            user.isAdmin && needbuttons ?
                                <div className={`${style.card_buttons}`}>
                                    <Link to={`/modifiercollaborateur/${collaborator?.id}`} className={`${style.collaborator_update_button}`}>Modifier</Link>
                                    <button onClick={() => deleteUser(collaborator.id)} className={`${style.collaborator_delete_button}`}>Supprimer</button>
                                </div>
                                :
                                null
                        }
                    </figcaption>

                </figure>

                //  <div>
                //     <p>Nom :{collaborator.lastname} - prenom: {collaborator.firstname}</p>
                //     <p>{collaborator.city}</p>
                //     <p>{collaborator.service}</p>
                //     <img src={collaborator.photo} alt={collaborator.lastname} />
                //     <p>{moment(new Date(collaborator?.birthdate), "MM/DD/YYYY").month(0).from(moment().month(0)).split(" ")[0]} ans</p>
                //     {
                //         user.isAdmin && needbuttons ? <>
                //             <Link to={`/modifiercollaborateur/${collaborator.id}`} >Modifier</Link>
                //             <button onClick={() => deleteUser(collaborator.id)}>Supprimer</button>
                //         </>
                //             :
                //             null
                //     }
                // </div>
            }
        </>
    )
}

export default CollaboratorCard