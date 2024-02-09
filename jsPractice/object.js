let student ={
    soham:{
        name:"Soham Kulkarni",
        id:10
    },
    apu:{
        name:"Apu Chakraborty",
        id:22
    },
    sam:{
        name:"Samir Mukherjee",
        id:23
    }
}

for (key in student){
    console.log(student[key]['name']+'-------'+student[key].id);
}