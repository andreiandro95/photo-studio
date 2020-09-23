let pictures = document.querySelectorAll(".pic");
let pictureArray = [];
let index = 0;
pictures.forEach(picture => {
    pictureArray.push(picture);
    picture.addEventListener("click", function(e){
        index = pictureArray.indexOf(picture);
        
        let divFull = document.createElement("div");
        divFull.setAttribute("class", "picture-place");
        document.body.appendChild(divFull);

        divFull.innerHTML = 
        `<div class="close-btn">
            <i class="far fa-times-circle"></i>
        </div>
        <div class="image-container">
            <img src="${pictureArray[index].src}" alt="" class="image-display">
        </div>
        <div class="before-btn">
            <i class="fas fa-arrow-left"></i>
        </div>
        <div class="next-btn">
            <i class="fas fa-arrow-right"></i>
        </div>`;

        document.querySelector(".fa-times-circle").addEventListener("click", function(){
            divFull.remove();
        });

        document.querySelector(".fa-arrow-left").addEventListener("click", function(){
            index--
            if(index < 0){
                index = pictureArray.length - 1;
            }
            document.querySelector(".image-display").src = pictureArray[index].src;
        });

        document.querySelector(".fa-arrow-right").addEventListener("click", function(){
            index++
            if(index > pictureArray.length - 1){
                index = 0;
            }
            document.querySelector(".image-display").src = pictureArray[index].src;
        });
    })
})