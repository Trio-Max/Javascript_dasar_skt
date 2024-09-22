//var
var nama= "Trio";
    nama="Triono";

const umur=28;
    //umur = 21;
    //umur = '28';

let data_saya = 'nama saya adalah ${nama} dan usia saya adalah ${umur}';


console.log(data_saya);

var data_saya;//undifined

function printDataNama(nama = "John", umur = 17){
    var data_saya = 'Nama saya adalah ${nama} dan uur saya adalah ${umur}';
console.log(data_saya)
}

printDataNama();

//object -> property -> nested

const dataSaya = {
    nama: 'Triono',
    umur: 28,
    printDataNama: (nama = "Nama Lengkap", umur = "Wajib diatas 17 tahun") =>{
            var data = 'Nama saya adalah ${nama} dan umur saya adalah ${umur}';
            console.log(data);

    }
}
//dataSaya.nama = "Ardi Wijaya";

//console.log(dataSaya)
//dataSaya.printDataNama(dataSaya.nama, dataSaya.umur);

function printData2(){
        nama = 'Triono';
        umur = 28;

        console.log(this);

    }

const printData3 = () => {
    console.log(this);
}

class printDataClass {
    constructor() {
        this.nama = "Triono";
        this.umur = 30;
    }
printDataNama = () =>{
    console.log(this.nama);
}

}