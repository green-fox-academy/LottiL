document.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault();

    const username = window.location.href.split("/")[4];

    const response = await fetch(`/api/users/${username}`, {
        method: 'GET',
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data)
        const nickname = document.querySelector("#nickname");
        nickname.innerHTML = `<b>${data.nickname}(${data.age},${data.gender})</b>`
        const aboutMe = document.querySelector("#aboutMe");
        aboutMe.innerHTML = `"${data.self_description}"`;
        const picture = document.querySelector("#picture");
        picture.setAttribute("src", `${data.profile_picture_url}`)
    } else {
        console.error(response.statusText);
    }
});