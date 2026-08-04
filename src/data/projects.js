import fallbackImage from "../assets/images/fallbackImage.jpg";
import verboculto from "../assets/images/verboculto.png";

export const projects = [
  {
    id: 1,
    title: "VerboCulto",
    description: "Arquitectura fullstack basada en una API REST construida con .NET Framework como capa de servicios, y un frontend en Next.js que actúa como cliente, consumiendo los datos de la API y orquestando la lógica de presentación y navegación.",
    stack: ["Next.js", ".NET Framework", "CSS", "TypeScript"],
    image: verboculto,
    demo: "https://demo.com",
    github: "https://github.com/AzulMontalvo/dictionary-app",
  }
  // {
  //   id: 2,
  //   title: "Proyecto 2",
  //   description: "Descripción del proyecto 2.",
  //   stack: ["Tecnología A", "Tecnología B"],
  //   image: fallbackImage,
  //   demo: "https://demo.com",
  //   github: "https://github.com/...",
  // },
];
