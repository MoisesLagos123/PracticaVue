<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">THE BURGER PRINCE</b-nav-item>

          <!-- Navbar dropdowns -->
          
          <b-nav-item-dropdown text="MENU" right>
            <b-dropdown-item href="/TablaBurger">LISTADO DEL MENU</b-dropdown-item>
            <b-dropdown-item href="/TablaBurgerAgregar">AGREGAR NUEVO MENU</b-dropdown-item>

          </b-nav-item-dropdown>
        </b-navbar-nav>
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
