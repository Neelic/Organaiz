  //document.getElementById('admin-menu').onclick = openCloseAdminMenu();

  function openCloseAdminMenu() {
    var el = document.getElementById('fancybox-wrap');
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
    el = document.getElementById('overlay');
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
  }

  document.getElementById('regBut').onclick = function() {
    var el = document.getElementById('auth');
    el.style.display = 'none';
    el = document.getElementById('reg');
    el.style.display = 'block';
  }

  document.getElementById('authBut').onclick = function() {
    var el = document.getElementById('auth');
    el.style.display = 'block';
    el = document.getElementById('reg');
    el.style.display = 'none';
  }

  document.getElementById('taskBut').onclick = function() {
    var el = document.getElementById('tabs-tasks').style.display = 'grid';
    el = document.getElementById('tabsmain').style.gridTemplateRows = '600px 0px 0px';
    el = document.getElementById('tabs-priorities').style.display = 'none';
    el = document.getElementById('tabs-urgensy').style.display = 'none';
  }

  document.getElementById('priorBut').onclick = function() {
    var el = document.getElementById('tabsmain').style.gridTemplateRows = '0px 600px 0px';
    el = document.getElementById('tabs-tasks').style.display = 'none';
    el = document.getElementById('tabs-priorities').style.display = 'grid';
    el = document.getElementById('tabs-urgensy').style.display = 'none';
  }

  document.getElementById('urgBut').onclick = function() {
    var el = document.getElementById('tabsmain').style.gridTemplateRows = '0px 0px 600px';
    el = document.getElementById('tabs-tasks').style.display = 'none';
    el = document.getElementById('tabs-priorities').style.display = 'none';
    el = document.getElementById('tabs-urgensy').style.display = 'grid';
  }

  //Добавление задачи
  document.getElementById('addNewTaskBtn').onclick = function() {
    var ul = document.getElementById('tasksList');
    var taskName = document.getElementById('newTaskName').value;
    document.getElementById('newTaskName').value = "";
    var li = document.getElementById('task item').cloneNode(true);
    li.style.display = 'block';
    li.firstElementChild.rows[0].cells[1].firstElementChild.innerText = taskName;
    //li.firstElementChild.rows[0].cells[6].firstElementChild.setAttribute("script", "taskSettingsBtn" + ul.childElementCount);
    ul.appendChild(li);
    //alert(li.id);
  }

  function settingsBtn(el) {
    var nameTask = el.parentElement.parentElement.children[1].firstElementChild.innerText;
    var namePanel = document.getElementById('taskNameSet');
    namePanel.innerText = nameTask;
  }

 document.getElementById('authSubmit').onclick = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Authorisation.php', false, document.getElementById('idAuthUser').value, document.getElementById('idAuthPass').value);
  xhr.send();

  if (xhr.status == 4) {
    alert('Вы успешно авторизировались');
    openCloseAdminMenu();
  }
  else if (xhr.status == 5) {
    alert('Неверные логин и/или пароль');
  } else {
    alert('Произошло нечто. Код: ' + xhr.status);
  }
 }

 document.getElementById('regSubmit').onclick = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Register.php', false, document.getElementById('idAuthUser').value, document.getElementById('idAuthPass').value);
  xhr.send();

  if (xhr.status == 6) {
    alert('Вы успешно зарегистрировались');
    openCloseAdminMenu();
  } else if (xhr.status == 1) {
    alert('Поля для регистрации пустые');
  } else if (xhr.status == 2) {
    alert('Пароли не совпадают');
  } else if (xhr.status == 3) {
    alert('Такой email уже зарегистрирован');
  } else {
    alert('Произошло нечто. Код: ' + xhr.status);
  }
 }