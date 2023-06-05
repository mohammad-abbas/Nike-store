$(document).ready(function () {
  $("header").append(
    `<nav class="navbar navbar-light navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">NIKE</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-us">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reviews">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
  );
});
