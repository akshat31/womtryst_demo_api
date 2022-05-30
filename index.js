const express = require('express');
const app = express();

app.use(express.json());

const patients = [{
    id:1,
    name:'radhika',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
},
{
    id:2,
    name:'kiran',
    age:27,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
},
{
    id:3,
    name:'karishma',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:4,
    name:'lakshmi',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:5,
    name:'vertika',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:6,
    name:'chetana',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:7,
    name:'shristy',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:8,
    name:'chikki',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:9,
    name:'demo',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
,
{
    id:10,
    name:'demo',
    age:25,
    gender:'female',
    contact:7803034440,
    pragnencyWeeks:18,
    timing:8.30,
    problem:"head pain",
}
]

app.get('/', (req , res)=>{
    res.send("hello world")
})

app.get('/api/patients' , (req , res)=>{
    res.send(patients);
})

app.post('/api/patients' , (req , res)=>{
    const PostPatient = {
        id:patients.length + 1,
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        contact:req.body.contact,
        pragnencyWeeks:req.body.pragnencyWeeks,
        timing:req.body.timing,
        problem:req.body.problem,
    }

    patients.push(PostPatient);
    res.send(patients);
})


app.get('/api/patients/:id' , (req , res)=>{
    const patient = patients.find(a=>a.id === parseInt(req.params.id));
    if(!patient){ res.status(404).send("id not found or invalid patient id")}
    res.send(patient);
})

app.listen(8080 , ()=>{
    console.log("listen to port 8080")
})