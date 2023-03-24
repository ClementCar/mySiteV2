import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
    <!-- Presentation start ============================================================================================= -->
    <section id="presentation" class="section">
      <div class="container p-5">
        <Div class="text-center py-5 px-4">
          <h3 class="mb-5 fs-1">Présentation</h3>
          <hr>
          <div class="row row-cols-1 row-cols-md-2 ">
            <div class="col">
              <p class="fs-3 mt-5">
                Hey ! Bienvenue sur mon site !<br>
                Je suis un jeune développeur passionné dans le domaine du Web. Diplômé depuis bientôt un ans, je continue à me former en permanence 
                en particulier sur le framework Angular.
                Vous trouverez sur ce site tout mon parcours et les projets réalisés.<br>
                Bonne Navigation !
              </p>
            </div>
            <div class="col">
              <img src="../assets/images/teachpres.svg" alt="présentation">
            </div>
          </div>
        </Div>
      </div>
    </section>
    <!-- Presentation end ============================================================================================= -->
  `,
  styles: [
  ]
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
