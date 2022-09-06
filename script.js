fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((data) => {
  // console.log(data);
  return data.json();
}).then((completeData) => {
  // console.log(completeData.categories[10].strCategoryThumb);
  let data1 = "";
  completeData.categories.map((values) => {
    data1+= 
    `<div class="card-container">
      <div class="image">
        <img src="${values.strCategoryThumb}" alt="food">
      </div>
      <div class="texts">
        <div class="menu-name">
          <h3>${values.strCategory}</h3>
        </div>
        <p>${values.strCategoryDescription}</p>
      </div>
    </div>`
    document.querySelector(".cards").innerHTML = data1;
  })

}).catch((err) => {
  console.log(err);
});