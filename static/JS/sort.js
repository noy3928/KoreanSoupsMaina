function checkPlace() {
  var selectedValue = document.querySelector(".categoryList").value;
  localStorage.setItem("지역명", selectedValue);
  let cons = localStorage.getItem("지역명");
  console.log(cons);
}

// function getStorePlace() {
//     var selectedValue = document.getElementById("sorted").value;
//     localStorage.setItem("지역명", selectedValue);
//     let cons = localStorage.getItem("지역명");
//     console.log(cons);
//   }
// window.onload = function (){
//     document.querySelector(".section-seoul").style.display = "block";
//     document.querySelector(".section-busan").style.display = "none";
//     document.querySelector(".section-daegu").style.display = "none";
//     document.querySelector(".section-incheon").style.display = "none";
//     document.querySelector(".section-gwangju").style.display = "none";
//     document.querySelector(".section-daejeon").style.display = "none";
//     document.querySelector(".section-ulsan").style.display = "none";
//     document.querySelector(".section-sejong").style.display = "none";
//     document.querySelector(".section-gyeonggi").style.display = "none";
//     document.querySelector(".section-gangwon").style.display = "none";
//     document.querySelector(".section-chungbuk").style.display = "none";
//     document.querySelector(".section-chungnam").style.display = "none";
//     document.querySelector(".section-jeonbuk").style.display = "none";
//     document.querySelector(".section-jeonnam").style.display = "none";
//     document.querySelector(".section-gyeongbuk").style.display = "none";
//     document.querySelector(".section-gyeongnam").style.display = "none";
//     document.querySelector(".section-jeju").style.display = "none";
// }

// function getSelectVale() {
//     var selectedValue = document.getElementById("sorted").value;
//     console.log(selectedValue)
//     // const seoul = document.querySelector(".section-seoul")
//     // console.log(seoul)
//     if (selectedValue === '서울') {
//         document.querySelector(".section-seoul").style.display = "block";
//         document.querySelector(".section-busan").style.display = "none";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     } else if (selectedValue === '부산') {
//         document.querySelector(".section-seoul").style.display = "none";
//         document.querySelector(".section-busan").style.display = "block";
//         document.querySelector(".section-daegu").style.display = "none";
//         document.querySelector(".section-incheon").style.display = "none";
//         document.querySelector(".section-gwangju").style.display = "none";
//         document.querySelector(".section-daejeon").style.display = "none";
//         document.querySelector(".section-ulsan").style.display = "none";
//         document.querySelector(".section-sejong").style.display = "none";
//         document.querySelector(".section-gyeonggi").style.display = "none";
//         document.querySelector(".section-gangwon").style.display = "none";
//         document.querySelector(".section-chungbuk").style.display = "none";
//         document.querySelector(".section-chungnam").style.display = "none";
//         document.querySelector(".section-jeonbuk").style.display = "none";
//         document.querySelector(".section-jeonnam").style.display = "none";
//         document.querySelector(".section-gyeongbuk").style.display = "none";
//         document.querySelector(".section-gyeongnam").style.display = "none";
//         document.querySelector(".section-jeju").style.display = "none";
//     }
// }
