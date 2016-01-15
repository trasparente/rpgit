if (localStorage.getItem('rpgit.player.token')) {
  token = atob(localStorage.getItem('rpgit.player.token'));
} else {
  window.location = 'login.html';
}
