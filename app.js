const menuIcon = document.querySelector(".menu-icon");
const drawerContainer = document.querySelector(".drawer-container");
const drawerContent = document.querySelector(".drawer-content");
const drawerBackdrop = document.querySelector(".drawer-backdrop");

// let isDrawerOpen = false;

menuIcon.addEventListener("click",()=>{
    drawerContainer.classList.remove("hide");
    drawerContent.classList.remove("hide");
    drawerContent.classList.add("show");
    // isDrawerOpen = true;
})

drawerBackdrop.addEventListener("click",()=>{
    drawerContent.classList.remove("show");
    drawerContainer.classList.add("hide");
    drawerContent.classList.add("hide");
    // isDrawerOpen = false;
})

// window.addEventListener('resize', () => {
//     if (window.innerWidth > 600) {
//         console.log("window more then 600")
//         drawerContainer.classList.add("hide")
//     } else if (isDrawerOpen) {
//         console.log("window less then 600")
//         drawerContainer.classList.remove("hide")
//     }
// });