import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsTable from "../Components/CardTable/Cardstable";
import ClientSidebar from "../Components/Sidebar/ClientSideBar/ClientSidebar";
import Topbar from "../Components/Topbar/Topbar";
import { useUserContext } from "../Contexts/UserContext";


function UserPets () {
    const [pets, setPets] = useState([]);
    const { user } = useUserContext()
    const code = user.code

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        try {
            const { data } = await axios.get('http://localhost:3500/api/user/', { params: code });   
           setPets(data.pets);
            
        }catch (error) {
            Swal.fire({
                title: `${error}`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            
            console.log(error);
        }
    }


    return (
        <div className="user-pets">
            <ClientSidebar/>
            <Topbar/>
            <CardsTable pets={pets}/>
        </div>
    )
}

export default UserPets