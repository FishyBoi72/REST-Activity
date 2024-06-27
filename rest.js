document.getElementById('getAllPosts').addEventListener('click', getAllPosts);
document.getElementById('getPost10').addEventListener('click', getPost10);
document.getElementById('createPost').addEventListener('click', createPost);
document.getElementById('replacePost12').addEventListener('click', replacePost12);
document.getElementById('updatePost12').addEventListener('click', updatePost12);
document.getElementById('deletePost12').addEventListener('click', deletePost12);

const resultsDiv = document.getElementById('results');

function clearResults() {
  resultsDiv.innerHTML = '';
}

function renderResult(data) {
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  resultsDiv.appendChild(pre);
}

function getAllPosts() {
  clearResults();
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => renderResult({ error: error.message }));
}

function getPost10() {
  clearResults();
  fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then(response => response.json())
    .then(data => renderResult(data))
    .catch(error => renderResult({ error: error.message }));
}

function createPost() {
  clearResults();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(data => renderResult({ id: data.id }))
  .catch(error => renderResult({ error: error.message }));
}

function replacePost12() {
  clearResults();
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(data => renderResult(data))
  .catch(error => renderResult({ error: error.message }));
}

function updatePost12() {
  clearResults();
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(data => renderResult(data))
  .catch(error => renderResult({ error: error.message }));
}

function deletePost12() {
  clearResults();
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE'
  })
  .then(() => renderResult({ message: 'Post deleted successfully' }))
  .catch(error => renderResult({ error: error.message }));
}
