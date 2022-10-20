var obj1={name:"person1",age:5};
var  obj2={age:5,name:"person1"}
var data1=JSON.stringify(obj1)
 var data2=JSON.stringify(obj2)

const isEqual=(obj1,obj2)=>{
    const obj1keys=Object.keys(data1)
    const obj2keys=Object.keys(data2)
    if(obj1keys.length !== obj2keys.length)
    {
        return false;
    }
    for(key of obj1keys)
    {
        
        if(obj1keys[key] !==obj2keys[key]){
        return false
 }
}return true
}

console.log(isEqual(data1,data2) );
// output:
// true