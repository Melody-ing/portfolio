// const url = './list.json';
const url = "./list-graduate.json";

let array = [];

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      array = data;
      console.log("array", array);
      displayData(array);
    })
    .catch((err) => console.log("error", err));
};

fetchData(url);

const displayData = (items) => {
  const display = items
    .map((item) => {
      return `
        <div class="box">
        <div class="imgbox">
          <img src=${item.img} />
        </div>

        <h3>${item.title}</h3>
        
        </div>
        `;
    })
    .join("");
  const zone = document.getElementById("cards");
  zone.innerHTML = display;
  //   document.body.appendChild;
};

const getInput = () => {
  const inputImg = document.getElementById("input_img").value;
  const inputTitle = document.getElementById("input_title").value;
  // const inputParagraph = document.getElementById("input_paragraph").value;
  const newData = `{
    "img": "${inputImg}",
    "title": "${inputTitle}",
  }`;

  // console.log(newData);
  const toObj = JSON.parse(newData);

  // console.log(toObj);
  array.push(toObj);
  displayData(array);
  console.log(array);
};
