import logo from './600x400.png' // relative path to image 

function Card() {
    return (
      <div class = "container justify-content-center">
         <div class="row">
         <div class = "col gap-3">
      <div class="card text-center mt-4" style={{width: 18 + 'rem'}}  >
  <img src = {logo} class="card-img-top" alt="logo" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <a href="#" class="btn btn-primary m-3 btn-sm">Go somewhere</a>
  </ul>
</div>
</div>
<div class = "col gap-3">
<div class="card text-center mt-4" style={{width: 18 + 'rem'}}  >
  <img src = {logo} class="card-img-top" alt="logo" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <a href="#" class="btn btn-primary m-3 btn-sm">Go somewhere</a>
  </ul>
</div>
</div>
<div class = "col gap-3">
<div class="card text-center mt-4" style={{width: 18 + 'rem'}}  >
  <img src = {logo} class="card-img-top" alt="logo" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <a href="#" class="btn btn-primary m-3 btn-sm">Go somewhere</a>
  </ul>
</div>
</div>
<div class = "col gap-3">
<div class="card text-center mt-4" style={{width: 18 + 'rem'}}  >
  <img src = {logo} class="card-img-top" alt="logo" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <a href="#" class="btn btn-primary m-3 btn-sm">Go somewhere</a>
  </ul>
</div>
</div>
</div>
</div>
);
   }
   
   export default Card;