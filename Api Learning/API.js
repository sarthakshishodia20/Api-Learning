let jsonRes=`{"fact":"A queen (female cat) can begin mating when she is between 5 and 9 months old.","length":77}`;
console.log(jsonRes);
let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);


let student={
    name:"shraddha",
    marks:100
};
let jsonData=JSON.stringify(student);
console.log(jsonData);

let url1="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let response1=await fetch(url);
        let data1=await response1.json();
        console.log(data1);

        let response2=await fetch(url);
        let data2=await response2.json();
        console.log(data2);
    }
    catch(error){
        console.log("Error is ",error);
    }
}
let url2="https://catfact.ninja/fact";
fetch(url)
.then((response1)=>{
    console.log(response1);
    return response1.json();
})
.then((data1)=>{
    console.log(data1);
    console.log(data1.fact);
    console.log(data1.length);
    return fetch(url);
})
.then((response2)=>{
    console.log(response2);
    return response2.json();
})
.then((data2)=>{
    console.log(data2);
    console.log(data2.fact);
    console.log(data2.length);
    return fetch(url);
})
.then((response3)=>{
    console.log(response3);
    return response3.json();
})
.then((data3)=>{
    console.log(data3);
    console.log(data3.fact);
    console.log(data3.length);
    return fetch(url);
})
.then((response4)=>{
    console.log(response4);
    return response4.json();
})
.then((data4)=>{
    console.log(data4);
    console.log(data4.fact);
    console.log(data4.length);
})
.catch((error)=>{
    console.log("Error is ",error);
})




