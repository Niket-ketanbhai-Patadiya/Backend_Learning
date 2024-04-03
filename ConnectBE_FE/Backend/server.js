import express from 'express'
const app=express()

app.get('/',(req,res)=>{
    res.send('Server is ready')
});

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a first joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'a second joke',
            content:'This is a another joke'
        },
        {
            id:3,
            title:'a third joke',
            content:'This is a just other joke'
        },
        {
            id:4,
            title:'a fourth joke',
            content:'This is a one another joke'
        },
        {
            id:5,
            title:'a fifth joke',
            content:'This is your joke'
        }
    ];  
    res.send(jokes);
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`localhost is listening on PORT ${PORT}`)
})