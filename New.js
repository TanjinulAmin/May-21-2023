//var name = "Tanjinul"
//console.log('name')

button.addEventListener("click" , function(){

        console.log("button clicked")
        const addHtml = document.createElement("h1")
        addHtml.innerText = "This is my first program"

        document.body.appendChild(addHtml)

})

        const button = document.getElementById("btn_click")