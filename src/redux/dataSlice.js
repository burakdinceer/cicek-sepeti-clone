import { createSlice } from "@reduxjs/toolkit";


     const  initialState =     
       { 
        basket:[],
        categories:[
          {
            id:1,
            categoryName:'Tüm Kategoriler',
            isActive:true
          },
          {
            id:2,
            categoryName:'Elektronik',
            isActive:false
          },
          {
            id:3,
            categoryName:'Ev ve Yaşam',
            isActive:false
          },
          {
            id:4,
            categoryName:'Evcil Hayvan',
            isActive:false
          },
          {
            id:5,
            categoryName:'Spor',
            isActive:false
          },
          {
            id:6,
            categoryName:'Kitap',
            isActive:false
          },
          {
            id:7,
            categoryName:'Oyuncak',
            isActive:false
          },
          {
            id:8,
            categoryName:'Çiçek',
            isActive:false
          },
          {
            id:9,
            categoryName:'Hediye',
            isActive:false
          },
          {
            id:10,
            categoryName:'Parfüm',
            isActive:false
          },
          {
            id:11,
            categoryName:'Moda,Aksesuar',
            isActive:false
          },
          {
            id:12,
            categoryName:'Ofis,Kırtasiye',
            isActive:false
          },
          {
            id:13,
            categoryName:'Kişisel Bakım',
            isActive:false
          },
          {
            id:14,
            categoryName:'Petshop',
            isActive:false
          },
          
        ],
        product: [
        {id:1,name:'Z6 Akıllı Saat Konuşma Garantili Sim Kartlı Bluetooth',category:'Elektronik',url:'./akillisaat.jpg', price:399},
        {id:2,name:'Calvin Clean EDP 100 ml Kadın Parfüm',category:'Parfüm',url:'./kadinparfum.jpg', price:399},
        {id:3,name:'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',category:'Çiçek',url:'./orkide.jpg', price:399},
        {id:4,name:'925 Ayar Gümüş Çeyreklik Bileklik(Y)',category:'Hediye',url:'./bileklik.jpg', price:399},
        {id:5,name:'Sailor SD-3150 Siyah Dağcı Seyahat Srıt Çantası 55LT Outdoor',category:'Spor',url:'./sirtcanta.jpg', price:399},
        {id:6,name:'Büyük Boy Osmanlı Satranç Takımı',category:'Ev ve Yaşam',url:'./satranc.jpg', price:399},
        {id:7,name:'130 cm Papyonlu Büyük Ayı',category:'Oyuncak',url:'./ayicik.jpg', price:399},
        {id:8,name:'925 Ayar Gümüş Dualı İsim Kolyesi',category:'Moda,Aksesuar',url:'./kolye.jpg', price:399},
        {id:9,name:'Özel Tatlar Çikolata Kutusu 300gr',category:'Hediye',url:'./cikolata.jpg', price:399},
        {id:10,name:'Kucak Dolusu Aşk 25 Adet Gül Buketi',category:'Elektronik',url:'./buket.jpg', price:399},
        {id:11,name:'Z6 Akıllı Saat Konuşma Garantili Sim Kartlı Bluetooth',category:'Elektronik',url:'./akillisaat.jpg', price:399},
        {id:12,name:'Calvin Clean EDP 100 ml Kadın Parfüm',category:'Parfüm',url:'./kadinparfum.jpg', price:399},
        {id:13,name:'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',category:'Çiçek',url:'./orkide.jpg', price:399},
        {id:14,name:'925 Ayar Gümüş Çeyreklik Bileklik(Y)',category:'Hediye',url:'./bileklik.jpg', price:399},
        {id:15,name:'Sailor SD-3150 Siyah Dağcı Seyahat Srıt Çantası 55LT Outdoor',category:'Spor',url:'./sirtcanta.jpg', price:399},
        {id:16,name:'Büyük Boy Osmanlı Satranç Takımı',category:'Ev ve Yaşam',url:'./satranc.jpg', price:399},
        {id:17,name:'130 cm Papyonlu Büyük Ayı',category:'Oyuncak',url:'./ayicik.jpg', price:399},
        {id:18,name:'925 Ayar Gümüş Dualı İsim Kolyesi',category:'Moda,Aksesuar',url:'./kolye.jpg', price:399},
        {id:19,name:'Özel Tatlar Çikolata Kutusu 300gr',category:'Hediye',url:'./cikolata.jpg', price:399},
        {id:20,name:'Kucak Dolusu Aşk 25 Adet Gül Buketi',category:'Elektronik',url:'./buket.jpg', price:399}
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
