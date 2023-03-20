import { createSlice } from "@reduxjs/toolkit";


     const  initialState =     
       { 
        basket:[],
        categories:[
          {
            id:1,
            categoryName:'Tüm Kategoriler'
          },
          {
            id:2,
            categoryName:'Elektronik'
          },
          {
            id:3,
            categoryName:'Ev ve Yaşam'
          },
          {
            id:4,
            categoryName:'Evcil Hayvan'
          },
          {
            id:5,
            categoryName:'Spor'
          },
          {
            id:6,
            categoryName:'Kitap'
          },
          {
            id:7,
            categoryName:'Oyuncak'
          },
          {
            id:8,
            categoryName:'Çiçek'
          },
          {
            id:9,
            categoryName:'Hediye'
          },
          {
            id:10,
            categoryName:'Parfüm'
          },
          {
            id:11,
            categoryName:'Moda,Aksesuar'
          },
          {
            id:12,
            categoryName:'Ofis,Kırtasiye'
          },
          {
            id:13,
            categoryName:'Kişisel Bakım'
          },
          {
            id:14,
            categoryName:'Petshop'
          },
          
        ],
        product: [
        {id:1,name:'Z6 Akıllı Saat Konuşma Garantili Sim Kartlı Bluetooth',category:'Elektronik',url:'./akillisaat.jpg', price:'399,90'},
        {id:2,name:'Calvin Clean EDP 100 ml Kadın Parfüm',category:'Parfüm',url:'./kadinparfum.jpg', price:'399,90'},
        {id:3,name:'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',category:'Çiçek',url:'./orkide.jpg', price:'399,90'},
        {id:4,name:'925 Ayar Gümüş Çeyreklik Bileklik(Y)',category:'Hediye',url:'./bileklik.jpg', price:'399,90'},
        {id:5,name:'Sailor SD-3150 Siyah Dağcı Seyahat Srıt Çantası 55LT Outdoor',category:'Spor',url:'./sirtcanta.jpg', price:'399,90'},
        {id:6,name:'Büyük Boy Osmanlı Satranç Takımı',category:'Ev ve Yaşam',url:'./satranc.jpg', price:'399,90'},
        {id:7,name:'130 cm Papyonlu Büyük Ayı',category:'Oyuncak',url:'./ayicik.jpg', price:'399,90'},
        {id:8,name:'925 Ayar Gümüş Dualı İsim Kolyesi',category:'Moda,Aksesuar',url:'./kolye.jpg', price:'399,90'},
        {id:9,name:'Özel Tatlar Çikolata Kutusu 300gr',category:'Hediye',url:'./cikolata.jpg', price:'399,90'},
        {id:10,name:'Kucak Dolusu Aşk 25 Adet Gül Buketi',category:'Elektronik',url:'./buket.jpg', price:'399,90'},
        {id:11,name:'Z6 Akıllı Saat Konuşma Garantili Sim Kartlı Bluetooth',category:'Elektronik',url:'./akillisaat.jpg', price:'399,90'},
        {id:12,name:'Calvin Clean EDP 100 ml Kadın Parfüm',category:'Parfüm',url:'./kadinparfum.jpg', price:'399,90'},
        {id:13,name:'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',category:'Çiçek',url:'./orkide.jpg', price:'399,90'},
        {id:14,name:'925 Ayar Gümüş Çeyreklik Bileklik(Y)',category:'Hediye',url:'./bileklik.jpg', price:'399,90'},
        {id:15,name:'Sailor SD-3150 Siyah Dağcı Seyahat Srıt Çantası 55LT Outdoor',category:'Spor',url:'./sirtcanta.jpg', price:'399,90'},
        {id:16,name:'Büyük Boy Osmanlı Satranç Takımı',category:'Ev ve Yaşam',url:'./satranc.jpg', price:'399,90'},
        {id:17,name:'130 cm Papyonlu Büyük Ayı',category:'Oyuncak',url:'./ayicik.jpg', price:'399,90'},
        {id:18,name:'925 Ayar Gümüş Dualı İsim Kolyesi',category:'Moda,Aksesuar',url:'./kolye.jpg', price:'399,90'},
        {id:19,name:'Özel Tatlar Çikolata Kutusu 300gr',category:'Hediye',url:'./cikolata.jpg', price:'399,90'},
        {id:20,name:'Kucak Dolusu Aşk 25 Adet Gül Buketi',category:'Elektronik',url:'./buket.jpg', price:'399,90'}
      ],
      fakeData : []
    }
     



export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
       getData: (state,action) => {
        state.fakeData = action.payload
       },
       addBasket:(state,action) => {
        state.basket =[...state.basket,action.payload]
       }
    }

    }
)

export const {getData,addBasket} = dataSlice.actions
export default dataSlice.reducer
