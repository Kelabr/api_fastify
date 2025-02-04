import fastify from "fastify";
import useRouters from "../routers/useRouters.js";


const app = fastify()

app.register(useRouters, {prefix: 'api'})



app.listen({port:3333, host: "0.0.0.0"}).then(() => {
    console.log('http server runing')
})

