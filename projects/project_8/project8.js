const button = document.querySelector('#button');
const userId = document.querySelector('#gitInfo');
const img = document.querySelector('#gitImg');
let data;
const res = document.querySelector('#result');

button.addEventListener('click',function(){
    const gitUrl = `https://api.github.com/users/${userId.value.trim()}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',gitUrl);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                res.innerHTML = `
                <div style="font-size: 20px;color: white;text-align: center;">
                    <img src="${data.avatar_url}" alt="profile image" id="profileImg" style="display: inline-block;">
                    <h2 id="name">Name: ${data.login}</h2>
                    <h3 id="follower">follower(s): ${data.followers}</h3>
                    <h3 id="following">following(s): ${data.following}</h3>
                    <a href="${data.html_url}" target="_blank" id="profileLink">Visit Profile: ${data.html_url}</a>
                </div>
                `;
                img.innerHTML
            }else{
                res.innerHTML = `<p>User not found or an error occurred.</p>`;
            }
        }
    };
    xhr.send();
});