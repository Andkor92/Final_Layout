document.addEventListener('click', () => {
  document.querySelector('.menu-btn').classList.toggle('active'); document.querySelector('.menu').classList.toggle('active'); document.body.classList.toggle('hide__scroll')
});

document.querySelector('.form__auth-btn').onclick = function () {
  const pass = document.querySelector('.pass').value;
  const retype = document.querySelector('.retype').value;
  if (pass == "" || pass !== retype) {
    document.querySelector('.pass').style = document.querySelector('.retype').style = "border: 2px solid red";
    return false;
  } else {
    document.querySelector('.pass').style = document.querySelector('.retype').style = "border: 2px solid green";
  }
  return true;
};
