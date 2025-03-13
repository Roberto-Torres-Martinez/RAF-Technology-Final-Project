import Swal from "sweetalert2";

const urlBackend = process.env.BACKEND_URL;

export const createUser = async (newUser, navigate) =>{
    try {
        const response = await fetch(urlBackend + 'user-signup', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': null,
            'lastname': null,
            'email' : newUser.email,  
            'password' : newUser.password,
            'username': newUser.username,
            'address': null,
            'birthday_date' : null,
            'image': null
            })
    });      
        if(response.ok){
            navigate('/login')
        }else{
            navigate('/signup')
        };

    } catch (error) {
            console.log(error.status);
    } 
};

export const getUsers = async () => {
    const respose = await fetch(urlBackend + 'users');
    const data = await respose.json();
    return data;
};

export const login = async (user, responseApi, navigate) =>{
    const response = await fetch(urlBackend + 'login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': user.email,
            'password': user.password
        })
    });
    const data = await response.json();
    responseApi(data);
    sessionStorage.setItem('idUser', data.user.user_id) 
    sessionStorage.setItem('token', data.token); 
    if(data.token){
        navigate('/');
        Swal.fire({
            title: "Bienvenido!",
            text: "A partir de ahora estas dentro del equipo rocket",
            icon: "success",
            imageUrl: "https://media0.giphy.com/media/uzWoRrlxnbL6TJgIbP/giphy.gif?cid=6c09b952p0cq28z0rgmkvl41gkn11yj4231dug2es15s9g0r&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            draggable: true,
            confirmButtonText:`<i class="fa fa-thumbs-up"></i> Great!`})
                .then((response)=>{
                    if(response.isConfirmed){
                        window.location.reload();
                    };
                });
    };
};

export const privateUser = async () =>{
    const token = sessionStorage.getItem('token');
    const response = await fetch(urlBackend + 'private', {
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });    
    if(response.ok){
        return true
    }else if(!response.ok){
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('idUser')
        return false
    };
};

export const updateUser = async (updateInfo) => {
    const idUser = sessionStorage.getItem('idUser')
    const response = await fetch(`${urlBackend}update-user/${idUser}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "address": updateInfo.address,
            "birthday_date": updateInfo.birthday_date,
            "email": updateInfo.email,
            "lastname": updateInfo.lastname,
            "name": updateInfo.name,
            "password": updateInfo.password,
            "image": imageUrl,
            "username": updateInfo.username
        }) 
    });
    const data = await response.json()
    if(data.msg){
        window.location.reload();
    };
};

export const sendImage = async (file) => {
    try {
        const form = new FormData();
        form.append("img", file);
        const response = await fetch(urlBackend + 'upload-image', {
            method: 'POST',
            body : form
        })
        const data = await response.json();       
        return data; 
    } catch (error) {
        console.log(error);
    }
};

