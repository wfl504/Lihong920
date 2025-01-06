const users = [
  { username: '莫雄', number: '901', password: '520920' },
  { username: '李红', number: '920', password: '520901' },
  { username: 'admin', number: '1001', password: 'adminpass' },
];
// $(function () {
// })
// import users from '../libs/users.js';
function login() {
  // var zh = document.getElementById('#number').value;
  // var mm = document.getElementById('#password').value;
  var zh = $('#number').val();
  var mm = $('#password').val();
  if (zh === '' || mm === '') {
    $('#span-text').text('请输入账号或密码');
    return false;
  }
  $('#span-text').text('');

  var user = users.find(u => zh === u.number && mm === u.password);
  if (user) {
    alert('欢迎 ' + user.username + '，登录成功！');
    window.location.href = 'https://wfl504.github.io/Lihong920/top/index.html';
    return true;
  } else {
    $('#span-text').text('账号或密码不正确');
  }
  return false;
}


//账号
function isNumberExists(number) {
  return users.some(user => user.number === number);
}
//用户名
function isUsernameExists(username) {
  return users.some(user => user.username === username);
}

function jieco() {
  var zh = $("#tetxNo").val().trim();
  var xm = $("#textname").val().trim();
  var mm = $("#txtpwd").val();
  var qrmm = $("#textpwds").val();

  // 账号验证
  if (zh.length === 0) {
    $('#tip').text('请输入账号');
    return false;
  }
  if (zh.length < 3) {
    $('#tip').text('账号最少3位');
    return false;
  }
  $('#tip').text('');

  // 密码验证
  if (mm.length === 0) {
    $('#tip').text('请输入密码');
    return false;
  }
  if (mm.length < 4) {
    $('#tip').text('密码最少4位');
    return false;
  }
  $('#tip').text('');

  // 确认密码验证
  if (qrmm.length === 0) {
    $('#tip').text('请确认密码');
    return false;
  }
  if (mm !== qrmm) {
    $('#tip').text('两次输入的密码不一致');
    return false;
  }
  $('#tip').text('');

  // 检查账号是否已存在
  if (isNumberExists(zh)) {
    alert('该账号已存在');
    return false;
  }else{
    const newUser = { username: xm, number: zh, password: mm };
    users.push(newUser);
    console.log(users);
    alert('注册成功');
    window.location.href = '../Login.html';
    return true;
  }

  // 检查用户名是否已存在
  // if (isUsernameExists(xm)) {
  //     alert('该用户名已存在');
  //     return false;
  // }

  // 注册成功，添加新用户
  // users.push({ username: xm, number: zh, password: mm });
  // console.log(users);
  // alert('注册成功');
  // window.location.href = '../Login.html';
  // return false;
}
// ajax提交
//     $.ajax({
//         url: 'http://127.0.0.1:5500/top/register.html',
//         type: 'post',
//         data: {
//             username: '' + xm,
//             number: '' + zh,
//             password: '' + mm,
//         },
//         success: function(data) {
//             if (data.code === 200) {
//                 alert('注册成功');
//                 window.location.href = '../Login.html';
//             } else {
//                 alert(data.msg);
//             }
//         },
//         error: function() {
//             alert('注册失败');
//         }
//     });


//忘记密码
function forget() {
  alert('请联系1786565352@qq.com管理员')
}