
<template>
    <div class="mt-4 row justify-content-center">
        <div class="col-lg-10 mt-5 ">
        <!-------- Tabla Menu ---------->

        <b-card title="MENU" class="ml-5 mr-5 mb-5 shadow-lg"> 
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <table class="table table-bordered  table-hover" >
                    <thead class="thead-dark">
                        <tr>
                            <th>NRO</th>
                            <th>DESCRIPCION</th>
                            <th>OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in todos" :key="todo.id">
                            <td >{{todo.id}}</td>
                            <td>{{todo.nombre}}</td>
                            <td>
                                <b-button   variant="ligth" v-on:click="tomarDatosEditar(todo)" v-b-modal.modal-1> <img class='btnTabla' src="../assets/editar.png"> </b-button>
                                <b-button   variant="ligth" v-on:click="verDetalles(todo)" v-b-modal.modal-2> <img class='btnTabla' src="../assets/evaluacion.png"> </b-button>
                                <b-button   variant="ligth" v-on:click="confirmarElimirar(todo)" v-b-modal.modal-3>  <img  class='btnTabla' src="../assets/boton-x.png"> </b-button>
                            </td>
                        </tr>
                    </tbody>
            </table>

                </div>
            </div>  
             
        </b-card>



        <div><!-------- Modal ---------->

            <!-------- Modal Editar ---------->
            <b-modal ok-only id="modal-1" title="Editar Menú"  @hidden="reset" @ok="reset">
                
                    <b-form  v-if="show" @submit="editar" >
                        <b-form-group id="numero" label="Numero:" label-for="numero">
                            <b-form-input
                                id="numero"
                                v-model="form.numero"
                                type="text"
                                placeholder="No hay numero de Menu"
                                disabled
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="nombre" label="Nombre" label-for="nombre">
                            <b-form-input
                                id="nombre"
                                v-model="form.nombre"
                                type="text"
                                placeholder="Ingresa nombre del plato"
                                required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="calorias" label="calorias:" label-for="calorias">
                            <b-form-input
                                id="calorias"
                                type="number"
                                v-model="form.calorias"
                                placeholder="ingresa numero de calorias"
                                required
                            ></b-form-input >
                        </b-form-group>
                        <b-card  class="ml-1 mr-1 mb-5">
                            <b-form-group id="ingredientes" label="ingredientes:" ref="ingredientes" label-for="ingredientes">
                                <div class="input-group mb-3">
                                    <b-form-input
                                        class="form-control"
                                        id="ingredientes"
                                        v-model="form.ingredienteNuevo"
                                        placeholder="Ingresa un Ingrediente"
                                    ></b-form-input>
                                    <div class="input-group-append">
                                        <b-button v-on:click="cargarIngrediente" variant="outline-primary" >Agegar</b-button>
                                    </div>
                                </div>
                            </b-form-group>
                                <div class="input-group mb-3 mt-5">
                                    <b-form-input
                                        class="form-control" 
                                        id="ingredientes"
                                        v-model="form.ingredientes"
                                        placeholder="Parece que no hay Ingrediente"
                                        disabled
                                    ></b-form-input>
                                    <div class="input-group-append">
                                        <b-button v-on:click="eliminarIngrediente" variant="outline-primary" >Eliminar</b-button>
                                    </div>
                                </div>
                        </b-card>
                        <b-button type="submit" variant="primary" class="mr-4">Editar Menú</b-button>
                    </b-form>
            </b-modal>

            <!-------- Modal Visualizar ---------->
            <b-modal ok-only  id="modal-2" title="DETALLES DEL MENÚ">
                <b-form  v-if="show">
                        <b-form-group id="numero" label="Numero:" label-for="numero">
                            <b-form-input
                                id="numero"
                                v-model="form.numero"
                                type="text"
                                placeholder="No hay numero de Menu"
                                disabled
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="nombre" label="Nombre" label-for="nombre">
                            <b-form-input
                                id="nombre"
                                v-model="form.nombre"
                                type="text"
                                placeholder="No hay nombre del plato"
                                disabled
                            ></b-form-input>
                        </b-form-group>
    
                        <b-form-group id="ingredientes" label="ingredientes:" ref="ingredientes" label-for="ingredientes">
                            <b-form-input
                                id="ingredientes"
                                v-model="form.ingredientes"
                                placeholder="No hay ingredientes"
                                disabled
                            ></b-form-input>
                            
                        </b-form-group>

                        <b-form-group id="calorias" label="calorias:" label-for="calorias">
                            <b-form-input
                                id="calorias"
                                type="number"
                                v-model="form.calorias"
                                placeholder="No hay numero de calorias"
                                disabled
                            ></b-form-input >
                        </b-form-group>
                    </b-form>
            </b-modal>

             <!-------- Modal Eliminar ---------->
            <b-modal  id="modal-3" title="Eliminar MENU" @ok="eliminar(form.numero)">
                <H5>¿Seguro que deseas eliminar este plato del menú?</H5>
                <b-form  v-if="show">
                        <b-form-group id="numero" label="Numero:" label-for="numero">
                            <b-form-input
                                id="numero"
                                v-model="form.numero"
                                type="text"
                                placeholder="No hay numero de Menu"
                                disabled
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="nombre" label="Nombre" label-for="nombre">
                            <b-form-input
                                id="nombre"
                                v-model="form.nombre"
                                type="text"
                                placeholder="No hay nombre del plato"
                                disabled
                            ></b-form-input>
                        </b-form-group>
                    </b-form>
            </b-modal>

        </div>
        </div>
    </div>
