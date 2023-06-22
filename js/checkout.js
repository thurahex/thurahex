let number = document.getElementsByClassName("input-number")[0]
let button  =document.getElementsByClassName("submitbtn")[0]
let warmText = document.createElement('p')
let body= document.getElementsByClassName('result')[0]
let p = document.getElementById("not")


let data = [
    "thura123",
    "apple123",
    "orange123",
]
let checkOut = () =>{
    for(let i =0; i<data.length; i++){
        let checkData = data[i]
        if(number.value===checkData){
            // console.log(checkData+"is good")
            let result=document.createElement("div")
            result.append(checkData+ " is a member of us")
            result.classList.add("resultCss")
            
            body.appendChild(result)
            
            

            break;  
            
        }
        
        
    }
    number.value=""
}

button.addEventListener("click", checkOut)