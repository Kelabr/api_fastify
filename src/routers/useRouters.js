import { createUser, getUser, getOneUser } from "../class/dbuser.js";

export default async function(app, options){

    app.post('/create', (req, reply) => {
        const {name, email} = req.body
    
        try{
            createUser(name, email)
            reply.send({seccess: 'OK'})
        }catch(error){
            console.log(error)
        }
    })
    
    app.get('/users', async (req, reply) => {
        
        const users = await getUser()
    
        reply.send(users)
    })
    
    app.get('/oneuser/:id', async (req, reply) => {
    
        const {id} = req.params
        
        const user = await getOneUser(parseInt(id))
    
        reply.send(user)
    
    
    })
    

}

