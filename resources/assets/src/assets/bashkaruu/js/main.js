'use strict';

/*

Main javascript functions to init most of the elements

#1. CHAT APP
#2. CALENDAR INIT
#3. FORM VALIDATION
#4. DATE RANGE PICKER
#5. DATATABLES
#6. EDITABLE TABLES
#7. FORM STEPS FUNCTIONALITY
#8. SELECT 2 ACTIVATION
#9. CKEDITOR ACTIVATION
#10. CHARTJS CHARTS http://www.chartjs.org/
#11. MENU RELATED STUFF
#12. CONTENT SIDE PANEL TOGGLER
#13. EMAIL APP
#14. FULL CHAT APP
#15. CRM PIPELINE
#16. OUR OWN CUSTOM DROPDOWNS 
#17. BOOTSTRAP RELATED JS ACTIVATIONS
#18. TODO Application
#19. Fancy Selector
#20. SUPPORT SERVICE

*/

// ------------------------------------
// HELPER FUNCTIONS TO TEST FOR SPECIFIC DISPLAY SIZE (RESPONSIVE HELPERS)
// ------------------------------------

function is_display_type(display_type) {
    return $('.display-type').css('content') == display_type || $('.display-type').css('content') == '"' + display_type + '"';
}
function not_display_type(display_type) {
    return $('.display-type').css('content') != display_type && $('.display-type').css('content') != '"' + display_type + '"';
}

