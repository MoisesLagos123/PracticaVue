
<template>
    <div style="margin: 0 auto; width:80%">
        <b-card title="MENU" class="ml-5 mr-5 mb-5">
            <b-button variant="success" class="mb-4" style="margin-left: -50em"  v-on:click="agregar">AGREGAR</b-button>
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
                        <td>{{todo.id}}</td>
                        <td>{{todo.nombre}}</td>
                        <td>
                            
                            <b-button variant="warning" class="mr-2" v-on:click="editar">EDITAR</b-button>
                            <b-button variant="danger" class="mr-2"  v-on:click="eliminar">ELIMINAR</b-button>
                            <b-button variant="dark" class="mr-2" v-on:click="verDetalles">VER DETALES</b-button>
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
                    console.log(response)
                    this.todos = response.data
                })
                .catch(e=> console.log(e))
        },
        agregar() {
            alert("Usted seleccionó agregar");
            
        },
        editar() {
            alert("Usted seleccionó Editar");
        },
        eliminar() {
            alert("Usted seleccionó Eliminar");
        },
        verDetalles() {
            alert("Usted seleccionó Ver detalles");
        }
    }
    
}
</script>