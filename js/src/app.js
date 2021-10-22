// console.log("nur sultan aslan")

// var dolarBugun = 9.20                       //var: değişken tanımlaması için kullanılır (tüm tipler için: string, int, double)
// var dolarDun = 9.30
// console.log(dolarDun)               
// var sehir = "Ankara"
// console.log (sehir)

// let dolarBugun = 9.20
// let dolarDun = 9.30
// //let fonksiyon içindeyse sadece fonksiyon içerisindekileri değiştirir ya da gunceller. Fakat dısında tanımlanmıssa sadece dışındakileri günceller veya değiştirir.
// {
//     let dolarDun = 9.10
// }

// console.log(dolarDun) 

// const euroDun =11.2         //sabit değişken 
// //euroDun= 11  (bunu yapamıyoruz, değişim yapmıyor hata verir.)
// console.log(euroDun)

let konutKredileri = [12, "Emlak", "Kredi"]

console.log("<ul>")
for (let i=0; i < konutKredileri.length; i++) {
    
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("<ul>")
{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak kredi </li>
</ul> */}


console.log(konutKredileri)




