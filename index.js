let form = document.forms.signup
let iminput = form.querySelectorAll('.iminputs')
let uniminput = form.querySelectorAll('.uniminputs')
let imtxt = form.querySelectorAll('.importantp')
let unimtxt = form.querySelectorAll('.unimportantp')
let need = form.querySelectorAll('.needfill')
let warming = form.querySelectorAll('.wrongimmg')
let inps = form.querySelectorAll('input')
let filled = document.querySelector('.filled')
let unfilled = document.querySelector('.unfilled')
let filledneed = document.querySelector('.filledneed')
let wrongP = document.querySelector('.wrongP')


const pattern = {
    name:  /^[a-z ,.'-]+$/i,
    email:  /^[\w-\.]+@([\w-]+\.)+[\w-]{1,3}$/g, 
    surname:  /^[a-z ,.'-]+$/i,
    phone: /^9989[012345789][0-9]{7}$/, 
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/, 
    aboutyou:  /^[A-Z][a-z][0-9]|[A-Z][0-9][a-z]|[a-z][A-Z][0-9]|[a-z][0-9][A-Z]|[0-9][A-Z]|[A-Z]|[a-z]{100}$/,
    javascript:  /^[A-Z][a-z][0-9]|[A-Z][0-9][a-z]|[a-z][A-Z][0-9]|[a-z][0-9][A-Z]|[0-9][A-Z]|[A-Z]|[a-z]{100}$/,
    html:  /^[A-Z][a-z][0-9]|[A-Z][0-9][a-z]|[a-z][A-Z][0-9]|[a-z][0-9][A-Z]|[0-9][A-Z]|[A-Z]|[a-z]{100}$/,
    css:  /^[A-Z][a-z][0-9]|[A-Z][0-9][a-z]|[a-z][A-Z][0-9]|[a-z][0-9][A-Z]|[0-9][A-Z]|[A-Z]|[a-z]{100}$/, 
    favcar:  /^[A-Z][a-z][0-9]|[A-Z][0-9][a-z]|[a-z][A-Z][0-9]|[a-z][0-9][A-Z]|[0-9][A-Z]|[A-Z]|[a-z]{100}$/,
}



form.onsubmit = (event) => {
    event.preventDefault();

    let filledinputs = 0
    
    inps.forEach(inp => {
        if(inp.value.length > 0) {
            filledinputs++
            filled.innerHTML = filledinputs
        }
    })
    
    let filledneeded = 0
    
    
    iminput.forEach((inp2, index) => {  
              
        if(inp2.value.length === 0) {
            inp2.style.borderColor = 'red'

            if(imtxt[index]) {
                imtxt[index].style.color = 'red'
            }

            if(need[index]) {
                need[index].style.color = 'red'
                need[index].innerHTML = 'Please, fill in the fields!'
            }

            if(warming[index]) {
                warming[index].style.display = 'block'
            }
        } else {
            inp2.style.borderColor = '#543FD3'

            if(imtxt[index]) {
                imtxt[index].style.color = '#4200FF'
            }

            if(need[index]) {
                need[index].style.color = '#595959'
                need[index].innerHTML = 'Need to fill'
            }
            if(warming[index]) {
                warming[index].style.display = 'none'
            }
        }

        submit(form)

        if(inp2.value.length > 0) {
            filledneeded++
            filledneed.innerHTML = 7 - filledneeded
        }
    })
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    
    console.log(user);
}


iminput.forEach((inp, index )=> {
    inp.onkeyup = () => {
        if(!pattern[inp.name].test(inp.value)) {
            inp.style.borderColor = 'red'

            if(imtxt[index]) {
                imtxt[index].style.color = 'red'
            }

            if(need[index]) {
                need[index].style.color = 'red'
                need[index].innerHTML = 'Please, fill in the fields!'
            }

            if(warming[index]) {
                warming[index].style.display = 'block'
            }

            
        } else {

            inp.style.borderColor = 'green'

            if(imtxt[index]) {
                imtxt[index].style.color = 'green'
            }

            if(need[index]) {
                need[index].style.color = 'green'
                need[index].innerHTML = 'Good job!'
            }
            if(warming[index]) {
                warming[index].style.display = 'none'
            }
        }
    }
})

uniminput.forEach((inp, index )=> {
    inp.onkeyup = () => {
        if(!pattern[inp.name].test(inp.value)) {
            inp.style.borderColor = 'red'

            if(unimtxt[index]) {
                unimtxt[index].style.color = 'red'
            }

            if(wrongP[index]) {
                wrongP[index].style.display = 'block'
            }

        } else {

            inp.style.borderColor = 'green'

            if(unimtxt[index]) {
                unimtxt[index].style.color = 'green'
            }
  
            if(wrongP[index]) {
                wrongP[index].style.display = 'none'
            }
        }
    }
})




