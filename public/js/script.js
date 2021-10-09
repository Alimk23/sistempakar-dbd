const btnMulai = document.querySelector('.btnMulai');
const formSurvey = document.querySelector('.formSurvey');

$('.btnMulai').click(function () {
  formSurvey.classList.toggle('d-none');
  btnMulai.classList.toggle('d-none');
});

$(function () {
  $('.tampilModalKeterangan').on('click', function () {
    const id = $(this).data('id');
    $.ajax({
      url: 'http://localhost:8080/user/history/getDataKeterangan',
      data: { id: id },
      method: 'post',
      dataType: 'json',
      success: function (data) {
        $('#penyakit').val(data.penyakit);
        $('#keterangan').val(data.keterangan);
        console.log(data);
      },
    });
  });
});
$(function () {
  $('.tampilModalEditProfil').on('click', function () {
    const id = $(this).data('id');
    $.ajax({
      url: 'http://localhost:8080/user/profile/getDataUser',
      data: { id: id },
      method: 'post',
      dataType: 'json',
      success: function (data) {
        $('#usernameProfile').val(data.username);
        $('#nama').val(data.nama);
        $('#tempat_lahir').val(data.tempat_lahir);
        $('#tanggal_lahir').val(data.tanggal_lahir);
        $('#gender').val(data.gender);
        $('#emailProfile').val(data.email);
        $('#alamatProfile').val(data.alamat);
        console.log(data);
      },
    });
  });
});
