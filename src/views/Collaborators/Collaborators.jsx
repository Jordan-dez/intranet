import React, { useEffect, useState, useRef } from 'react'
import CollaboratorListing from '../../components/CollaboratorListing/CollaboratorListing';
import { getCollaborators } from '../../services/collaboratorService/collaboratorService';
import { containCity, containFirstname, containService } from '../../services/utils/utils';

const Collaborators = () => {

    const [collaborators, setCollaborators] = useState([]);
    const [collaboratorsList, setCollaboratorsList] = useState([]);
    const loaded = useRef(false);
    const [filters, setFilters] = useState({ service: '', firstname: '', city: '' });

    useEffect(() => {
        if(!collaborators.length){
            (async ()=>{
                const response = await getCollaborators().catch((error) => {
                    console.log(error);
                });
                setCollaborators(response.data)
                setCollaboratorsList(response.data.reverse());
            })()
        }
        // const fetchCollaborators = async () => {
        //     const response = await getCollaborators().catch((error) => {
        //         console.log(error);
        //     });
        //     setCollaborators(response.data)
        // }
        // if (!loaded.current) {
        //     loaded.current = true
        //     // fetchCollaborators();
        // }

    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        console.log(filters)
        const { firstname, service, city } = { ...filters, [name]: value };
        // console.log(firstname, service, city );
        const filteredCollaborators =collaborators.filter(collaborator=>containFirstname(collaborator,firstname) && containCity(collaborator,city) && containService(collaborator,service));
        setCollaboratorsList(filteredCollaborators);
        console.log("collaboratorsList",collaboratorsList);
    }
    return (
        <>
            <div>
                <div>
                    <label htmlFor="firstname">Nom</label>
                    <input type="text" id='firstname' onChange={handleChange} name="firstname" value={filters.firstname} />
                </div>
                <div>
                    <label htmlFor="city">localisation</label>
                    <input type="text" id='city' onChange={handleChange} name="city" value={filters.city} />
                </div>
                <div>
                    <select name="service" id="service" onChange={handleChange}>
                        <option>veuillez selectionnez</option>
                        <option value="marketing">Marketing</option>
                        <option value="client">Client</option>
                        <option value="technique">Technique</option>
                    </select>
                </div>
            </div>
                {collaboratorsList.length}
            <CollaboratorListing collaborators={collaboratorsList} />
        </>
    )
}

export default Collaborators