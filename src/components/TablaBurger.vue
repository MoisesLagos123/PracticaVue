
<template>
    <div style="margin: 0 auto; width:80%">
        <b-card title="MENU" class="ml-5 mr-5 mb-5">
            
            <table class="table">
                <thead>
                    <tr>
                        <th>NRO</th>
                        <th>DESCRIPCION</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td >{{todo.id}}</td>
                        <td>{{todo.nombre}}</td>
                        <td>
                            <b-button variant="warning" class="mr-2" v-on:click="editar(todo)" v-b-modal.modal-1>EDITAR</b-button>
                            <b-button variant="danger" class="mr-2"  v-on:click="eliminar(todo.id)">ELIMINAR</b-button>
                            <b-button variant="dark" class="mr-2" v-on:click="verDetalles" v-b-modal.modal-2>VER DETALES</b-button>
                        </td>
                    </tr>
                </tbody>
            </table> 
        </b-card>

    <div>
        

        <b-modal id="modal-1" title="BootstrapVue">
            <b-card title="Editar MENU" class="ml-5 mr-5 mb-5">
        <b-form  v-if="show">
        <b-form-group id="nombre" label="Nombre" label-for="nombre">
            <b-form-input
            id="nombre"
            v-model="form.nombre"
            type="text"
            placeholder="Ingresa nombre del plato"
            required
            ></b-form-input>
        </b-form-group>

        
        
        <b-form-group id="ingredientes" label="ingredientes:" ref="ingredientes" label-for="ingredientes">
            <b-form-input
            id="ingredientes"
            v-model="form.ingredientes"
            placeholder="ingresa ingredientes"
            
            ></b-form-input>
            <b-button variant="primary" class="mt-2">Agregar Ingrediente</b-button>
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


        <b-button type="submit" variant="primary" class="mr-4">Crear Nuevo Menu</b-button>
        </b-form>

    </b-card>
        </b-modal>
        <b-modal id="modal-2" title="BootstrapVue">
            <p class="my-4">Ver Detalles</p>
        </b-modal>
    </div>

    </div>
    
    
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            form: {
          nombre: '',
          ingredientes: '',
          calorias: '',
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
        getTodos(){
            axios
                .get('https://prueba-hamburguesas.herokuapp.com/burger/')
                .then(response => {
                
                    this.todos = response.data
                })
                .catch(e=> console.log(e))
        },

        editar(todos) {
            this.form.nombre = todos.nombre 
            this.form.calorias = todos.calorias
            this.form.ingredientes = todos.ingredientes[0]
            console.log(todos.ingredientes.map(item =>item))
            let prueba = document.getElementById('test')
            console.log(prueba)
        },
        async eliminar(todo)  {

          await axios.delete('https://prueba-hamburguesas.herokuapp.com/burger/'+todo)
            location.reload()
        },
        verDetalles() {
            
        }
    }
    
}
</script>