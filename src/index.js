// write your code here 
fetch ("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(ramenData => renderRamenImages(ramenData))

function renderRamenImages(ramenArray) {
    // console.log(ramenArray)

    const ramenCollection = document.querySelector("#ramen-menu")
    //console.log(ramenCollection)

    ramenArray.forEach((ramenObject) => {
        //IMP!! "ramenObject" shows what obj we are accessing so you can refer back to it and its keys
        //console.log(ramenObject) 

        const img = document.createElement("img")
        img.src = ramenObject.image
        //console.log(img)

        img.addEventListener("click", showRamenDetails)
        function showRamenDetails(){
            //console.log("clicked")
            const imgLocation = document.querySelector(".detail-image")
                //console.log(imgLocation)
            imgLocation.src = ramenObject.image
            imgLocation.alt = ramenObject.name

            const foodName = document.querySelector(".name")
            //console.log(name)
            foodName.textContent = ramenObject.name

            const restaurant = document.querySelector(".restaurant")
            restaurant.textContent = ramenObject.restaurant

            const rating = document.querySelector("#rating-display")
            rating.textContent = ramenObject.rating 

            const comment = document.querySelector("#comment-display")
            comment.textContent = ramenObject.comment
        }

        ramenCollection.append(img)
   })
}

const newRamenForm = document.querySelector("#new-ramen")
//console.log(newRamenForm)

newRamenForm.addEventListener("submit",(e) => (addNewRamen)(e))

function addNewRamen(e){
    e.preventDefault()
    //console.log(e)
    //console.log(e.target["new-comment"].value)
    const newRamenObject = {
        comment: e.target["new-comment"].value,
        image: e.target.image.value,
        name: e.target.name.value,
        rating: e.target.rating.value,
        restaurant: e.target.restaurant.value,
    }
    // console.log(newRamenObject)
    renderRamenImages([newRamenObject])
}