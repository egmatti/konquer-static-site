// ==========================================
// CHECKOUT PAGES
// ==========================================


$(document).ready(function(){
    $(".billing-address-form .radio-button").click(function () {
        if ($("#new-address").is(":checked")) {
            $(".billing-address-fieldset").css("display", "block");
        } else {
            $(".billing-address-fieldset").css("display", "none");
        }
    }); 
});

