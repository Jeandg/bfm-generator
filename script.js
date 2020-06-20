$(document).ready(function() {
  generateForm();
});

function random() {
  $('#brand_name').val(french_words[Math.floor(Math.random() * french_words.length)]);
  $("#material_icon").val(material_icons[Math.floor(Math.random() * material_icons.length)]);
  $('#brand_color').val(getRandomColor());
  $('#icon_color').val(getRandomColor());
  generateLogo()
}

function generateLogo() {
  var brand_name = $('#brand_name').val().toUpperCase();
  var brand_color = $('#brand_color').val();
  var icon_color = $('#icon_color').val();
  var material_icon = $("#material_icon").val();

  var formattedBrandName = getFormattedBrandNameFromRaw(brand_name);
  $("#form").html("");

  $(document.body).css("background", brand_color);

  $("#result").html(`
    <br><br><br><img src="bfm.png" width="300"/><br>
    <span style="font-family: \'Archivo Narrow\'; color: white; font-size: 50px; font-weight: 600;">` + formattedBrandName+ `</span>
    <i class="material-icons material-icon-picker-prefix prefix" style="font-size: 50px;color:` + icon_color + `;">` + material_icon + `</i><br><br>
    <div class="footer_buttons">
      <button id="generate_form" type="button">Générer une autre marque</button>
      <button id="generate_random" type="button">Aléatoire</button>
    </div>
  `);

  $("#generate_form").click(generateForm);
    $("#generate_random").click(function() {
      generateForm();
      random();
  });
};

function generateForm() {
  $("#result").html("");
  $("#form").html(`
    <form id= "form" class="form1" action="">
        <label for="brand_name">Marque</label>
        <input id="brand_name" type="text" placeholder="Paris, Lyon, Quincampoix, ...">

        <label for="brand_color">Couleur de marque</label>
        <input type="color" id="brand_color" name="body" value="#004578">

        <label for="material_icon">Logo</label>
        <input type="text" id="material_icon" class="use-material-icon-picker" value="android" name="icon">

        <label for="icon_color">Couleur du logo</label>
        <input type="color" id="icon_color" name="body" value="#FF9200">

        <button id="generate_button" type="button">Générer mon BFM</button>
        <button id="generate_random" type="button">Aléatoire</button>
    </form>
  </div>
  `);

  $(document.body).css("background", "#FFFFFF");
  initIconPicker();

  $("#generate_button").click(generateLogo);
  $("#generate_random").click(random);
}

function getFormattedBrandNameFromRaw(brandName) {
  var find = 'Y';
  var re = new RegExp(find, 'g');

  var formattedBrandName = brandName.replace(re, '<img src="y.png" width="33" height="50" />');

  var find = 'A';
  var re = new RegExp(find, 'g');
  formattedBrandName = formattedBrandName.replace(re, '<img src="a.png" width="33" height="50" />');

  return formattedBrandName;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
