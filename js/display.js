$(document).ready(function(){
    $(window).bind("load", function() {
        var mobileDefault = false;
        if ($(window).width() < 550) {
            mobileDefault = true;
        }
        var mainContentHeight = $("article").outerHeight(true);
        var sideMenuHeight = $("#menu-wrapper").outerHeight(true);
        if ($(window).width() > 800) {
            if($("article").length > 0) {
                if (sideMenuHeight + 430 < window.innerHeight) {
                    if ((sideMenuHeight + 122) < mainContentHeight) {
                        $("#sharing-tab").show();
                    } else {
                        $("#sharing-tab2").show();
                    }
                } else {
                    if ((sideMenuHeight + 122) < mainContentHeight) {
                        $("#sharing-tab2").show();
                    } else {
                        $("#sharing-tab").show();
                    }
                }
            } else {
                if (sideMenuHeight + 430 < $("#main-content").height() - 30) {
                        $("#sharing-tab").show();
                } else {
                    $("#sharing-tab2").show();
                }
            }
        } else if ($(window).width() < 550) {
            if ($('#sidebar-right .box').length > 0) {
                $("#sharing-tab2").show();
                $("#sidebar-right").css("margin-top", "43px");
            } else {
                $("#sharing-tab").show();
            }
        } else if ($(window).width() >= 550 && $(window).width() < 800) {
            if ($('#sidebar-right .box').length > 0) {
                $("#sharing-tab2").show();
            } else {
                $("#sharing-tab").show();
            }
        } else {
            $("#sharing-tab").show();
        }
        $(window).resize(function() {
            $("#sharing-tab").hide();
            $("#sharing-tab2").hide();
            if ($(window).width() > 800) {
                if (window.innerHeight - (sideMenuHeight + 430) < 0) {
                    $("#sharing-tab2").show();
                } else {
                    if (sideMenuHeight + 430 < window.innerHeight) {
                        if (mainContentHeight - sideMenuHeight > 1) {
                            if (mainContentHeight - sideMenuHeight > 128) {
                                if (mobileDefault) {
                                    $("#sharing-tab2").show();
                                } else {
                                    $("#sharing-tab").show();
                                }
                            } else {
                                $("#sharing-tab2").show();
                            }
                        } else {
                            $("#sharing-tab2").show();
                        }
                    } else {
                        $("#sharing-tab").show();
                    }
                }
            }
            if ($(window).width() >= 550 && $(window).width() < 800) {
                if ($('#sidebar-right .box').length > 0) {
                    $("#sharing-tab2").show();
                } else {
                    $("#sharing-tab").show();
                }
            }
            if ($(window).width() < 550) {
                $("#sharing-tab").hide();
                $("#sharing-tab2").show();
                $("#sidebar-right").css("margin-top", "43px");
            }

        });
        $(window).scroll(function() {
           //for future ideas on what happens when scrolling
        });
    });
});