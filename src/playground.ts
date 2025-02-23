import { db } from "./server/db"


await db.user.create({
    data:{
        emailAddress:'test@gmail.com',
        firstName: 'Abdullah',
        lastName:"safwi",
    }
})

console.log('User created successfully')