<template>
  <div class="mt-4" style="margin: 0 auto; width:60%">
      <b-card title="Agregar MENU" class="ml-5 mr-5 mb-5">
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
            v-model="form.ingredientes"
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
          ingredientes: '',
          calorias: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        if(ArIngredientes.length == 0){
            alert('Debe ingresar por lo menos un ingrediente')
        }else{
            const insert = axios.post("https://prueba-hamburguesas.herokuapp.com/burger/",{nombre: this.form.nombre, ingredientes: ArIngredientes, calorias: this.form.calorias})
            if(insert){
                alert('Se ha agregado un nuevo menu')
            }else{
                alert('No fue posible agregar este menu')
            }
        }
        
      },
      
        agregar() {
           if(this.form.ingredientes){
                let dato = this.form.ingredientes
                ArIngredientes.push(dato)
                this.form.ingredientes = ''
           }else{
               alert('debe ingresar algun dato')
           }

            

            
        }
    }
  }
</script>