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
//for register
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
$(document).ready(function () {
    var value;
    var ms = $('#skill').magicSuggest({
        placeholder: 'Các kỹ năng yêu cầu',
        allowDuplicates: false,
        maxSelection: 5,
        data: '/valid/tags.php',
    });

    $(ms).on('selectionchange', function () {
        var selected = ms.getSelection();
        value = selected.map(function (item) {
            return item.name;
        }).join(',');
    });
    $('#postNewJobForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập tên dự án"
                        }
                    }
                },
                location: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng chọn địa điểm"
                        }
                    }
                },
                skill: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng chọn kỹ năng"
                        }
                    }
                },
                min_allowance: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập phí thấp nhất"
                        },
                        hex: {
                            message: "Kinh phí phải là số"
                        }
                    }
                },
                max_allowance: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập phí cao nhất"
                        },
                        hex: {
                            message: "Kinh phí phải là số"
                        }
                    }
                },
                job_description: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập mô tả chi tiết "
                        }
                    }
                }
            }
        }).on('success.form.fv', function (e) {
        e.preventDefault();
        var formValue = $("#postNewJobForm").serializeArray();
        var location = $("#location .ms-sel-item").text();
        var job_description = $("#job_description").val();
        job_description = job_description.replace(/\r?\n/g, '<br />');
        var $form = $(e.target);
        $form.ajaxSubmit({
            url: '/job/postNewJob',
            type: 'POST',
            data: {
                formValue: formValue,
                location: location,
                value: value,
                job_description: job_description
            },
            success: function (data) {
                alert(data.mess);
                redirect('/chi-tiet-cong-viec' + '/' + data.title + '/' + data.date);
            },
            error: function () {
                alert("Có lỗi xảy ra vui lòng thử lại");
            }
        });
    });
});


//update user avatar
$(document).ready(function () {
    $("#formAvatar").ajaxForm({
        beforeSend: function () {
            $(".progress").show();
        },
        uploadProgress: function (event, position, total, percentComplete) {
            $(".progress-bar").width(percentComplete + "%");
            $(".sr-only").html(percentComplete + "%");
        },
        success: function (data) {
            $(".progress").hide();
            alert('Cập nhật ảnh đại diện thành công');
            $('.userAvatarUpload').attr("src", "/" + data);
        },
    });
    $(".progress").hide();
});


$(document).on('ready', function () {
    $("#avatar").fileinput({
        browseClass: "btn btn-primary btn-block",
        showCaption: false,
        showRemove: false,
        showUpload: false,
        allowedFileExtensions: ["png", "jpg", "jpeg"],
        elErrorContainer: "#errorBlock"
    });
});
$(document).on('ready', function () {
    $("#descriptionImg").fileinput({
        browseClass: "btn btn-primary btn-block",
        showCaption: false,
        showRemove: false,
        showUpload: false,
        allowedFileExtensions: ["png", "jpg", "jpeg"],
        elErrorContainer: "#errorBlock"
    });
});
$("#register-name").keyup(function () {
    var username = $(this).val();
    $("#username_status").text("....");
    if (username != "") {
        $.post("/valid/client.php", {
            username: username
        }, function (data) {
            $("#username_status").text(data);
            if (data == "Tên đăng nhập đã được sử dụng") {
                $("#regis_btn").attr("disabled", true);
            }
            if (data == "Tên đăng nhập có thể sử dụng") {
                $("#regis_btn").attr("disabled", false);
            }
        });
    }
});

$("#register-email").keyup(function () {
    var email = $(this).val();
    $("#email_status").text("....");
    if (email != "") {
        $.post("/valid/client.php", {
            email: email
        }, function (data) {
            $("#email_status").text(data);
            if (data == "Email đã được sử dụng") {
                $("#regis_btn").attr("disabled", true);
            }
            if (data == "Email có thể sử dụng") {
                $("#regis_btn").attr("disabled", false);
            }
        });
    }
});

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('/') + 1).split('/');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
//ajax paging for comment
$(document).on("click", ".details_pagi .pagination a", function (page) {
    event.preventDefault();
    var slug = getUrlVars()[3];
    var date_param = getUrlVars()[4];
    var date = date_param.split("-").reverse().join("-");
    var page = $(this).attr("href").split("page=")[1];
    $.ajax({
            url: '/comment/' + slug + '/' + date + '?page=' + page,
            data: {
                slug: slug,
                date: date
            },
        })
        .done(function (data) {
            $("#job_comment_post").html(data);
        });

});

$(document).on("click", ".paging_recruit .pagination a", function (page) {
    event.preventDefault();
    var page = $(this).attr("href").split("page=")[1];
    $.ajax({
            url: '/list_recruit/' + '?page=' + page
        })
        .done(function (data) {
            $("#recruit_pagi").html(data);
            $("html, body").animate({
                scrollTop: $(".container").position().top
            })
        });
});


