document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#submit-btn');
    button.addEventListener('click', async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const nickname = document.querySelector('#nickname').value;
        const birth_year = document.querySelector('#birthYear').value;
        const gender = document.querySelector('.gender').value;
        const target_gender = document.querySelector('.lookingForGender').value;
        const self_description = document.querySelector('#picture').value;
        const profile_picture_url = document.querySelector('#aboutMe').value;

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, nickname, birth_year, gender, target_gender, self_description, profile_picture_url }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMsg = await response.json();
            return;
        }
        
        window.location.assign(`/profiles/${username}`)

        document.querySelector('form').reset();
    });
});