document.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault();
    getRandomProfile();

    document.querySelector('#dislike').addEventListener("click",getRandomProfile);

    const like = document.querySelector("#like");
    like.addEventListener('onclick', async () => {
        
    });
});

async function getRandomProfile() {
    const username = window.location.href.split("/")[4];

    const response = await fetch(`/api/random-user`, {
        method: 'GET',
    });

    if (response.ok) {
        const data = await response.json();
        const loggedIn = document.querySelector("#loggedIn")
        loggedIn.innerHTML = `You are logged in as <a href="/profiles/${username}">${username}</a>`
        const nickname = document.querySelector("#nickname");
        nickname.innerHTML = `<b>${data.nickname}(${data.age},${data.gender})</b>`
        const aboutMe = document.querySelector("#aboutMe");
        aboutMe.innerHTML = `"${data.self_description}"`;
        const picture = document.querySelector("#picture");
        picture.setAttribute("src", `${data.profile_picture_url}`)
    } else {
        window.location.assign(`/public/error.html`)
    }
}