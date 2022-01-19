<template>
  <div style="margin: 0 auto; width:80%">
      <b-card title="MENU" class="ml-5 mr-5 mb-5">
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
            id="ingredientess"
            v-model="form.ingredientes"
            placeholder="ingresa ingredientes ingredientes"
            
            ></b-form-input>
            <b-button v-on:click="agregar" variant="primary" class="mr-4">Agregar Ingrediente</b-button>
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


        <b-button type="submit" variant="primary" class="mr-4">Submit</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          nombre: '',
          ingredientes: [],
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
            .post("https://prueba-hamburguesas.herokuapp.com/burger/",this.form)
            

      },
      
        agregar() {
           
            let dato = document.getElementById('ingredientess')
            let ingr = []
            let insert = ingr.push(dato)
            console.log(insert)
            console.log(ingr)

            
        }
    }
  }
</script>