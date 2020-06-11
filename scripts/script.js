// create a variable for the <section> #photography
const photoSection = document.querySelector('#photography');
const modelCard = document.querySelector('.card');
// loop over all the photos data that will
for (const photo of photosArray) {
  //- clone a mockup <article> and append to the <section>
  const cloneHTML = modelCard.cloneNode(true);
  photoSection.append(cloneHTML);
  // set all the properties
  cloneHTML.querySelector('img').src = photo.imgUrl;
  cloneHTML.querySelector('h3').textContent = photo.name;
  cloneHTML.querySelector('h5').textContent = photo.price;
  if (!photo.bestSeller) {
    cloneHTML.querySelector('span').classList.add('hidden');
  }

  // id should be unique, so set it while you're at it
  cloneHTML.id = photo.name;
}
modelCard.classList.add('hidden');

// set object with the comments
const commentsInput = document.querySelector('#comments');
// wait for user input
commentsInput.addEventListener('keyup', function () {
  // the user should not be able to submit a comment of less that 4 caracters
  const commentsValid = this.value.length >= 4;
  commentsInput.classList.add(commentsValid ? 'valid' : 'invalid');
  commentsInput.classList.remove(commentsValid ? 'invalid' : 'valid');
  // this.classlist.add(commentsValid ? "valid" : "invalid");
  // this.classlist.remove(commentsValid ? "invalid" : "valid");
  // or comment must not contain bad langage..
});

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault;
  let isBadLanguage = false;
  badlanguageArray.forEach((word) => {});
  isBadLanguage = commentsInput.value.indexof('shit') > 0;
  if (isBadLanguage) {
    alert(
      commentsInput +
        ' contains bad language. Now do not be gross and re-input all your shit!'
    );
    commentsInput.value = '';
  }
});

const commentsList = document.querySelector('.commentslist');
const liModel = document.querySelector('.commentslist li');
// insert the comments from the Array
comments.forEach((commnt) => {
  //- clone the mockup <li> and append to the <ul>
  const liHTML = liModel.cloneNode(true);
  commentsList.append(liHTML);
  // set all the properties
  liHTML.querySelector('img').src = 'images/' + commnt.user + '.png';
  liHTML.querySelector('p').textContent = commnt.message;
});
liModel.classList.add('hidden');