$(function () {


    // #2. CALENDAR INIT

    if ($("#fullCalendar").length) {
        var calendar, d, date, m, y;

        date = new Date();

        d = date.getDate();

        m = date.getMonth();

        y = date.getFullYear();

        calendar = $("#fullCalendar").fullCalendar({
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,agendaWeek,agendaDay"
            },
            selectable: true,
            selectHelper: true,
            select: function select(start, end, allDay) {
                var title;
                title = prompt("Event Title:");
                if (title) {
                    calendar.fullCalendar("renderEvent", {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    }, true);
                }
                return calendar.fullCalendar("unselect");
            },
            editable: true,
            events: [{
                title: "Long Event",
                start: new Date(y, m, 3, 12, 0),
                end: new Date(y, m, 7, 14, 0)
            }, {
                title: "Lunch",
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d + 2, 14, 0),
                allDay: false
            }, {
                title: "Click for Google",
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: "http://google.com/"
            }]
        });
    }

    // #3. FORM VALIDATION

    if ($('#formValidate').length) {
        $('#formValidate').validator();
    }

    // #5. DATATABLES

    if ($('#formValidate').length) {
        $('#formValidate').validator();
    }
    if ($('#dataTable1').length) {
        $('#dataTable1').DataTable({ buttons: ['copy', 'excel', 'pdf'] });
    }
    // #6. EDITABLE TABLES

    if ($('#editableTable').length) {
        $('#editableTable').editableTableWidget();
    }

    // #7. FORM STEPS FUNCTIONALITY

    $('.step-trigger-btn').on('click', function () {
        var btn_href = $(this).attr('href');
        $('.step-trigger[href="' + btn_href + '"]').click();
        return false;
    });

    // FORM STEP CLICK
    $('.step-trigger').on('click', function () {
        var prev_trigger = $(this).prev('.step-trigger');
        if (prev_trigger.length && !prev_trigger.hasClass('active') && !prev_trigger.hasClass('complete')) return false;
        var content_id = $(this).attr('href');
        $(this).closest('.step-triggers').find('.step-trigger').removeClass('active');
        $(this).prev('.step-trigger').addClass('complete');
        $(this).addClass('active');
        $('.step-content').removeClass('active');
        $('.step-content' + content_id).addClass('active');
        return false;
    });
    // END STEPS FUNCTIONALITY


    // #8. SELECT 2 ACTIVATION

    if ($('.select2').length) {
        $('.select2').select2();
    }

    // #9. CKEDITOR ACTIVATION

    if ($('#ckeditor1').length) {
        CKEDITOR.replace('ckeditor1');
    }

 
    // #11. MENU RELATED STUFF

    // INIT MOBILE MENU TRIGGER BUTTON
    $('.mobile-menu-trigger').on('click', function () {
        $('.menu-mobile .menu-and-user').slideToggle(200, 'swing');
        return false;
    });

    // INIT MENU TO ACTIVATE ON HOVER
    var menu_timer;
    $('.menu-activated-on-hover ul.main-menu > li.has-sub-menu').mouseenter(function () {
        var $elem = $(this);
        clearTimeout(menu_timer);
        $elem.closest('ul').addClass('has-active').find('> li').removeClass('active');
        $elem.addClass('active');
    });
    $('.menu-activated-on-hover ul.main-menu > li.has-sub-menu').mouseleave(function () {
        var $elem = $(this);
        menu_timer = setTimeout(function () {
            $elem.removeClass('active').closest('ul').removeClass('has-active');
        }, 30);
    });

    // INIT MENU TO ACTIVATE ON CLICK
    $('.menu-activated-on-click li.has-sub-menu > a').on('click', function (event) {
        var $elem = $(this).closest('li');
        if ($elem.hasClass('active')) {
            $elem.removeClass('active');
        } else {
            $elem.closest('ul').find('li.active').removeClass('active');
            $elem.addClass('active');
        }
        return false;
    });

    // #12. CONTENT SIDE PANEL TOGGLER

    $('.content-panel-toggler, .content-panel-close, .content-panel-open').on('click', function () {
        $('.all-wrapper').toggleClass('content-panel-active');
    });

   

    // CKEDITOR ACTIVATION FOR MAIL REPLY
    if (typeof CKEDITOR !== 'undefined') {
        CKEDITOR.disableAutoInline = true;
        if ($('#ckeditorEmail').length) {
            CKEDITOR.config.uiColor = '#ffffff';
            CKEDITOR.config.toolbar = [['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About']];
            CKEDITOR.config.height = 110;
            CKEDITOR.replace('ckeditor1');
        }
    }

    // EMAIL SIDEBAR MENU TOGGLER
    $('.ae-side-menu-toggler').on('click', function () {
        $('.app-email-w').toggleClass('compact-side-menu');
    });

    // EMAIL MOBILE SHOW MESSAGE
    $('.ae-item').on('click', function () {
        $('.app-email-w').addClass('forse-show-content');
    });

    if ($('.app-email-w').length) {
        if (is_display_type('phone') || is_display_type('tablet')) {
            $('.app-email-w').addClass('compact-side-menu');
        }
    }

   

    // #15. CRM PIPELINE
    if ($('.pipeline').length) {
        // INIT DRAG AND DROP FOR PIPELINE ITEMS
        var dragulaObj = dragula($('.pipeline-body').toArray(), {}).on('drag', function () { }).on('drop', function (el) { }).on('over', function (el, container) {
            $(container).closest('.pipeline-body').addClass('over');
        }).on('out', function (el, container, source) {

            var new_pipeline_body = $(container).closest('.pipeline-body');
            new_pipeline_body.removeClass('over');
            var old_pipeline_body = $(source).closest('.pipeline-body');
        });
    }

    // #16. OUR OWN CUSTOM DROPDOWNS 
    $('.os-dropdown-trigger').on('mouseenter', function () {
        $(this).addClass('over');
    });
    $('.os-dropdown-trigger').on('mouseleave', function () {
        $(this).removeClass('over');
    });


    // #18. TODO Application

    // Tasks foldable trigger
    $('.tasks-header-toggler').on('click', function () {
        $(this).closest('.tasks-section').find('.tasks-list-w').slideToggle(100);
        return false;
    });

    // Sidebar Sections foldable trigger
    $('.todo-sidebar-section-toggle').on('click', function () {
        $(this).closest('.todo-sidebar-section').find('.todo-sidebar-section-contents').slideToggle(100);
        return false;
    });

    // Sidebar Sub Sections foldable trigger
    $('.todo-sidebar-section-sub-section-toggler').on('click', function () {
        $(this).closest('.todo-sidebar-section-sub-section').find('.todo-sidebar-section-sub-section-content').slideToggle(100);
        return false;
    });

    // Drag init
    if ($('.tasks-list').length) {
        // INIT DRAG AND DROP FOR Todo Tasks
        var dragulaTasksObj = dragula($('.tasks-list').toArray(), {
            moves: function moves(el, container, handle) {
                return handle.classList.contains('drag-handle');
            }
        }).on('drag', function () { }).on('drop', function (el) { }).on('over', function (el, container) {
            $(container).closest('.tasks-list').addClass('over');
        }).on('out', function (el, container, source) {

            var new_pipeline_body = $(container).closest('.tasks-list');
            new_pipeline_body.removeClass('over');
            var old_pipeline_body = $(source).closest('.tasks-list');
        });
    }

    // Task actions init

    // Complete/Done
    $('.task-btn-done').on('click', function () {
        $(this).closest('.draggable-task').toggleClass('complete');
        return false;
    });

    // Favorite/star
    $('.task-btn-star').on('click', function () {
        $(this).closest('.draggable-task').toggleClass('favorite');
        return false;
    });

    // Delete
    var timeoutDeleteTask;
    $('.task-btn-delete').on('click', function () {
        if (confirm('Are you sure you want to delete this task?')) {
            var $task_to_remove = $(this).closest('.draggable-task');
            $task_to_remove.addClass('pre-removed');
            $task_to_remove.append('<a href="#" class="task-btn-undelete">Undo Delete</a>');
            timeoutDeleteTask = setTimeout(function () {
                $task_to_remove.slideUp(300, function () {
                    $(this).remove();
                });
            }, 5000);
        }
        return false;
    });

    $('.tasks-list').on('click', '.task-btn-undelete', function () {
        $(this).closest('.draggable-task').removeClass('pre-removed');
        $(this).remove();
        if (typeof timeoutDeleteTask !== 'undefined') {
            clearTimeout(timeoutDeleteTask);
        }
        return false;
    });

    // #19. Fancy Selector
    $('.fs-selector-trigger').on('click', function () {
        $(this).closest('.fancy-selector-w').toggleClass('opened');
    });

    // #20. SUPPORT SERVICE

    $('.close-ticket-info').on('click', function () {
        $('.support-ticket-content-w').addClass('folded-info').removeClass('force-show-folded-info');
        return false;
    });

    $('.show-ticket-info').on('click', function () {
        $('.support-ticket-content-w').removeClass('folded-info').addClass('force-show-folded-info');
        return false;
    });

    $('.support-index .support-tickets .support-ticket').on('click', function () {
        $('.support-index').addClass('show-ticket-content');
        return false;
    });

    $('.support-index .back-to-index').on('click', function () {
        $('.support-index').removeClass('show-ticket-content');
        return false;
    });
});