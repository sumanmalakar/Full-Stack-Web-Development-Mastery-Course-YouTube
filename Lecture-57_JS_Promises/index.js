// console.log("Promises")

// Promise

// ram, mohan

// Pending => ram bolta hai 100 rupee de de [ mohan ]
// Fullfiledc => mohan ne paisa de diya 
// Reject => mohan ne reject kar diya

let doHomeWork = new Promise((resolve, reject)=>{
    let completed = true; // change to false to test rejection

    console.log("Starting the my homework");

    setTimeout(() => {
        if(completed){
            // console.log("Home work finished")
            resolve({msg:"Home work finished",value:20})
        }else{
            reject(`Did'nt finish homework`)
        }
    }, 2000); // 2 sec only
})

doHomeWork.then(msg =>console.log(msg.value)).catch(err =>console.log(err))