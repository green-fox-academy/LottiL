window.addEventListener("DOMContentLoaded", () => {
    const dog = document.querySelector("#dog");
    const cat = document.querySelector("#cat");
    const fish = document.querySelector("#fish");

    const yes = document.querySelector("#yes");
    const no = document.querySelector("#no");

    const loveCat = document.querySelector("#love_cat");
    const signUp = document.querySelector("#sign_up");

    dog.onchange = ()=>{
        signUp.disabled = false;
    }
    cat.onchange = ()=>{
        signUp.disabled = false;
    }
    fish.onchange = ()=>{
        signUp.disabled = true;
        clickOnFishAndNo();
    }

    yes.onchange = ()=>{
        loveCat.disabled = false;
    }
    no.onchange = ()=>{
        loveCat.disabled = true;
        clickOnFishAndNo();        
    }

    function clickOnFishAndNo(){
        if (no.checked && fish.checked) {
            signUp.disabled = false;
        }
    }


    loveCat.addEventListener("click", (e)=>{
        e.preventDefault();
        alert("Thank you, you've successfully signed up for cat facts");
    })
 

    signUp.addEventListener("click", (e)=>{
        e.preventDefault();
        if (no.checked && fish.checked) {
            alert("Sigh, we still added you to the cat facts list");
        }else{
            alert("Thank you, you've successfully signed up for cat facts");
        }     
    }) 
})