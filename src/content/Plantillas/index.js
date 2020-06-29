import React, { Fragment ,useEffect, useState} from 'react';
import PlantillaA from "../../components/Pre-plantillas/PlantillaA"
import { Container , col,Card,Button, ListGroupItem, ListGroup} from 'react-bootstrap';
import ColumnaPlantillas from '../../components/Pre-plantillas/ColumnaPlantillas';
import PlantillaB from "../../components/Pre-plantillas/PlantillaB"
import PlantillaC from "../../components/Pre-plantillas/PlantillaC"
import PlantillasAPI from '../Plantillas/plantillas-api';
import { showToast } from '../../components/common/Toast';
import { useHistory, useParams } from 'react-router-dom';
const Plantillas = () => {
  const history = useHistory();

  const [update,setUpdate] = useState(false);

  const Academico=[ //academico de muestra
    {NombreAcademico:"Nombre Apellido", rut:"11252214", FechaNacimiento:"17/7/2123", LinkGoogleScholar:"jjs88jk"}
  ]
  const [academico, setAcademico] = useState({
    NombreAcademico:"Nombre Apellido", 
    Rut:"11252214", 
    FechaNacimiento:"17/7/2123", 
    LinkGoogleScholar:"jjk99",
    Correo:"correo@mail.com",
    Descripcion:"Profesor asistente, Escuela informática y Telecomunicaciones, Jornada completa...",
  });
  const entradasData= [ //entradas de muestra
    {
      _id:'8 ',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Publicación",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: null,
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
    {
      _id:'7',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Publicación",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: null,
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
    {
      _id:'5',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Concurso",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: null,
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
    {
      _id:'4',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Premio",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: "Categoria",
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
    {
      _id:'1',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Premio",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: "Categoria",
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
      {
      _id:'2',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Publicación",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: "Categoria",
      LugarObtenido: "Lugar obtenido",
      Institución: null},
      {
      _id:'3',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Concurso",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: "Categoria",
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
      {
      _id:'4',
      NombreEntrada: "Nombre de entrada",
      TipoEntrada: "Conferencia",
      IntervaloPaginas: "15-21",
      Autores: "autor1, autor2",
      FechaEntrada: "18-15-2020",
      Revista: "Revista",
      Volumen: 1,
      NumeroTomo: 1,
      Categoria: "Categoria",
      LugarObtenido: "Lugar obtenido",
      Institución: "Institución"},
  ]
  const [entradas, setEntradas] = useState(entradasData); //estado de entradas de muestra

  const [plantilla,setPlantilla] = useState({ //plantilla que se muestra
    Id:"",
    Nombre:"",
    Color:"azul",
    Fuente:"Georgia",
    Descripcion:"Profesor asistente, Escuela informática y Telecomunicaciones, Jornada completa...",
    TipoPlantilla:"A"
  })
  


  const [plantillasDB , setPlantillasDB] = useState([]) //Plantillas de la BD

  useEffect(()=>{
    ObtenerDatos()
  }, [update])

  const ObtenerDatos = async () => {
    const data = await fetch('http://localhost:4000/api/Template')
    const plantillas = await data.json()
    setPlantillasDB(plantillas.Templates)
  }
  const ChangeColor = ( color ) =>{
    console.log(color);
    setPlantilla({
      Id:plantilla.Id,
      Nombre:plantilla.Nombre,
      Descripcion:plantilla.Descripcion,
      Color:color,
      Fuente: plantilla.Fuente ,
      TipoPlantilla:plantilla.TipoPlantilla          
    })
  }
  const ChangeFuente = ( fuente ) =>{
    console.log(fuente);
    setPlantilla({
      Id:plantilla.Id,
      Nombre:plantilla.Nombre,
      Descripcion:plantilla.Descripcion,
      Color:plantilla.Color,
      Fuente:fuente,
      TipoPlantilla:plantilla.TipoPlantilla  
    })
  }
  const ChangeTipoPlantilla= ( tipo ) =>{
    console.log(tipo);
    setPlantilla({
      Id:"",
      Nombre:"",
      Descripcion:"Profesor asistente, Escuela informática y Telecomunicaciones, Jornada completa...",
      Color:"azul",
      Fuente:"Georgia",
      TipoPlantilla:tipo
    })
  }
  const ChangeDescripcion= (event) =>{
    setPlantilla({
        ...plantilla, 
        [event.target.name] : event.target.value
    })
  }
  const ChangeNombre= (event) =>{
    setPlantilla({
        ...plantilla, 
        [event.target.name] : event.target.value
    })
  }
  
  const BottonEditar = ( item ) =>{
    console.log(item)
    setPlantilla({
      Id: item._id,
      Nombre: item.Nombre,
      Descripcion: item.Descripcion,
      Color:item.Color,
      Fuente:item.Fuente,
      TipoPlantilla:item.TipoPlantilla
    })
    console.log(plantilla)
  }

  const CrearPlantilla = async(item) =>{
    if(plantilla.Nombre===""){plantilla.Nombre="Default"};
      item={
        Nombre:plantilla.Nombre,
        Descripcion:plantilla.Descripcion,
        Color:plantilla.Color,
        Fuente:plantilla.Fuente,
        TipoPlantilla:plantilla.TipoPlantilla
      }
      await PlantillasAPI.createTemplate(item)
      .then((response) => {
        showToast({
          type: 'success',
          text: 'Se ha guardado usuario con exito',
        });
      })
      .catch(() => {
        showToast({
          type: 'error',
          text: 'Error al guardar usuario',
        });
      })
      .finally(() => {
        history.push('/Plantillas');
      });
        setUpdate(!update);
  }

  const GuardarPlantilla = async() =>{
    if(plantilla.Nombre===""){plantilla.Nombre="Default"};
      await PlantillasAPI.updateTemplate(plantilla.Id, plantilla)
        .then(() => {
          showToast({
            type: 'success',
            text: 'Se ha modificado la plantilla con éxito',
          });
        })
        .catch(() => {
          showToast({
            type: 'error',
            text: 'Error en la modificación',
          });
        })
        .finally(() => {
          history.push('/Plantillas');
        });
        setUpdate(!update);
  }
  const EliminarPlantilla = async(idPlantilla) => {
    await PlantillasAPI.deleteTemplate(idPlantilla)
            .then(() => {
              showToast({
                type: 'success',
                text: 'Se ha eliminado al usuario con éxito',
              });
            })
            .catch(() => {
              showToast({
                type: 'error',
                text: 'Error en la eliminación',
              });
            });
            setUpdate(!update);
  }





  return (
    <Fragment>


        <div className="row ml-3 mr-3 mb-4">
          
        <ColumnaPlantillas BottonEditar={BottonEditar} ChangeTipoPlantilla={ChangeTipoPlantilla} 
                            plantillasDB={plantillasDB} EliminarPlantilla={EliminarPlantilla}/>
          <div className="col-md-3 bg-secondary text-white" style={{minWidth:"310px"}}>
          <div className="m-4">
          <h4>Opciones</h4>

            <div className="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label" >Nombre:</label>
                    <div className="col-sm-8">
                      <input type="text" class="form-control" placeholder="Nombre de la plantilla" maxLength="25"
                       name="Nombre" value={plantilla.Nombre} onChange={ChangeNombre}/>
                    </div>
                  </div>
          
            <h5 div className="pl-3">Colores:</h5>
            <div className="ml-4 pt-2">
            <button type="button" class="btn btn-primary btn-sm border-light" style={{borderRadius:"50%"}} onClick={() => ChangeColor('azul')}></button> 
            <button type="button" class="btn btn-danger btn-sm border-light ml-3" style={{borderRadius:"50%"}} onClick={() => ChangeColor('rojo')}></button> 
            <button type="button" class="btn btn-dark btn-sm border-light ml-3" style={{borderRadius:"50%"}} onClick={() => ChangeColor('negro')}></button>  
            </div>

            <h5 className="pl-3 mt-3">Fuentes:   </h5>
                <div className="pt-2">
                <button type="button" class="btn btn-dark btn-sm btn-block text-left mb-2" 
                style={{fontFamily:"Consolas"}} onClick={() => ChangeFuente('Georgia')}>
                  Tipo 1</button> 
                <button type="button" class="btn btn-dark btn-sm btn-block text-left mb-2" 
                style={{fontFamily:"arial"}} onClick={() => ChangeFuente('arial')}>
                  Tipo 2</button>
                <button type="button" class="btn btn-dark btn-sm btn-block text-left mb-2"
                style={{fontFamily:"sans-serif"}} onClick={() => ChangeFuente('')}>
                  Tipo 3</button> 
                           
                </div>
            <h5 className="pl-3 mt-3">Descripción:</h5>
            <div className="form-group ml-4 mr-4">
              <textarea className="form-control" name="Descripcion" rows="3" maxLength="100" value={plantilla.Descripcion}  onChange={ChangeDescripcion}
              style={{fontSize:"12px", maxHeight:"80px", minHeight:"70px"}}></textarea>
            </div>
          </div>  
          </div>
          <div className="col-md-4 bg-light card border-secondary  " style={{minWidth:"510px"}}>
            <div className="m-4" style={{height:"420px"}}>
              {(plantilla.TipoPlantilla==="A")?   
               <PlantillaA academico={academico} plantilla={plantilla} entradas={entradas}/>:''} 
              {(plantilla.TipoPlantilla==="B")?   
               <PlantillaB academico={academico} plantilla={plantilla} entradas={entradas}/>:''}  
              {(plantilla.TipoPlantilla==="C")?   
               <PlantillaC academico={academico} plantilla={plantilla} entradas={entradas}/>:''}       
          </div>     
              <ul className="pagination justify-content-center">
              <div className="btn-group btn-group-sm mb-2"  role="group" aria-label="Basic example">
                {(plantilla.Id === "")? 
                
                  <><button type="button" class="btn btn-success" title="Guardar" 
                  style={{fontSize:"16px"}} onClick={() => CrearPlantilla()}>Crear plantilla</button>
                  <button type="button" class="btn btn-dark ml-1" title="Usar plantilla en curriculum" 
                  style={{fontSize:"16px"}} >Usar plantilla</button>  </>
                : 
                  <><button type="button" class="btn btn-warning" title="Guardar" 
                  style={{fontSize:"16px"}}  onClick={() => GuardarPlantilla()}  >Guardar cambios</button>
                  <button type="button" class="btn btn-dark ml-1" title="Usar plantilla en curriculum" 
                  style={{fontSize:"16px"}} >Usar plantilla</button>  </>
                }
                
              </div>
              </ul>
            </div>
            
        </div>

    </Fragment>
  );
};

export default Plantillas;
