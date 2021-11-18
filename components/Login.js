<template>

  <form class="row flex-fill py-3">

<div class="col d-flex align-items-end">

<div class="row g-3">

    <p class="h1">Ingresar</p>

    <div class="col-12">
      <div class="form-floating">
        <input class="form-control" id="inputNombre" placeholder="Nombre">
        <label for="inputNombre" class="form-label">Usuario</label>
      </div>
    </div>

    <div class="col-12">
      <div class="form-floating">
        <input class="form-control" id="inputApellido" placeholder="Apellido">
        <label for="inputApellido" class="form-label">Contraseña</label>
      </div>
    </div>

  </div>

</div>


  </form>


<div class="row flex-fill">
  <div class="col d-flex flex-column align-items-center justify-content-start">

    <router-link class="btn btn-primary btn-lg mb-3" to="/">
      Ingresar
    </router-link>

    <router-link class="btn btn-primary btn-lg" to="/resgister">
      Registrarse
    </router-link>

  </div>
</div>

</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search'
import BouquetList from '@/components/BouquetList'

export default {
  name: 'Bouquet',
  components: {
    Search,
    BouquetList
  }
}

</script>
