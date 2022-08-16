const post = document.querySelector('h1');

post.addEventListener('click' , editPost);

function editPost () {
    const content = prompt('Enter your update post')
    post.textContent= `${content}`
}
