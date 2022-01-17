let breedSelect = document.getElementById("breedSelect");
let dogImg = document.getElementById("dogImage");
let selectedBreed;


let request = new XMLHttpRequest();
request.open("GET", "https://dog.ceo/api/breeds/list/all");

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let breeds = JSON.parse(this.response);
        breeds = Object.keys(breeds.message);
        console.log(breeds);

        breeds.forEach(element => {
            let option = document.createElement("option");
            option.innerHTML = element;
            breedSelect.appendChild(option);
        });
    }
}
request.send();


breedSelect.addEventListener("change", getImage);

function getImage(event) {
    selectedBreed = event.target.value;

    let imgRequest = new XMLHttpRequest();
    imgRequest.open("GET", `https://dog.ceo/api/breed/${selectedBreed}/images/random`);


    imgRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let dogObj = JSON.parse(this.response);
            console.log(this.response)
            dogImg.src = dogObj.message;
        }
    }

    imgRequest.send();

}