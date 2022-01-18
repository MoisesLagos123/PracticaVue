<template>
    <div>
        <b-card title="MENU" class="ml-5 mr-5 mb-5">
            <b-button variant="success" class="mb-4">AGREGAR</b-button>
            <table class="table">
                <thead>
                    <tr>
                        <th>NRO</th>
                        <th>DESCRIPCION</th>
                        <th>CALORIAS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td>{{todo.id}}</td>
                        <td>{{todo.nombre}}</td>
                        <td>
                            <b-button variant="dark" class="mr-2">VER DETALES</b-button>
                            <b-button variant="warning" class="mr-2">EDITAR</b-button>
                            <b-button variant="danger" >ELIMINAR</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>  
        </b-card>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            todos:null
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
                    console.log(response)
                    this.todos = response.data
                })
                .catch(e=> console.log(e))
        }
    }
    
}
</script>