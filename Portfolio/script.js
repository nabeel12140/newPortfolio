const text_type = document.getElementById("text-type");
const text_type_2 = document.getElementById("text-type_2");
const text_type_3=document.getElementById("text-type_3");
const b = document.getElementById("b")
var i = 0,j=0,k=0, textfirst, text_2,text_3;
text_3="Will Make Your Work Effective Efficient and Equitable .";
text_2="Here You Will Get To Learn More About Me ."
text = "Web Developer & Software Engineer .";
const typing = () => {

    if (text_type.disabled = true) {

        if (i < text.length) {
            text_type.innerHTML += text.charAt(i)
            i++;
            setTimeout(typing, 100);
        }
        setTimeout (()=>{
            typing_2();
        },5500)
        // text_type_2.innerHTML="jlsndjknsdjnd"
    }


}
const typing_2=()=>{
    if (j < text_2.length) {
        text_type_2.innerHTML += text_2.charAt(j)
        j++;
        setTimeout(typing_2, 1000);
    }
    setTimeout (()=>{
        typing_3();
    },5000)
}
const typing_3=()=>{
    if (k < text_3.length) {
        text_type_3.innerHTML += text_3.charAt(k)
        k++;
        setTimeout(typing_3, 10000);
    }
    
}
typing();
