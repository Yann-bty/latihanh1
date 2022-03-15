var nama = ""
var peran = ""

if ( nama == "" && peran == ""){
console.log("nama harus diisi")
}
else if (nama == "John" && peran == ""){
    console.log ("Halo John, Pilih peranmu untuk memulai game!")
}
    else if (nama == "Jane" ){
        console.log ("Selamat datang di Dunia Werewolf, Jane")
        if (peran == "Penyihir"){
            console.log ("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
        }
    }
    else if (nama == "Janita" ){
            console.log ("Selamat datang di Dunia Werewolf, Jenita")
            if (peran == "Guard"){
                console.log ("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf")
            }
        }
        else if (nama == "Junaedi" ){
            console.log ("Selamat datang di Dunia Werewolf, Junaedi")
            if (peran == "Werewolf"){
                console.log ("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
                }
        }
