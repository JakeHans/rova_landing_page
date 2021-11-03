var button = document.querySelector(".toogler")
var buttonToggler = document.querySelector(".toogle")
var toogleColor = document.querySelector('.toogle')
var head  = document.querySelector('.head')
var link = document.querySelectorAll('.link')
var body = document.querySelector('body')


var onClick = function (e) {

sessionStorage.setItem('backgroundColor1', 'bluered' )
sessionStorage.setItem('backgroundColor2', 'dark' )
sessionStorage.setItem('backgroundColor3', 'light' )
sessionStorage.setItem('backgroundColor4', 'darker' )

var primaryColor = sessionStorage.getItem('backgroundColor1')
var secondaryColor = sessionStorage.getItem('backgroundColor2')
var thirtyColor = sessionStorage.getItem('backgroundColor3')
var fourtyColor = sessionStorage.getItem('backgroundColor4')

    button.classList.toggle(primaryColor)

    body.classList.toggle(secondaryColor)

    for(let i = 0; link.length; i++){


        let links = link[0]

        links = link[i];

        links.classList.toggle(thirtyColor)
        head.classList.toggle(fourtyColor)

    }


   toogleColor.classList.toggle(thirtyColor)
   button.classList.toggle(fourtyColor)



   
}

// button.addEventListener("click", onClick)
buttonToggler.addEventListener("click", onClick)

