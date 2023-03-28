import { Project } from "./project";

export const PROJECTS: Project[] = [
    {
        id: '0',
        name: 'Pokedex App',
        logo: '../../assets/images/avatar.svg',
        images: ['../../assets/ng-pokemon/home2.png', '../../assets/ng-pokemon/detail2.png', '../../assets/ng-pokemon/add2.png'],
        video: '../../assets/ng-pokemon/video.mp4',
        skills: ['Angular', 'HTML5', 'SCSS', 'Materialize', 'TypeScript'],
        description: "Application Pokedex. Permettant de l'ajout, la modification, la suppression et la recherche d'un pokémon.",
        gitlink: 'https://github.com/ClementCar/ng-pokemon-app.git'
    }
    ,
    {
        id: '1',
        name: 'E-Portfolio',
        logo: '../../assets/E-portfolio/logo.png',
        images: ['../../assets/E-portfolio/home2.png', '../../assets/E-portfolio/cv2.png', '../../assets/E-portfolio/portfolio2.png'],
        video: '../../assets/E-portfolio/video.mp4',
        skills: ['Angular', 'Angular Material',  'HTML5', 'SCSS', 'TypeScript'],
        description: "Premier projet personnel de fin de formation. Un site Portfolio réalisé avec Angular.",
        gitlink: 'https://github.com/ClementCar/mysite.git'
    }
    ,
    {
        id: '2',
        name: 'Ristorante',
        logo: '../../assets/Ristorante/logo.png',
        images: ['../../assets/Ristorante/home.JPG', '../../assets/Ristorante/about.JPG', '../../assets/Ristorante/menu.JPG', '../../assets/Ristorante/contact.JPG'],
        video: '../../assets/Ristorante/video.mp4',
        skills: ['Angular', 'Angular Material', 'Angular Animation', 'HTML5', 'SCSS', 'TypeScript'],
        description: "Projet de ma formation Coursera, apprentissage Angular Material et Angular Animation.",
        gitlink: 'https://github.com/ClementCar/Confusion.git'
    },
    {
        id: '3',
        name: 'Groupomania',
        logo: '../../assets/Groupomania/logo.png',
        images: ['../../assets/Groupomania/log2.png', '../../assets/Groupomania/post2.png'],
        video: '../../assets/Groupomania/Groupomania.mp4',
        skills: ['Angular', 'HTML5', 'SCSS', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'],
        description: "Projet de ma formation Open Classroom. Création d'un réseau social d'entreprise avec SQL et Angular.",
        gitlink: 'https://github.com/ClementCar/Groupomania.git'
    }
]