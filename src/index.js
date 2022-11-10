let dogID = ""

function init() {
    updateDog()
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(function(data) {
        data.forEach((element) => {
            const table = document.querySelector("#table-body")
            const dog = document.createElement("tr")
            const dogName = document.createElement("td")
            const dogBreed = document.createElement("td")
            const dogSex = document.createElement("td")
            const button = document.createElement("td")
            const editBtn = document.createElement("button")
            
            dogName.textContent = element.name
            dogBreed.textContent = element.breed
            dogSex.textContent = element.sex
            editBtn.textContent = "Edit Dog"
            
            button.append(editBtn)
            dog.append(dogName, dogBreed, dogSex, editBtn)
            table.append(dog)
            editDog(element, editBtn)
        })
    })
}

function editDog(element, editBtn) {
    
    editBtn.addEventListener("click", (e) => {
        const form = document.querySelector("#dog-form")

        form.name.value = element.name
        form.breed.value = element.breed
        form.sex.value = element.sex
        dogID = element.id
    })
}

function updateDog() {
    const form = document.querySelector("#dog-form")
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:3000/dogs/${dogID}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: form.name.value,
                breed: form.breed.value,
                sex: form.sex.value
            })
        })
        .then(res => res.json())
    })
}

init()