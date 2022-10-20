let xhr=new XMLHttpRequest();
console.log(xhr)
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=()=>{
    // if(xhr.status==200){
    
    let data1=JSON.parse(xhr.response)
    // let data1
     console.log(data1)
        data1.forEach(x => {
            console.log(`
            ${x.name.common}------${x.flags.png}`
          
            )
           
        });
    }