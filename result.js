function result_image(){
  
   var name1=document.getElementById("urName").value;
   var name2=document.getElementById("crushName").value;
  // var name1='abi';
  //  var name2='anu';
  name1=name1.toLowerCase();
  name2=name2.toLowerCase();
   var count=name1.length+name2.length;
  console.log(count);
    for(var i=0;i<name1.length;i++)
    {
      for(var j=0;j<name2.length;j++)
      {
           if(name1.charAt(i)===name2.charAt(j))
           {
            name2=name2.substring(0,j-1)+name2.substring(j+1,name2.length);
            count-=2;
            break;
           }
      }
    }
    var flames="flames";   
    var n=0,c=count-1;
    while(flames.length!=1){
        n=(n+c)%flames.length;
        flames=flames.substring(0,n)+flames.substring(n+1,flames.length);      
    }  
    console.log(flames+'sdf');
   localStorage.setItem("textValue",flames);
  
}
result_image();
