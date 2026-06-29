// ===============================
// OPEN GIFT BUTTON
// ===============================

const giftBtn = document.getElementById("giftBtn");
const letterSection = document.getElementById("letterSection");


giftBtn.addEventListener("click", () => {

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

});



// ===============================
// ENVELOPE OPENING
// ===============================


const sealBtn = document.getElementById("sealBtn");
const envelopeImg = document.getElementById("envelopeImg");
const letter = document.getElementById("letter");
const nextBtn = document.getElementById("nextBtn");


sealBtn.addEventListener("click",()=>{


    // hide envelope

    envelopeImg.classList.add("hide");


    // show letter

    setTimeout(()=>{

        letter.classList.add("show");

    },500);



    // show next button

    setTimeout(()=>{

        nextBtn.classList.add("show");

    },1500);


});




// ===============================
// GO TO BOUQUET
// ===============================


const bouquetSection = document.getElementById("bouquetSection");


nextBtn.addEventListener("click",()=>{


    bouquetSection.scrollIntoView({

        behavior:"smooth"

    });


});




// ===============================
// EXTRA HEART EFFECT
// ===============================


function createHeart(){


    const heart = document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-20px";

    heart.style.fontSize="20px";

    heart.style.opacity="0.8";


    document.body.appendChild(heart);



    heart.animate(
        [
            {
                transform:"translateY(0)",
                opacity:1
            },

            {
                transform:"translateY(-100vh)",
                opacity:0
            }

        ],

        {
            duration:4000
        }

    );



    setTimeout(()=>{

        heart.remove();

    },4000);


}



setInterval(createHeart,900);