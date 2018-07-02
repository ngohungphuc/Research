//for user who login to update password 
$(document).ready(function () {
    $('#formNewPassword')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                newpassword: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập mật khẩu"
                        },
                        stringLength: {
                            min: 5,
                            max: 30,
                            message: 'Mật khẩu nhập phải từ 5 - 30 kí tự'
                        },
                    }
                },
                repassword: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập mật khẩu"
                        },
                        stringLength: {
                            min: 5,
                            max: 30,
                            message: 'Mật khẩu nhập phải từ 5 - 30 kí tự'
                        },
                        identical: {
                            field: "newpassword",
                            message: "Mật khẩu bạn nhập không trùng"
                        }

                    }
                }
            }
        })
        .on('success.form.fv', function (e) {
            e.preventDefault();
            var data = $("#formNewPassword").serialize();
            var $form = $(e.target);
            $form.ajaxSubmit({
                url: '/updatePassword',
                type: 'POST',
                data: data,
                success: function (data) {
                    alert(data.mess);
                    $("#formNewPassword")[0].reset();
                },
                error: function () {
                    alert("Có lỗi xảy ra vui lòng thử lại");
                }
            });
        });
});

//for user forgot pass send them email to get newpass
$(document).ready(function () {
    $('#forgotpassForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                emailForgot: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập tên email'
                        }
                    }
                },
            }
        })
        .on('success.form.fv', function (e) {
            e.preventDefault();
            var data = $("#forgotpassForm").serializeArray();
            var $form = $(e.target);
            $form.ajaxSubmit({
                url: '/findPassword',
                type: 'POST',
                data: data,
                success: function (response) {
                    alert(response.mess);
                    $("#forgotpassForm")[0].reset();
                },
                error: function () {
                    alert("Có lỗi xảy ra vui lòng thử lại");
                }
            });
        });
});
//update new password for user forgot password
$(document).ready(function () {
    $('#newpassReset')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                newpassword: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập mật khẩu"
                        },
                        stringLength: {
                            min: 5,
                            max: 30,
                            message: 'Mật khẩu phải từ 5 - 30 kí tự'
                        }
                    }
                }
            }
        })
        .on('success.form.fv', function (e) {
            e.preventDefault();
            var data = $("#newpassReset").serializeArray();
            var $form = $(e.target);
            $form.ajaxSubmit({
                url: '/password/new',
                type: 'POST',
                data: data,
                success: function (data) {
                    alert(data.mess);
                    $("#newpassReset")[0].reset();
                },
                error: function () {
                    alert("Có lỗi xảy ra vui lòng thử lại");
                }
            });
        });
});
//post new job