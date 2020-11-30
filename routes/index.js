import express from 'express';
import {paginaInicio,paginaNosotros, paginaViajes,  paginaTestimoniales} from '../controllers/paginasControlles.js'

const router =express.Router();

router.get('/',paginaInicio) ;
router.get('/nosotros',paginaNosotros) ;
/*
router.get('/nosotros',(req,res)=>{//req - lo que enviamos: res- lo que que express nos reponde

    //const viajes='Viaje a Alemania';


    res.render('nosotros',{
    pagina: 'Nosotros'        
        

        //viajes
    });
});
*/
router.get('/viajes',paginaViajes);
/*
router.get('/viajes',(req,res)=>{
    res.render('viajes',{
    pagina: 'Viajes'        
    });
});
*/
router.get('/testimoniales',paginaTestimoniales);

router.get('/contacto',(req,res)=>{

    res.send('contacto');
});

export default router;
