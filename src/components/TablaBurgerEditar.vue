<template>
  <div style="margin: 0 auto; width:80%">
      <b-card title="Editar MENU" class="ml-5 mr-5 mb-5">
        <b-form @submit="onSubmit" v-if="show">
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
            
            placeholder="ingresa ingredientes"
            
            ></b-form-input>
            <b-button v-on:click="agregar" variant="primary" class="mt-2">Agregar Ingrediente</b-button>
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
  </div>
</template>

<script>
import axios from 'axios'
let ArIngredientes =[]
  export default {
    data() {
      return {
        form: {
          nombre: '',
          calorias: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        //alert(JSON.stringify(this.form)
        axios
            .post("https://prueba-hamburguesas.herokuapp.com/burger/",{nombre: this.form.nombre, ingredientes: ArIngredientes, calorias: this.form.calorias})
            

      },
      
        agregar() {
           
            let dato = 'test'
            
            let insert = ArIngredientes.push(dato)
            console.log(insert)
            console.log(ArIngredientes)
            alert(ArIngredientes)

            
        }
    }
  }
</script>