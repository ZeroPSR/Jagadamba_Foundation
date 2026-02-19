// let index = 0;
// let arr = document.querySelectorAll(".imgbox");
// let change = document.querySelector(".carousel-track");
// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next");

// let autoSlide;

// function restartAuto() {
//     //clearInterval(autoSlide);   // 
//     autoSlide = setInterval(() => {
//         index = (index + 1) % arr.length;
//         change.style.transform = `translateX(${-index * 100}%)`;
//     }, 6000);
// }

// // prev.addEventListener("click", () => {
// //     restartAuto();   // reset timer
// //     index = (index - 1 + arr.length) % arr.length;
// //     change.style.transform = `translateX(${-index * 100}%)`;
    
// // });

// // next.addEventListener("click", () => {
// //     restartAuto();   // reset timer
// //     index = (index + 1) % arr.length;
// //     change.style.transform = `translateX(${-index * 100}%)`;
   
// // });

// restartAuto();


// let statss = document.querySelectorAll(".stat-number");

// statss.forEach(ele => {
//     let target = +ele.dataset.target;

//     let update = () => {
//         let value = +ele.innerText;
//         ele.innerText = value + 1;

//         if (value < target) {
//             setTimeout(update, 20);
//         }
//     };

//     update();
// });




// let signupBtn = document.querySelector(".signup-btn");
// let signinBtn = document.querySelector(".signin-btn");

// let signupbox = document.querySelector(".signupbox");
// let signinbox = document.querySelector(".signinbox");

// let nexts = document.querySelector(".next")

// signinBtn.addEventListener("click", () => {

//     signinbox.style.display = "flex";
//     signupbox.style.display = "none";

// });

// signupBtn.addEventListener("click", () => {

//     signupbox.style.display = "flex";
//     signinbox.style.display = "none";


// });



// let signupName = document.querySelector("#signupname");
// let signupPhone = document.querySelector("#signupphone");
// let signupEmail = document.querySelector("#signupemail");
// let signupPassword = document.querySelector("#signuppassword");

// let nameError = document.querySelector("#nameError");
// let phoneError = document.querySelector("#phoneError");
// let emailError = document.querySelector("#emailError");
// let passwordError = document.querySelector("#passwordError");



// function validateSignup() {

//     let name = signupName.value.trim();
//     let phone = signupPhone.value.trim();
//     let email = signupEmail.value.trim();
//     let password = signupPassword.value.trim();

//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let phonePattern = /^[0-9]{10}$/;

//     let valid = true;

//     if (name.length < 3) {
//         nameError.textContent = "Name must be at least 3 characters";
//         valid = false;
//     } else {
//         nameError.textContent = "";
//     }

//     if (!phonePattern.test(phone)) {
//         phoneError.textContent = "Phone must be 10 digits";
//         valid = false;
//     } else {
//         phoneError.textContent = "";
//     }

//     if (!emailPattern.test(email)) {
//         emailError.textContent = "Enter valid email address";
//         valid = false;
//     } else {
//         emailError.textContent = "";
//     }

//     if (password.length < 6) {
//         passwordError.textContent = "Password must be at least 6 characters";
//         valid = false;
//     } else {
//         passwordError.textContent = "";
//     }

//     if (valid) {
//         nexts.style.display = "inline-block";
//     } else {
//         nexts.style.display = "none";
//     }
// }

// signupName.addEventListener("input", validateSignup);
// signupPhone.addEventListener("input", validateSignup);
// signupEmail.addEventListener("input", validateSignup);
// signupPassword.addEventListener("input", validateSignup);




// nexts.addEventListener("click", async () => {

//     let data = {
//         name: signupName.value,
//         phone: signupPhone.value,
//         email: signupEmail.value,
//         password: signupPassword.value
//     };

//     let response = await fetch("http://127.0.0.1:8000/api/signup/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     let result = await response.json();
//     alert(result.status);
// });



// ============================
// IMAGE CAROUSEL
// ============================

let index = 0;
let arr = document.querySelectorAll(".imgbox");
let change = document.querySelector(".carousel-track");

if (arr.length > 0 && change) {
    setInterval(() => {
        index = (index + 1) % arr.length;
        change.style.transform = `translateX(${-index * 100}%)`;
    }, 6000);
}


// ============================
// STATS COUNTER ANIMATION
// ============================

let statss = document.querySelectorAll(".stat-number");

statss.forEach(ele => {
    let target = +ele.dataset.target;

    let update = () => {
        let value = +ele.innerText;

        if (value < target) {
            ele.innerText = value + 1;
            setTimeout(update, 20);
        } else {
            ele.innerText = target;
        }
    };

    update();
});


// ============================
// LOGIN / SIGNUP TOGGLE
// ============================

let signupBtn = document.querySelector(".signup-btn");
let signinBtn = document.querySelector(".signin-btn");

let signupbox = document.querySelector(".signupbox");
let signinbox = document.querySelector(".signinbox");

if (signupBtn && signinBtn && signupbox && signinbox) {

    signinBtn.addEventListener("click", () => {
        signinbox.style.display = "flex";
        signupbox.style.display = "none";
    });

    signupBtn.addEventListener("click", () => {
        signupbox.style.display = "flex";
        signinbox.style.display = "none";
    });

}
