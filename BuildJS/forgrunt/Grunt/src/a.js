function redirect(url) {
    window.location = url;
}
function loader(status) {
    if (status == "on") {
        $("#login_form").css({
            opacity: 0.2
        });
        $("#loading").show();
    } else {
        $("#login_form").css({
            opacity: 1
        });
        $("#loading").hide();
    }
}
//login ajax
$(document).ready(function () {
    $('#login_form')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                usernameLogin: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập tên đăng nhập'
                        }
                    }
                },
                passwordLogin: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập mật khẩu'
                        }
                    }
                },
            }
        })
        .on('success.form.fv', function (e) {
            e.preventDefault();
            var login_form = $("#login_form").serializeArray();
            var url = $("#login_form").attr('action');
            loader('on');
            $.post(url, login_form, function (data) {
                loader('off');
                if (data == 'fail') {
                    $("#message").text('Username hoặc password sai hoặc tài khoản chưa kích hoạt');
                    $("#message").show();
                } else {
                    $("#message").text('Đăng nhập thành công vui lòng đợi .....');
                    $("#message").show();
                    redirect('/trang-chu');
                }
            });
        });
});