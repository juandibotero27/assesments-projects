const url = document.querySelector('#image-url')
const inputTop = document.querySelector('#input-top')
const inputBottom = document.querySelector('#input-bottom')
const button = document.querySelector('#add-meme')
const memeContainer1 = document.querySelector('.meme-container1')
const memeContainer2 = document.querySelector('.meme-container2')
const container = document.createElement('div')
const container2 = document.createElement('div')
const newMeme = document.createElement('img')
const newUpper = document.createElement('div')
const newLower = document.createElement('div')
const newMeme2 = document.createElement('img')
const newUpper2 = document.createElement('div')
const newLower2 = document.createElement('div')



button.addEventListener('click',(e)=> {

    if(memeContainer1.firstChild === null){
        //creating conatiner for first meme
        container.classList.add('meme')
        memeContainer1.append(container)
        //creating image for meme1
        newMeme.setAttribute('src', url.value)
        url.value = ''
        container.append(newMeme)
        //creating upper text
        newUpper.classList.add('upper-text')
        newUpper.innerText = inputTop.value
        inputTop.value = ''
        container.append(newUpper)
        //creating down text
        newLower.classList.add('lower-text')
        newLower.innerText = inputBottom.value
        inputBottom.value = ''
        container.append(newLower)
    }else if(memeContainer2.firstChild === null){
        container2.classList.add('meme')
        memeContainer2.append(container2)
        //
        newMeme2.setAttribute('src', url.value)
        url.value = ''
        container2.append(newMeme2)
        // //
        newUpper2.classList.add('upper-text')
        newUpper2.innerText = inputTop.value
        inputTop.value = ''
        container2.append(newUpper2)
        // //
        newLower2.classList.add('lower-text')
        newLower2.innerText = inputBottom.value
        inputBottom.value = ''
        container2.append(newLower2)
    }else{
        alert('click on a meme to delete and create another one!!!!')
    }

    e.preventDefault()
})



memeContainer1.addEventListener('click', (e)=> {
   if(e.target.parentElement.classList.contains('meme')){
    e.target.parentElement.remove()
   }
    
})

memeContainer2.addEventListener('click', (e)=> {
    if(e.target.parentElement.classList.contains('meme')){
     e.target.parentElement.remove()
    }
     
 })
