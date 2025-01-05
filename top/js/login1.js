import users from '../libs/users.js';

// const form = document.getElementById('loginForm');
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
// login(username, password);

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // 防止表单默认提交
//     // 调用登录函数并获取返回值
//     // const loginResult = login(username, password);
//     // login(username, password);

//     // if (loginResult) {
//     //     // 登录成功，跳转到另一个页面
//     //     // window.location.href = '../top/index.html'; // 替换为实际的跳转页面
//     // } else {
//     //     // 登录失败，可以选择不做任何操作或执行其他逻辑
//     // }
// });




// function login(username, password) {
//     // 输入验证
//     if (username.trim() === "" || password.trim() === "") {
//         alert("用户名和密码不能为空！");
//         return false; // 登录失败
//     }

//     const user = users.find(user => user.number === username);

//     if (user) {
//         if (user.password === password) {
//             // alert('登录成功！');
//             return true; // 登录成功
//             // window.location.href = './index.html';
//         } else {
//             alert('密码错误！');
//             return false; // 登录失败
//         }
//     } else {
//         alert('用户不存在！');
//         return false; // 登录失败
//     }
// }