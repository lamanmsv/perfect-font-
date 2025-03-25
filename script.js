document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsDisplay = document.getElementById('comments-display');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = commentText;
            commentsDisplay.appendChild(commentElement);
            commentInput.value = '';
        }
    });
});
