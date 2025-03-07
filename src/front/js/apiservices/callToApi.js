const urlBackend = process.env.BACKEND_URL
import Swal from "sweetalert2";

export const createUser = async (newUser) =>{
    try {
        const response = await fetch(urlBackend + 'user-signup', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': newUser.name,
            'lastname': newUser.lastname,
            'email' : newUser.email,  
            'password' : newUser.password,
            'username': newUser.username,
            'address': newUser.address,
            'birthday_date' : newUser.birthday_date      
            })
    });
        const data = await response.json()
        console.log(data);       
        
    } catch (error) {
            console.log(error);
    } 
};

export const getUsers = (userInfo) => {
    let infoUser = []
    fetch(urlBackend + 'users')
    .then((res)=> res.json())
    .then((data) => data.forEach(user => {
        infoUser.push(user.email, user.username);
        userInfo(infoUser);
    }));
};


export const login = async (user, responseApi, navigate) =>{
    const response = await fetch(urlBackend + 'login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': user.email,
            'password': user.password
        })
    })
    const data = await response.json();
    responseApi(data);    
    sessionStorage.setItem('token', data.token) 
    if(data.token){
        navigate('/')
        Swal.fire({
                title: "Bienvenido!",
                text: "A partir de ahora estas dentro del equipo rocket",
                icon: "success",
                imageUrl: "https://media0.giphy.com/media/uzWoRrlxnbL6TJgIbP/giphy.gif?cid=6c09b952p0cq28z0rgmkvl41gkn11yj4231dug2es15s9g0r&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                draggable: true,
                confirmButtonText:`<i class="fa fa-thumbs-up"></i> Great!`
                 }).then((response)=>{
                    if(response.isConfirmed){
                        window.location.reload()
                    }
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
    })
    if(response.ok){
        return true
    }else {return false}
};