</template>
<style>
    body{
        background-color: rgba(0, 0, 0, 0.096);
    }
    .btnTabla{
    width: 35px;
    height: 35px;
}
</style>

<script>
import axios from 'axios'
let ArIngredientes =[]
export default{
    data(){
        return{
            form: {
                numero:  '',
                nombre:  '',
                ingredientes: '',
                calorias: '',
                ingredienteNuevo: '',
                ingredientelista: [1,2,3],
        },
        show: true,
      
            todos:null,
            event: "click"
            
        }
    },
    
    mounted(){
        this.getTodos();
    },
    methods: {
        //----------------------------------------
        //      CARGA DE DATOS EN LA TABLA
        //----------------------------------------
        getTodos(){
            axios
                .get('https://prueba-hamburguesas.herokuapp.com/burger/')
                .then(response => {
                
                    this.todos = response.data
                })
                .catch(e=> console.log(e)) 
        },
        //----------------------------------------
        //              EDITAR
       //----------------------------------------
        // Btn Editar de la tabla (carga la fila seleccionada en el modal)
        tomarDatosEditar(todos) {
            this.form.numero = todos.id 
            this.form.nombre = todos.nombre 
            this.form.calorias = todos.calorias
            // para evitar que se forme un array dentro de otro se debe recorrer el array
            let dato = todos.ingredientes
            for(const elemento of dato){
                ArIngredientes.push(elemento)
            }
            this.form.ingredientes= ArIngredientes.toString()
        },
        // Btb Cargar Ingredientes del modal (agrega los ingredientes al array)
        cargarIngrediente(){
            let ingrediente = this.form.ingredienteNuevo
            ArIngredientes.push(ingrediente)
            this.form.ingredientes= ArIngredientes.toString()
            this.form.ingredienteNuevo = ''
        },
        
        // Btb Eliminar Ingredientes del modal (elimina ingredientes en el array)
        eliminarIngrediente(){
            ArIngredientes.pop()
            this.form.ingredientes= ArIngredientes.toString()
        },
        // Btn Editar Menu (procede a Actualizar la fila seleccinada)
        editar(event){
            event.preventDefault()
            console.log(ArIngredientes)
            axios.put("https://prueba-hamburguesas.herokuapp.com/burger/"+this.form.numero+"/",{nombre: this.form.nombre, ingredientes: ArIngredientes, calorias: this.form.calorias})
            .then( location.reload() ) 
            .catch(e=> console.log(e))  
        },
        


        //----------------------------------------
        //              ELIMINAR
       //----------------------------------------
        //Btn Eliminar de la tabla (carga la fila seleccionada en el modal)
        confirmarElimirar(todos){
            this.form.numero = todos.id 
            this.form.nombre = todos.nombre 

            
        },
        // Btn Eliminar Menu (despues de la confimacion se procede a eliminar la fila seleccinada)
        async eliminar(todo)  {
            try{
                await axios.delete('https://prueba-hamburguesas.herokuapp.com/burger/'+todo)
                location.reload()
            }catch(error){
                alert('Se ha producido un error inesperado ')
                console.log(error)
            }
        },

        //----------------------------------------
        //           VER DETALLES
       //----------------------------------------
        // Btn Ver Detalles Menu (carga la fila seleccionada en el modal)
        verDetalles(todos) {
            this.form.numero = todos.id 
            this.form.nombre = todos.nombre
            this.form.calorias = todos.calorias
            this.form.ingredientes= todos.ingredientes.toString()

        },
        // reset (esta función sirve para refrescar la página, así el array queda en blanco)
        reset(){
           location.reload()
        }
    }
    
}
</script>
