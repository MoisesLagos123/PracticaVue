<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">THE BURGER PRINCE</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <!------- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="col-sm-12">
              <b-button-group>
                <b-button to="/" class="mr-1">HOME</b-button>
                <b-button to="/TablaBurger" class="mr-1">TABLA BURGER</b-button>
                <b-button to="/TablaBurgerAgregar" class="mr-1">AGREGAR BURGER</b-button> 
              </b-button-group>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar> 
    </div>
    <router-view/>
    
  <!-------- footer -->
   
      
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
