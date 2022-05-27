document.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault();

    let target_username = await getRandomProfile();
    document.querySelector('#dislike').addEventListener("click", getRandomProfile);

    const like = document.querySelector("#like");
    like.addEventListener('click', async () => {
        const source_username = window.location.href.split("/")[4];

        const response = await fetch('/api/likes', {
            method: 'POST',
            body: JSON.stringify({ source_username, target_username }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const msg = await response.json();

        if (!response.ok) {
            return;
        }
        if (msg.matched) {
            alert("It's a match!");
        }
        target_username = await getRandomProfile();
    });
});

async function getRandomProfile() {
    const username = window.location.href.split("/")[4];

    const response = await fetch(`/api/random-user?username=${username}`, {
        method: 'GET',
    });

    if (response.ok) {
        const data = await response.json();
/*             if (username === data.username){
                getRandomProfile();
            } */
            //ezt igazából a server.js-ben kéne
        const loggedIn = document.querySelector("#loggedIn");
        loggedIn.innerHTML = `You are logged in as <a href="/profiles/${username}">${username}</a>`;
        const nickname = document.querySelector("#nickname");
        nickname.innerHTML = `<b>${data.nickname}(${data.age},${data.gender})</b>`;
        const aboutMe = document.querySelector("#aboutMe");
        aboutMe.innerHTML = `"${data.self_description}"`;
        const picture = document.querySelector("#picture");
        picture.setAttribute("src", `${data.profile_picture_url}`);
        return data.username;
    } else {
        window.location.assign(`/public/error.html`);
    }
}