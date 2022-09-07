// tangkap elemen absensi form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// kita buat array untuk menampung data absensi
let absensi_data = [];

//tambahkan event listener submit ke element absensi_form
absensi_form.addEventListener('submit', (event) => {
  // mencegah form dari reload page
  event.preventDefault();

  // console.info(event.target.fullname.value);
  let fullname = event.target.fullname.value;
  console.info(fullname);

  //validasi !
  if (fullname == '') {
    alert('Silahkan masuk nama lengkap');
    return;
  }

  //push data ke dalam array absensi data
  absensi_data.push({
    nama_lengkap: fullname,
    Waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //reset input field
  event.target.fullname.value = '';

  //panggil function render toHtml
  renderToHtml();
});

//function untuk render data array ke div root
function renderToHtml() {
  // rsest element div root
  root.innerHTML = '';

  //mapping array to html element
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span>${i + 1}. &nbsp; ${e.nama_lengkap}</span>
      
      <span>${e.Waktu} ${e.tanggal}</span>
    
    </div>`;
  });
}

// delete function
function handleDelete(index) {
  console.info(index);

  //delete 1 data dari array
  absensi_data.splice(index, 1);
  alert('yakin hapu');

  //render kembali data dalam array html
  renderToHtml();
}
