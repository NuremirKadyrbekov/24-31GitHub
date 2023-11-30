let  textarea = document.createElement('textarea')



let p = document.createElement('p')

let btn = document.createElement('button')
document.body.append(btn)
btn.innerHTML = 'add'
btn.style.marginLeft = '150px'
btn.style.position = 'absolute'

textarea.oninput = (e) =>{
    console.log(e.target.value)
    localStorage.setItem('nuremir',e.target.value)
    
}

const AddTo = () =>{
    

    let li = document.createElement('li')
    li.innerHTML = localStorage.getItem('nuremir')
    document.body.append(li)





}
btn.addEventListener('click',AddTo)

// textarea.onclick = () =>{
    
// }
textarea.style.backgroundColor = "rgba(174, 250, 246, 0.514)";
textarea.style.textAlign = 'center';
textarea.style.justifyContent = 'center';
textarea.style.color = 'black'
textarea.style.width = '130px'
textarea.style.height = '40px'
textarea.style.fontSize = '25px'
let body = document.body

body.append(textarea)
body.append(p)