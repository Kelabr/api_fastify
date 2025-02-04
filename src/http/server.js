import fastify from "fastify";
import useRouters from "../routers/useRouters.js";


const app = fastify()

app.register(useRouters, {prefix: 'api'})



<<<<<<< HEAD
app.listen({port:3333, host: "0.0.0.0"}).then(() => {
=======
app.listen({port:3333,  host: "0.0.0.0"}).then(() => {
>>>>>>> 6a4d08395210bcdc5b3607da2f2ff67f566e032a
    console.log('http server runing')
})

