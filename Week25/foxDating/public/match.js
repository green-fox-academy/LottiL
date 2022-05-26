document.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault();
    getRandomProfile();

    document.querySelector('#dislike').addEventListener("click", getRandomProfile);

    const like = document.querySelector("#like");
    like.addEventListener('click', async () => {
        const source_username = window.location.href.split("/")[4];
        const target_username = window.location.href.split("/")[4];
        //ez így nem jó, hogy szedem ki a targetet???!!!!
        const response = await fetch('/api/likes', {
            method: 'POST',
            body: JSON.stringify({ source_username, target_username }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMsg = await response.json();
            return;
        }
        console.log(response)
        //If the liked person has previously liked the active user, displays an alert that says "It's a match!" before loading the new profile.
        getRandomProfile();
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