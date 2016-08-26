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
/for register
$(document).ready(function () {
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
    $('#register_form_popup')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                usernameRegis: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập tên đăng nhập'
                        },
                        stringLength: {
                            min: 5,
                            max: 30,
                            message: 'Tên đăng nhập phải từ 5 - 30 kí tự'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'Tên đăng nhập chỉ gồm chữ,số,dấu ., dấu _ '
                        }
                    }
                },
                fullnameRegis: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập tên hiển thị'
                        }
                    }
                },
                emailRegis: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập email'
                        },
                        emailAddress: {
                            message: "Email không hợp lệ"
                        }
                    }
                },
                passwordRegis: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập mật khẩu'
                        },
                        stringLength: {
                            min: 5,
                            max: 30,
                            message: 'Mật khẩu phải từ 5 - 30 kí tự'
                        },
                    }
                },
                rePassword: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập lại mật khẩu'
                        },
                        identical: {
                            field: "passwordRegis",
                            message: "Mật khẩu bạn nhập không trùng"
                        }
                    }
                },
                captcha: {
                    validators: {
                        callback: {
                            message: 'Kết quả sai',
                            callback: function (value, validator, $field) {
                                var items = $('#captchaOperation').html().split(' '),
                                    sum = parseInt(items[0]) + parseInt(items[2]);
                                return value == sum;
                            }
                        }
                    }
                },
            }
        })
        .on('success.form.fv', function (e) {
            // Prevent form submission
            e.preventDefault();
            var data = $("#register_form_popup").serializeArray();
            var $form = $(e.target);
            $form.ajaxSubmit({
                url: '/user/register',
                type: 'POST',
                data: data,
                success: function (data) {
                    alert(data.mess);
                    window.location.reload();
                },
                error: function (data) {
                    alert("Có lỗi xảy ra vui lòng thử lại");
                }

            });
        });
});
//post comment
$(document).ready(function () {
    $('#commentForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                allowance: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập kinh phí"
                        },
                        hex: {
                            message: "Kinh phí phải là số"
                        }
                    }
                },
                completed_day: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập ngày hoàn thành'
                        },
                        hex: {
                            message: "Ngày hoàn thành phải là số"
                        }
                    }
                },
                introduce: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập giới thiệu bản thân'
                        }
                    }
                },
            }
        })
        .on('success.form.fv', function (e) {
            // Prevent form submission
            e.preventDefault();
            var data = $("#commentForm").serializeArray();
            var $form = $(e.target);
            $form.ajaxSubmit({
                url: '/postComment',
                type: 'POST',
                data: data,
                success: function (data) {
                    alert(data.mess);
                    window.location.reload();
                    $("#commentForm")[0].reset();
                },
                error: function (data) {
                    alert(data.err);
                }

            });
        });
});
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