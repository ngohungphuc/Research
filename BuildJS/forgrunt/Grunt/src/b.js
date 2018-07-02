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