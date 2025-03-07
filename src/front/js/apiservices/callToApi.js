const urlBackend = process.env.BACKEND_URL

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
