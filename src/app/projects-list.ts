import { Project } from "./project";

export const PROJECTS: Project[] = [
    {
        id: '0',
        name: 'Pokedex App',
        logo: '../../assets/ng-pokemon/Logo.png',
        images: ['../../assets/ng-pokemon/home.JPG', '../../assets/ng-pokemon/detail.JPG', '../../assets/ng-pokemon/add.JPG'],
        video: '../../assets/ng-pokemon/video.mp4',
        skills: ['Angular', 'HTML5', 'SCSS', 'Materialize', 'TypeScript'],
        description: "Application Pokedex. Permettant de l'ajout, la modification, la suppression et la recherche d'un pokémon.",
        gitlink: 'https://github.com/ClementCar/ClementCarcenac_3_06122021.git'
    }
    ,
    {
        id: '1',
        name: 'E-Portfolio',
        logo: '../../assets/E-portfolio/logo.png',
        images: ['../../assets/E-portfolio/home.JPG', '../../assets/E-portfolio/cv.JPG', '../../assets/E-portfolio/portfolio.JPG'],
        video: '../../assets/E-portfolio/video.mp4',
        skills: ['Angular', 'Angular Material',  'HTML5', 'SCSS', 'TypeScript'],
        description: "Premier projet personnel de fin de formation. Un site Portfolio réalisé avec Angular.",
        gitlink: 'https://github.com/ClementCar/Kanap_5_12-01-22.git'
    }
    ,
    {
        id: '2',
        name: 'Groupomania',
        logo: '../../assets/Groupomania/logo.png',
        images: ['../../assets/Groupomania/Log.JPG', '../../assets/Groupomania/Post.JPG'],
        video: '../../assets/Groupomania/Groupomania.mp4',
        skills: ['Angular', 'HTML5', 'SCSS', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'],
        description: "Projet de ma formation Open Classroom. Création d'un réseau social d'entreprise avec SQL et Angular.",
        gitlink: 'https://github.com/ClementCar/Groupomania.git'
    },
    {
        id: '3',
        name: 'Oh My Food',
        logo: '../../assets/myfood/Logo.png',
        images: ['../../assets/myfood/Accueil.JPG', '../../assets/myfood/Page.JPG'],
        video: '../../assets/myfood/Food-tel.mp4',
        skills: ['HTML5', 'Sass'],
        description: "Projet de ma formation Open Classroom. Développement d'un site proposant le menu de 4 grands restaurants parisiens et dynamisation du site avec des animations CSS.",
        gitlink: 'https://github.com/ClementCar/ClementCarcenac_3_06122021.git'
    }
]