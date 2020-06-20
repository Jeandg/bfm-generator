
function initIconPicker() {
  $('input[type="text"].use-material-icon-picker').each(function () {
    // Add the current icon as a prefix, and update when the field changes.
    $previousIcon = $('<i class="material-icons material-icon-picker-prefix prefix"></i>');
    $previousIcon.on('click', function () {
      $picker.fadeIn(200);
    });
    $(this).before($previousIcon);
    $(this).on('change keyup', function () {
      $(this).prev().text($(this).val());
    });
    $(this).prev().text($(this).val());
    // Append the picker and the search box.
    var $picker = $('<div class="modal material-icon-picker" tabindex="-1"></div>');
    var $search = $('<input type="text" placeholder="Rechercher...">');
    // Do simple filtering based on the search.
    $search.on('keyup', function () {
      var search = $search.val().toLowerCase();
      var $icons = $(this).siblings('.icons');
      $icons.find('i').css('display', 'none');
      $icons.find('i:contains('+search+')').css('display', 'inline-block');
    });
    $picker.append($search);
    // Append each icon into the picker.
    var $icons = $('<div class="icons"></div>');
    function onIconClick() {
      $(this).closest('.material-icon-picker').prev().val($(this).text()).trigger('change');
      $picker.fadeOut(200);
    }
    material_icons.forEach(function (icon) {
      var $icon = $('<i class="material-icons"></i>');
      $icon.text(icon);
      $icon.on('click', onIconClick);
      $icons.append($icon);
    });
    // Show the picker when the input field gets focus.
    $picker.append($icons).hide();
    $(this).after($picker);
    $(this).hide();
  });
  // Hide any picker when it or the input field loses focus.
  $(document).on('mouseup', function (e) {
    var $picker = $('.material-icon-picker');
    if ($picker.length && !$picker.is(e.target) && !$(e.target).hasClass('use-material-icon-picker') && $picker.has(e.target).length === 0) {
      $picker.fadeOut(200);
    }
  });
};
