({
    clickTitleBtn: function(component, event, helper) {
        swal('Title');
    },
    clickTitleAndMsgBtn: function(component, event, helper) {
        swal('Title', 'Message');
    },
    clickInfoBtn: function(component, event, helper) {
        swal('Title', 'Message', 'info');
    },
    clickSuccessBtn: function(component, event, helper) {
        swal('Title', 'Message', 'success');
    },
    clickErrorBtn: function(component, event, helper) {
        swal('Title', 'Message', 'error');
    },
    clickWarningBtn: function(component, event, helper) {
        swal('Title', 'Message', 'warning');
    },
})