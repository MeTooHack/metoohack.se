$("#scroll-to-faq").click(function() {
    $('html, body').animate({
        scrollTop: $("section.faq h1.title").offset().top
    }, 1000);
});

$("#scroll-to-registration").click(function() {
    $('html, body').animate({
        scrollTop: $("section.registration h1.title").offset().top
    }, 1000);
});

$("#email-signup").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  var $emailInput = $form.find("input[type=email]");
  var $btn = $form.find(".button");

  $btn.addClass("is-loading");

  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("You are now signed up to get news about #MeToo Hack");
    $emailInput.val('');
    $btn.removeClass("is-loading");
  });
});
