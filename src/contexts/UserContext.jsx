import { createContext, useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"

let UserContext = createContext();

export let UserProvider = (props) => {

    const[user, setUser] = useState();

    async function getUser() {
        try {
            let response = await axios.get("http://localhost:9000/user/"+localStorage.getItem("id"), {
                headers : {
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            });
            setUser(response.data);
        }  catch(error) {
            toast("Something went wrong")
        }
    }

    useEffect(()=>{
        getUser();
    }, [])

    async function updateUserDbCall(userDetails) {
        try {
            let response = await axios.put("http://localhost:9000/user/update/"+localStorage.getItem("id"), userDetails, {
                headers : {
                    "Authorization":"Bearer "+localStorage.getItem("token") }}
            )
            setUser(userDetails);
        } catch(error) {

        }
    }

    function updateUser(userDetails) {
        updateUserDbCall(userDetails);
    }

    return(
        <UserContext.Provider value={{user,setUser, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;