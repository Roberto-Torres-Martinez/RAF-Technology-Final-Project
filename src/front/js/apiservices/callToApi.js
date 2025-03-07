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


export const login = async () =>{
    const response = fetch(urlBackend + 'login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })

};
