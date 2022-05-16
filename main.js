let contact=["omid-09731800","ramin-09127168","afshn-48294","khalil-0915956","rozita-023959"];
let searchname=prompt("search name");
for (i=0; i<contact.length; i++){
    let splitedcontact=contact[i].split("-");
    if (splitedcontact[0]===searchname){
    console.log(`number of ${splitedcontact[0]} is ${splitedcontact[1]}`)
    break;
    }else{
    console.log("user not found")}
    }
