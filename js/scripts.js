var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

// Fetch all details element
const details = Array.from(document.querySelectorAll("details"));

// Add onclick listeners
details.forEach(targetDetail => {
  targetDetail.addEventListener("click", () => {
    // Close all details that are not targetDetail
    details.forEach(detail => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
