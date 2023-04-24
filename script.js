const caro=document.querySelector('img');
var images=["images/img1.png","images/img2.png","images/img3.png","images/img4.png"];
var start=0;
function next(){
    start++;
    if(start>=images.length){
        start=0;
        caro.src=images[start]
    }
    else{
        caro.src=images[start]
    }
}
function prev(){
    start--;
    if(start<0){
        start=images.length-1;
        caro.src=images[start]
    }
    else{
        caro.src=images[start]
    }
        
    
}