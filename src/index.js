function init() {

    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(function(data) {
        data.forEach((element) => {
            const table = document.querySelector("#table-body")
            const dog = document.createElement("tr")
            const dogName = document.createElement("td")
            const dogBreed = document.createElement("td")
            const dogSex = document.createElement("td")
            const editBtn = document.createElement("button")

            dogName.textContent = element.name
            dogBreed.textContent = element.breed
            dogSex.textContent = element.sex
            editBtn.textContent = "Edit Dog"

            dog.append(dogName, dogBreed, dogSex, editBtn)
            table.append(dog)
        })
    })
}

init()