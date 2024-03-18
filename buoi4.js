let a = [1,23,4,56,7];
/*for(let i =0;i<a.length;i++){
    a[i] = Math.pow(a[i],2);
}
console.log(a)*/
let b = a.map((item,index)=>{
    item= Math.pow(item,2)
    if(item>10){
        return item; 
    }
})
console.log(b);
console.log(a);