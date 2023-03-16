import { createSlice } from "@reduxjs/toolkit";


     const  initialState =
       {
        product:
        [
        {name:'Z6 Akıllı Saat Konuşma Garantili Sim Kartlı Bluetooth',category:'Elektronik',url:'./akillisaat.jpg', price:'399,90'},
        {name:'Calvin Clean EDP 100 ml Kadın Parfüm',category:'Parfüm',url:'./kadinparfum.jpg', price:'399,90'},
        {name:'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',category:'Çiçek',url:'./orkide.jpg', price:'399,90'},
        {name:'925 Ayar Gümüş Çeyreklik Bileklik(Y)',category:'Hediye',url:'./bileklik.jpg', price:'399,90'},
        {name:'Sailor SD-3150 Siyah Dağcı Seyahat Srıt Çantası 55LT Outdoor',category:'Spor',url:'./sirtcanta.jpg', price:'399,90'},
        {name:'Büyük Boy Osmanlı Satranç Takımı',category:'Ev ve Yaşam',url:'./satranc.jpg', price:'399,90'},
        {name:'130 cm Papyonlu Büyük Ayı',category:'Oyuncak',url:'./ayicik.jpg', price:'399,90'},
        {name:'925 Ayar Gümüş Dualı İsim Kolyesi',category:'Moda,Aksesuar',url:'./kolye.jpg', price:'399,90'},
        {name:'Özel Tatlar Çikolata Kutusu 300gr',category:'Hediye',url:'./cikolata.jpg', price:'399,90'},
        {name:'Kucak Dolusu Aşk 25 Adet Gül Buketi',category:'Elektronik',url:'./buket.jpg', price:'399,90'},
        {name:'Z6 Akıllı Saat Konuşma Garantili Sim Kartlı Bluetooth',category:'Elektronik',url:'./akillisaat.jpg', price:'399,90'},
        {name:'Calvin Clean EDP 100 ml Kadın Parfüm',category:'Parfüm',url:'./kadinparfum.jpg', price:'399,90'},
        {name:'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',category:'Çiçek',url:'./orkide.jpg', price:'399,90'},
        {name:'925 Ayar Gümüş Çeyreklik Bileklik(Y)',category:'Hediye',url:'./bileklik.jpg', price:'399,90'},
        {name:'Sailor SD-3150 Siyah Dağcı Seyahat Srıt Çantası 55LT Outdoor',category:'Spor',url:'./sirtcanta.jpg', price:'399,90'},
        {name:'Büyük Boy Osmanlı Satranç Takımı',category:'Ev ve Yaşam',url:'./satranc.jpg', price:'399,90'},
        {name:'130 cm Papyonlu Büyük Ayı',category:'Oyuncak',url:'./ayicik.jpg', price:'399,90'},
        {name:'925 Ayar Gümüş Dualı İsim Kolyesi',category:'Moda,Aksesuar',url:'./kolye.jpg', price:'399,90'},
        {name:'Özel Tatlar Çikolata Kutusu 300gr',category:'Hediye',url:'./cikolata.jpg', price:'399,90'},
        {name:'Kucak Dolusu Aşk 25 Adet Gül Buketi',category:'Elektronik',url:'./buket.jpg', price:'399,90'}
        
      ]
    
    }
     



export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
       getData: (state,action) => {
        state.product = action.payload
       }
      
    }

    }
)

export const {getData} = dataSlice.actions
export default dataSlice.reducer
