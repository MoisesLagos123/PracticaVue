<template>
  <div class="mt-4 row justify-content-center">
      <div class="col-lg-6 ">
        <b-card title="AGREGAR MENU" class="ml-5 mr-5 mb-5 mt-5 pt-3 shadow-lg">
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="nombre" label="Nombre" label-for="nombre" class="mt-4">
                <b-form-input
                    id="nombre"
                    v-model="form.nombre"
                    type="text"
                    placeholder="Ingresa nombre del plato"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="ingredientes" label="ingredientes:" ref="ingredientes" label-for="ingredientes">

              <div class="input-group mb-3">
                <b-form-input 
                    class="form-control" 
                    id="ingredientes" 
                    v-model="form.ingredientes" 
                    placeholder="ingresa ingredientes"
                ></b-form-input>

                <div class="input-group-append">
                  <b-button v-on:click="agregar"  variant="outline-primary">Agregar Ingrediente</b-button>
                </div>
              </div>

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


            <b-button type="submit" variant="primary"  class="mr-4">Crear Nuevo Menu</b-button>
          </b-form>

    </b-card>
      </div>
      
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
      //----------------------------------------
      //              AGREGAR
      //----------------------------------------

      // Btb Cargar Ingredientes del modal (agrega los ingredientes al array)
      agregar() {
           if(this.form.ingredientes){
                let dato = this.form.ingredientes
                ArIngredientes.push(dato)
                this.form.ingredientes = ''
           }else{
               alert('debe ingresar algun dato')
           }
        },
        // Btn agregar Menu (procede a agregar la fila con los parametros solicitados)
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
      }

    }
  }
</script>