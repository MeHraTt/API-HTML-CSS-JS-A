 var finalres=[]
var btns = document.querySelectorAll(".nav-link");
function display(){
  var cartona=""
  for(var i=0;i<finalres.length;i++){
    cartona += ` <div class="col-md-3">
        <div class="card" >
  <img src="${finalres[i].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${finalres[i].title}</p>
  </div>
</div>
      </div>`;
  }
   document.getElementById("row-body").innerHTML=cartona
}
 async function getMeals(mealName="pizza") {
   var response = await fetch(
     `https://forkify-api.herokuapp.com/api/search?q=${mealName}`
   );
   var data = await response.json();
   finalres = data.recipes;
   console.log(finalres);
   display();
  }

  for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(e){
var foodName=e.target.innerHTML
getMeals(foodName);


    })
  }
  getMeals()