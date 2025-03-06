const urlBackend = process.env.BACKEND_URL

export const createUser = async (newUser) =>{
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
    }) 
}
