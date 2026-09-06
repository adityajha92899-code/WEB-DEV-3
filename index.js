import express from "express";
const app = express();
import tourRouter from "./routes/tourRoute.js";
// import { packages } from "./data/tour.js";

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

// app.get("/packages",(req,res)=>{
//     res.json(packages);
// })

// app.get("/packages/destination/destination",(req,res)=>{
//     const destination =req.query.destination;
//     const result  = packages.filter((pkg) => pkg.destination === destination);
//     res.json(result);
// })

// app.get("/packages/:id",(req,res)=>{
//     const packageId = parseInt(req.params.id);
//     const selectedPackage = packages.find(item => item.id === packageId);

//     if(!selectedPackage){
//         return res.status(404).json({
//             message : "Packages not found"
//         });
//     }
//     res.json(selectedPackage);

// })

app.use(express.json());

const middleware1 = (req,res,next)=>{
    console.log("Middleware1");
    next();
}

const logger =(req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
}
app.use(logger);

app.get("/",(req,res)=>{
    res.send("Hello world");
});

const checkAge = (req,res,next)=>{
    const age = 23;
    if(age<18){
        return res.status(403).json({message:"You are not allowed to access this resource"});
    }
    next();
}

app.use(checkAge);

app.get("/check",(req,res)=>{
    res.send("Success");
});


app.use("/api",tourRouter);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})