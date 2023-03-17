import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- footer start -->
    <footer class="footer py-5">
      <div class="container">
        <div class="row text-center">
          <div class="d-flex justify-content-center">
            <a class="d-flex__phone" href="tel:+33636671813" title="Numéro de téléphone">
              <i class="fa-solid fa-phone"></i>
            </a>
            <a class="d-flex__email" href="mailto:clementcarcenac@gmail.com" title="Adresse Email">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <a class="d-flex__github" href="https://github.com/ClementCar" target="_blank" title="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>
            <a class="d-flex__linkedin" href="https://www.linkedin.com/in/clement-carcenac-4a61a11b0" target="_blank" title="Linkedin">
                <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p class="mt-4 mb-0">© 2023 Clément CARCENAC, tous droits réservés.</p>
        </div>
      </div>
    </footer>
<!-- footer end -->
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
