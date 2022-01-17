window.onload = function(){
    // 邮箱正则表达式
    let mail_rep = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    // 是否有重复字符
    let repeat_rep = /(.).*\1/g;

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let check = document.getElementById("check");
    let submit = document.getElementById("submit");
    let underline = document.getElementsByClassName("underline");

    let email_str, password_str, check_str;
    let email_flag, password_flag, check_flag;

    submit.onclick = function(){
        
        let str = "";
        email_flag = true, password_flag = true, check_flag = true;

        email_str = email.value;
        password_str = password.value;
        check_str = check.value;

        for (let i = 0; i < underline.length; i++)
        {
            changeColor(underline[i], "#2c6fdb");
        }

        if (email_str && password_str && check_str){

            if (!email_str.match(mail_rep))
            {
                email_flag = false;
                str += "邮箱格式错误\n";
            }

            if ( !(password_str.length >= 9 && password_str.length <= 15) )
            {
                password_flag = false;
                str += "密码长度需要在 9~15 之间\n";
            }
            if ( password_str.match(repeat_rep) )
            {
                password_flag = false;
                str += "密码不可出现重复字符\n";
            }
            if ( /[019]/g.test(password_str) )
            {
                password_flag = false;
                str += "密码中的数字需要在[2-8]之间\n"
            }
            let arr = password_str.match(/[A-Z]/g);
            if ( !arr || arr.length != 3)
            {
                password_flag = false;
                str += "密码中必须包含3个大写字母\n";
            }
            if ( !(/[#&*?]/g.test(password_str)) )
            {
                password_flag = false;
                str += "密码中至少需要包含[#&*?]中的一个\n"
            }

            if (password_str != check_str)
            {
                check_flag = false;
                str += "两次输入密码不一致\n";
            }

            if (email_flag && password_flag && check_flag)
            {
                alert("登入验证成功")
                return true;
            }
            if (!email_flag)
            {
                changeColor(underline[0], "red");
            }
            if (!password_flag)
            {
                changeColor(underline[1], "red");
            }
            if (!check_flag)
            {
                changeColor(underline[2], "red");
            }
            alert(str)
            return false
        }
    }

    function changeColor(el, color)
    {
        el.style.backgroundColor = color
    }
}