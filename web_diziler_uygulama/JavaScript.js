
let isimler = [];
let Departman = [];
let maas = [];
let tarih = [];

function ekle() {
    let ism = document.getElementById('text1').value;
    isimler.push(ism);

    let Depart = document.getElementById('text2').value;
    Departman.push(Depart);

    let Maş = document.getElementById('text3').value;
    maas.push(Maş);

    let trh = document.getElementById('text4').value;
    tarih.push(trh);

    document.getElementById('p1').innerHTML=isimler;
}
function sil() {

    let sl = document.getElementById('text1').value;
    for (let i = 0; i < isimler.length; i++) {

        document.getElementById('p1').innerHTML = sl;
        if (isimler[i] == sl) {
            isimler.splice(i, 1);
            Departman.splice(i, 1);
            maas.splice(i, 1);
            tarih.splice(i, 1);
            document.getElementById('p1').innerHTML = isimler;
        }
    }   
}

function güncelle() {

    for (let i = 0; i < isimler.length; i++) {
        let sl = document.getElementById('text1').value;
        let slm = document.getElementById('text2').value;
        let nbr = document.getElementById('text3').value;
        let cnm = document.getElementById('text4').value;

        if (sl == isimler[i]) {
            Departman[i] == slm;
            maas[i] == nbr;
            tarih[i] == cnm;
            document.getElementById('p2').innerHTML = "aradığınız kayıt güncellenmiştir";
            document.getElementById('p3').innerHTML = 'MAAŞ: ' + nbr;
            document.getElementById('p4').innerHTML = 'isim: ' + sl;
        }
        
       
    }
    
}
function gstr() {
    document.getElementById('ismtd').innerHTML = isimler;
    document.getElementById('ismtd2').innerHTML = Departman;
    document.getElementById('ismtd3').innerHTML = maas;
    document.getElementById('ismtd4').innerHTML = tarih;
}


