var cards = [
  {
    title: "nike",
    price: "$99.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes.png",
  },
  {
    title: "nike",
    price: "$89.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes1.png",
  },
  {
    title: "nike",
    price: "$189.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes2.png",
  },
  {
    title: "nike",
    price: "$79.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes3.png",
  },
  {
    title: "nike",
    price: "$109.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes4.png",
  },
  {
    title: "nike",
    price: "$69.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes5.png",
  },
  {
    title: "nike",
    price: "$129.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes6.png",
  },
  {
    title: "nike",
    price: "$149.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes7.png",
  },
  {
    title: "nike",
    price: "$119.99",
    text: ` Some quick example text to build on the card title and make up the
              bulk of the card's content.`,
    button: "Add to cart",
    img: "shoes8.png",
  },
];

$(document).ready(function () {
  const products = cards.map((product) => {
    $(".cards-con").append(`<div class="col-lg-4 col-md-6 gy-5 justify-content-center">
      <div class="card text-light text-center mx-auto">
          <img src="${product.img}" class="card-img-top img-fluid custome-img" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${product.title}<h5>
                <h5 class="card-title">${product.price}</h5>
            <p class="card-text">
              ${product.text}
            </p>
            <a href="#" class="btn btn-sm btnn" >${product.button}</a>
          </div>
        </div>
        </div>`);
  });
});




$(document).ready(function() {
  $(".small-preview").on('click',function() {
    var smallPreview = $(this).attr('src');
    $('.preview').attr('src',smallPreview);
  });
});