//ajax paging for job list
$(document).on("click", ".paging_job .pagination a", function (t) {
    event.preventDefault();
    var o = $(this).attr("href").split("page=")[1];
    getJob(o), $("html, body").animate({
        scrollTop: $(".container").position().top
    })
});

function getJob(t) {
    $.ajax({
        url: "/job/joblist?page=" + t
    }).done(function (o) {
        $("#ajax_pagi").html(o), location.hash = t
    })
}
//ajax paging for tag job
$(document).on("click", ".tag_job .pagination a", function (page) {
    event.preventDefault();
    var name = getUrlVars()[3];
    var page = $(this).attr("href").split("page=")[1];
    $.ajax({
            url: '/congviec/' + name + '?page=' + page,
            data: {
                name: name,
            },
        })
        .done(function (data) {
            $("#ajax_pagi_tag").html(data);
            $("html, body").animate({
                scrollTop: $(".container").position().top
            })
        });

});

$(document).ready(function () {
    $("#allowance").blur(function () {
        var allowance = $(this).val();
        $("#allowance").val(addCommas(allowance));
    });

});
$(document).ready(function () {
    $("#min-allowance").blur(function () {
        var allowance = $(this).val();
        $("#min-allowance").val(addCommas(allowance));
    });

});
$(document).ready(function () {
    $("#max-allowance").blur(function () {
        var allowance = $(this).val();
        $("#max-allowance").val(addCommas(allowance));
    });

});
//split the string
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
//edit comment using ajax
$(function () {
    var message_status = $("#message");
    $("td[contenteditable=true]").blur(function () {
        var field_id = $(this).attr('id');
        var value = $(this).text();
        $.post('/valid/comment.php', field_id + "=" + value, function (data) {
            if (data != '') {
                message_status.show();
                message_status.text(data);
                setTimeout(function () {
                    message_status.hide()
                }, 3000);
            }
        });
    });
});
//delete comment
$(document).ready(function () {
    var message_status = $("#message");
    $(".delComment").on('click', function () {
        if (ConfirmDelete()) {
            var id = $(this).attr('data-id');

            $.ajax({
                url: '/deleteComment/' + id,
                type: 'GET',
                async: false,
                data: id,
                success: function (data) {
                    alert(data.mess);
                }
            })
            $(this).parent().parent().remove();
        }

    });
});

function ConfirmDelete() {
    var x = confirm("Bạn có chắc chắn muốn xóa");
    if (x)
        return true;
    else
        return false;
}

$('#forgot_pass').on('click', function () {
    $("#login").css("display", "none");
    $("#forgot_pass").css("margin-top", "10%");
});

$(function () {
    $('#location').magicSuggest({
        placeholder: 'Khu vực',
        allowDuplicates: false,
        maxSelection: 1,
        data: '/valid/province.php'
    });
});


//delete cv
$(".deleteCV").click(function (e) {
    if (ConfirmDelete()) {
        var token = $("input[name='_token']").val();
        var id = $(this).attr('data-id');

        $.ajax({
            url: '/cv/xoa-cv/' + id,
            type: 'GET',
            data: {
                _token: token,
                id: id
            },
            success: function (data) {
                alert(data.mess);

            }

        })
        $(this).parent().parent().remove();
    }
    else
        return false;
});
//assignJob
$("#assignJob").click(function (event) {
    event.preventDefault();
    var conf = confirm("Bạn có chắc chắn muốn giao việc cho người này ?");
    if (conf) {
        var job_id = $(this).attr('data-post');
        var user_assign = $(this).attr('data-comment');
        var user_post = $(this).attr('data-user');
        var token = $("input[name='_token']").val();
        $.ajax({
            url: '/assignCurJob',
            type: 'POST',
            data: {
                job_id: job_id,
                user_assign: user_assign,
                user_post: user_post,
                _token: token
            },
            error: function () {
                alert("Có lỗi vui lòng thử lại");
            },
            success: function (response) {
                alert(response.mess);
            }
        })
    }
});

$(".delJobUserPost").click(function (event) {
    var conf = confirm("Bạn có chắc chắn xóa công việc ?");
    if (conf) {
        var job_id = $(this).attr('data-id');
        $.ajax({
            url: '/delJobUserPost',
            type: 'GET',
            async: false,
            data: {
                job_id: job_id,
            },
            error: function () {
                alert("Có lỗi vui lòng thử lại");
            },
            success: function (response) {
                alert(response.mess);
            }
        })
        $(this).parent().parent().remove();
    }
});
//post comment
$(document).ready(function () {
    $('#postNewRecruit')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập tên dự án"
                        }
                    }
                },
                location: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng chọn địa điểm"
                        }
                    }
                },
                salary_number: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập mức lương"
                        }
                    }
                },
                experience_year: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập kinh nghiệm"
                        },
                        hex: {
                            message: "Kinh nghiệm phải là số"
                        }
                    }
                },
                quantity: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập phí số lượng"
                        },
                        hex: {
                            message: "Vui lòng nhập số"
                        }
                    }
                },
                content: {
                    validators: {
                        notEmpty: {
                            message: "Vui lòng nhập phí yêu cầu công việc"
                        }
                    }
                },
            }
        })
        .on('success.form.fv', function (e) {
            e.preventDefault();
            var formValue = $("#postNewRecruit").serializeArray();
            var location = $("#location .ms-sel-item").text();
            var job_description = $("#content").val();
            job_description = job_description.replace(/\r?\n/g, '<br />');
            var $form = $(e.target);
            $form.ajaxSubmit({
                url: '/job/postNewRecruit',
                type: 'POST',
                data: {
                    formValue: formValue,
                    location: location,
                    job_description: job_description
                },
                success: function (data) {
                    alert(data.mess);
                    redirect('/tin-tuyen-dung' + '/' + data.title + '/' + data.date);
                },
                error: function () {
                    alert("Có lỗi xảy ra vui lòng thử lại");
                }
            });
        });
});

