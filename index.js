const userLinks = document.querySelectorAll(".user-link");
const userPhotos = document.querySelectorAll(".user-img");
const userName = document.querySelectorAll(".username");
const btns = document.querySelectorAll(".btn");
const boxes = document.querySelector(".boxes");



const getUsers = async () => {
  const res = await axios.get(
    `https://api.github.com/users/john-smilga/followers?per_page=100`
  );
  return res.data;
};

const setUsers = async () => {
  const users = await getUsers();
  boxes.innerHTML = "";
  users.map((user) => {
    const box = document.createElement("div");
    box.className = "box";
    const imgBox = document.createElement("div");
    imgBox.className = "img-box";
    const userImg = document.createElement("img");
    userImg.className = "user-img";
    userImg.src = user.avatar_url;
    imgBox.appendChild(userImg);
    const userName = document.createElement("h3");
    userName.className = "username";
    userName.innerHTML = user.login;
    const userLink = document.createElement("a");
    userLink.className = "user-link";
    userLink.href = user.html_url;
    userLink.innerHTML = "View Profile";
    box.appendChild(imgBox);
    box.appendChild(userName);
    box.appendChild(userLink);
    box.classList.add("hide");
    boxes.appendChild(box);
  });
};

setUsers();

let activePage = 0;

const renderUI = () => {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      const allBox = document.querySelectorAll(".box");

      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btns[i].classList.add("active");
      for (let k = (activePage - 1) * 10; k < activePage * 10; k++) {
        allBox[k].classList.add("hide");
      }

      activePage = i + 1;
      for (let j = i * 10; j < (i + 1) * 10; j++) {
        allBox[j].classList.remove("hide");
      }
    });
  }
};

renderUI();
const prew = document.querySelector(".prew");
prew.addEventListener("click", () => {
  console.log("hi");
  activePage--;
  if (activePage < 0) activePage = 10;
  const allBox = document.querySelectorAll(".box");
  for (let k = (activePage - 1) * 10; k < activePage * 10; k++) {
    allBox[k].classList.add("hide");
  }
  for (let j = (activePage-1) * 10; j < activePage * 10; j++) {
    allBox[j].classList.remove("hide");
  }
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[activePage].classList.add("active");
});

const next = document.querySelector(".next");
next.addEventListener("click", () => {
  console.log("hello");
  activePage++;
  if (activePage > 10) activePage = 1;
  const allBox = document.querySelectorAll(".box");
  for (let k = (activePage - 1) * 10; k < activePage * 10; k++) {
    allBox[k].classList.add("hide");
  }
  for (let j = (activePage-1) * 10; j < activePage * 10; j++) {
    allBox[j].classList.remove("hide");
  }
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[activePage].classList.add("active");
});
