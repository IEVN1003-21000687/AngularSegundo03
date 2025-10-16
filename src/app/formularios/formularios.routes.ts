import { Routes } from "@angular/router";

export default[

    {
        path : 'distancia', 
        loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
    },

    {
         path : 'zodiaco', 
        loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
    },

    {
         path : 'ax-b', 
        loadComponent:()=>import('./ax-b/ax-b.component').then(c=>c.AxBComponent)
    }
    

] as Routes;