$(".delJobRecruit").click(function (event) {
    var conf = confirm("Bạn có chắc chắn xóa công việc ?");
    if (conf) {
        var job_id = $(this).attr('data-id');
        $.ajax({
            url: '/delJobRecruit',
            type: 'GET',
            async: false,
            data: {
                job_id: job_id,
            },
            error: function () {
                alert("Có lỗi vui lòng thử lại");
            },
            success: function (response) {
                alert(response.mess);
            }
        })
        $(this).parent().parent().remove();
    }
});

$(function () {
    $("#addClass").click(function () {
        $('#message_popup').addClass('popup-box-on');
    });

    $("#removeClass").click(function () {
        $('#message_popup').removeClass('popup-box-on');
    });
})
//send message in details page
$('#sendMess').click(function (event) {
    var msg = $("#messageInput").val();
    if (msg == '') {
        return false;
    }
    var avatar = $("#user_avatar").attr('src');
    var from_user = $("#message_popup").data('auth');
    var to_user = $("#message_popup").data('userpost');
    var token = $("input[name='_token']").val();
    $.ajax({
            url: '/message/new',
            type: 'POST',
            data: {
                message: msg,
                from_user: from_user, to_user: to_user, _token: token
            }
        })
        .success(function (data) {
            var cur_time = new Date().toTimeString().split(" ")[0];
            var newContent = '<div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">' + from_user + '</span></div><img alt="message user image" src="' + avatar + '" class="direct-chat-img"><div class="direct-chat-text">' + msg + '</div><div class="direct-chat-info clearfix"><span class="direct-chat-timestamp pull-right">' + cur_time + '</span></div>';
            $("#messages").append(newContent);
        })
        .error(function () {
            alert("Có lỗi xảy ra");
        });
})
//get message in message page
$(".conversation").click(function () {
    var name = $(this).attr('id');
    var token = $("input[name='_token']").val();
    $.ajax({
            url: '/getMessage',
            type: 'GET',
            data: {
                name: name,
                _token: token
            },
        })
        .error(function () {
            alert("Có lỗi xảy ra vui lòng thử lại");
        })
        .success(function (data) {
            $("#messages_details").html(data);
            //send message in message page
            $('#sendMessDetails').click(function () {
                var msg = $("#messageContent").val();
                if (msg == '') {
                    return false;
                }
                var avatar = $("#user_avatar").attr('src');
                var to_user = name;
                var from_user = $("#welcome_user").text();
                var token = $("input[name='_token']").val();
                $.ajax({
                        url: '/message/newMessageDetials',
                        type: 'POST',
                        data: {
                            message: msg,
                            to_user: to_user,
                            _token: token
                        }
                    })
                    .success(function (data) {
                        var cur_time = new Date().toTimeString().split(" ")[0];
                        var newContent =
                            '<div class="media msg "><a class="pull-left" href="#"><img class="media-object" style="width: 50px; height: 50px;" src="' + avatar + '"></a><div class="media-body"> <small class="pull-right time"><i class="fa fa-clock-o"></i> ' + cur_time + '</small><h5 class="media-heading">' + from_user + '</h5><small>' + msg + '</small></div></div>';
                        $("#messages_details").append(newContent);
                        $("#messageContent").val('');
                    })
                    .error(function () {
                        alert("Có lỗi xảy ra");
                    });
            })
        });
});

//allowance range slider
$("#allowance_filter").slider({
    min: 100000,
    max: 10000000,
    value: [100000, 10000000],
    step: 100000,
    focus: true
});
//change event send value to ajax to query
$("#allowance_filter").on("slideStop", function (slideEvt) {
    var rangeValue=slideEvt.value;
    $.ajax({
        url:'/get_job_by_filter',
        data: {rangeValue: rangeValue}
    })
    .error(function() {
       alert("Có lỗi xảy ra vui lòng thử lại");
    })
    .success(function(data) {
        $("#jobs_content").html(data);
        $(".paging_job").hide();
    })
    .always(function() {
        console.log("complete");
    });

});



