// window.onload does the same
//8. sor-for cikluson belüli dolgok function-be, úgy átláthatóbb lenne; selectMainImage-ttöbb fele szedni
window.addEventListener("DOMContentLoaded", () => {

    selectMainImage(0);
    let actualIndex = 0;
    
    for (let i = 0; i < images.length; i++) {
        let image = document.createElement("img");
        image.setAttribute("src", images[i].file);
        image.setAttribute("alt", images[i].title);
        let thumbnails = document.querySelector(".thumbnails");
        thumbnails.appendChild(image);
        image.onclick = function(){
            selectMainImage(i);
            actualIndex = i;
        }
    } 
    
    let rightArrow = document.querySelector('#right_arrow');
    rightArrow.onclick = function(){
        if (actualIndex < images.length-1){
            actualIndex ++;
            selectMainImage(actualIndex); 
        }          
    }

    let leftArrow = document.querySelector('#left_arrow');
    leftArrow.onclick = function(){
        if (actualIndex >0) {
            actualIndex --;
            selectMainImage(actualIndex);  
        }      
    }    
})

function selectMainImage(index) {
    
    let mainContainer = document.querySelector("#main_image_container");
    let mainImage = document.createElement("img");
    mainContainer.innerHTML = "";
    mainImage.setAttribute("src", images[index].file);
    mainContainer.appendChild(mainImage);

    let mainDescription = document.createElement("div");
    mainContainer.appendChild(mainDescription);

    let mainTitle = document.createElement("h1");
    mainDescription.appendChild(mainTitle);
    mainTitle.textContent = images[index].title;
    //mainTitle.classList.add("mainTitle");

    let mainText = document.createElement("p");
    mainDescription.appendChild(mainText);
    mainText.textContent = images[index].description;
    //mainText.classList.add("mainText");
}

//képekre szöveg