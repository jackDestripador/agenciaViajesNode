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
    
    //console.log(viajes);
    
    res.render('viajes',{
    pagina: 'Proximos Viajes',
    viajes,
    });
}


const paginaTestimoniales =(req,res)=>{//req - lo que enviamos: res- lo que que express nos reponde

    res.render('testimoniales',{
    pagina: 'Testimoniales'        
    });
}
//Muestra un viaje por su slug

const paginaDetalleViaje = async (req,res)=>{
    
    
    const{ slug }=req.params;
    try{

        const viaje =  await Viaje.findOne({where :  {slug} })
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje,
                    
            });
        

    }catch(error){
        console.log(error);
    }
    
    
    //console.log(req.params);
}




export{
    paginaInicio,
    paginaNosotros,    
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}