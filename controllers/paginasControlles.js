import { Viaje } from '../models/Viajes.js';

const paginaInicio = (req,res)=>{
    res.render('inicio',{
        pagina:'Inicio'
    });
}

const paginaNosotros =(req,res)=>{//req - lo que enviamos: res- lo que que express nos reponde

    res.render('nosotros',{
    pagina: 'Nosotros'        
    });
}

const paginaViajes = async (req,res)=>{
        //Consultar BD
    
    const viajes = await Viaje.findAll();
    
    console.log(viajes);
    
    res.render('viajes',{
    pagina: 'Proximos Viajes',
    viajes,
    });
}

const paginaTestimoniales = (req,res)=>{
    res.render('testimoniales',{
    pagina: 'Testimoniales',
    viajes,        
    });
}




export{
    paginaInicio,
    paginaNosotros,    
    paginaViajes,
    paginaTestimoniales,
   
}