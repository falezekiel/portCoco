//referencias HTML
const divCuboHtml   = document.querySelector('.carousel-inner');
const divFooterHtml = document.querySelector('.page-footer');
const divBtnHead    = document.querySelector ('.btn-group');
export const crearCuboHtml=()=>{
//carousel
const carrouselCubo =

`
<div class="container">
     <div class="row">
<div class="col-sm-12">

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/img/cubo-logo.PNG" class="d-block w-100" alt="..." height="600px" >
    </div>
    <div class="carousel-item">
      <img src="./assets/img/cubo-com-man.PNG" class="d-block w-100" alt="..." height="600px">
    </div>
    <div class="carousel-item">
      <img s src="./assets/img/cubo-social-media.PNG" class="d-block w-100" alt="..." height="600px">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`

const div = document.createElement ('div');
div.innerHTML = carrouselCubo;

divCuboHtml.append (div);



};

//footer
export const crearCuboFooter = ()=>{

const  footerHtml =
` <!-- Footer Links -->
<div class="container text-center text-md-left">

  <!-- Footer links -->
  <div class="row text-center text-md-left mt-3 pb-3">

   
    <!-- Grid column -->

    <hr class="w-100 clearfix d-md-none">

    <!-- Grid column -->
    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
      <h6 class="text-uppercase mb-4 font-weight-bold">Clientes</h6>
      <p>
        <a href="https://www.instagram.com/contar.la.vida/?hl=es" target="_blanck">@contar.la.vida</a>
      </p>
      <p>
        <a href="https://www.instagram.com/fittcalzass/?hl=es" target="_blanck">@fittcalzas</a>
      </p>
      <p>
        <a href="https://www.instagram.com/vabracketscba/?hl=es" target="_blanck">@vabrackets</a>
      </p>
      <p>
        <a href="https://www.instagram.com/coremadental/?hl=es" target="_blanck">@coremadental</a>
      </p>
    </div>
    <!-- Grid column -->

    <hr class="w-100 clearfix d-md-none">


    <!-- Grid column -->
    <hr class="w-100 clearfix d-md-none">

    <!-- Grid column -->
    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
      <h6 class="text-uppercase mb-4 font-weight-bold">Contacto</h6>
      <p>
        <i class="fas fa-home mr-3"></i> Mendiolaza,Córdoba, Argentina</p>
      <p>
        <i class="fas fa-envelope mr-3"></i><a href="https://www.instagram.com/cubocomunicacion/?hl=es" target="_blanck"> @cubocomunicacion</p>
        <p>
        <i class="fas fa-envelope mr-3"></i><a href="mailto:cubomanager@gmail.com" target="_blanck"> cubomanager@gmail.com</p>
      </p>
      <p>
        <i class="fas fa-print mr-3"></i><a href="https://api.whatsapp.com/send?phone=3515316571&text=Hola!" target="_blanck"> 0351 - 155316571</p>
    </div>
    <!-- Grid column -->

  </div>
  <!-- Footer links -->

  <hr>

  <!-- Grid row -->
  <div class="row d-flex align-items-center">

    <!-- Grid column -->
    <div class="col-md-7 col-lg-8">

      

    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-md-5 col-lg-4 ml-lg-0">

      <!-- Social buttons -->
      <div class="text-center text-md-right">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

</div>
<!-- Footer Links -->
`

const div = document.createElement('div');

div.innerHTML=footerHtml;

divFooterHtml.append (div);

}

//botonera

export const crearBtnCuboHead = ()=>{

    const btnHead =

    `<div style="margin-left: 750px" style="text-align: right ;width:220px"class="btn-group" role="group" aria-label="Basic example" text-align="right">
    <button style="background-color: #F8BBD0;" id="btnNosotras" type="button" class="btn">Nosotras</button>
    <button style="background-color: #F8BBD0;" type="button" class="btn">Servicios</button>
    <button style="background-color: #F8BBD0;" type="button" class="btn">Promos</button>
  </div>`

    const div = document.createElement ('div');

    div.innerHTML = btnHead;

    divBtnHead.append (div);



}