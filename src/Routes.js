import Accueil from "@/components/Accueil/Accueil";

import { createWebHistory, createRouter } from "vue-router";
import Profil from "@/components/Profil/Profil";
import Projets from "@/components/Projets/Projets";
import Stages from "@/components/Stages/Stages";
import Veille from "@/components/Veille/Veille";
import Contact from "@/components/Contact/Contact";

const routes = [
    {
        path: "/",
        name: "Accueil",
        component: Accueil,
    },
    {
        path: "/profil",
        name: "Profil",
        component: Profil,
    },
    {
        path: "/projets",
        name: "Projets",
        component: Projets,
    },
    {
        path: "/stage",
        name: "Stages",
        component: Stages,
    },
    {
        path: "/veille",
        name: "Veille",
        component: Veille
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
