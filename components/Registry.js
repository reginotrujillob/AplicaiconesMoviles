<template>

  <form class="row flex-fill py-3">

<div class="col d-flex align-items-end">

<div class="row g-3">

    <p class="h1">Registrarse</p>

    <form class="row g-3 py-3">

      <div class="col-12">
        <div class="form-floating">
          <input class="form-control" id="inputNombre" placeholder="Nombre">
          <label for="inputNombre" class="form-label">Nombre</label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-floating">
          <input class="form-control" id="inputApellido" placeholder="Apellido">
          <label for="inputApellido" class="form-label">Apellido</label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-floating">
          <input class="form-control" id="inputNumero" placeholder="Numero de telefono">
          <label for="inputNumero" class="form-label">Numero de telefono</label>
        </div>
      </div>

      <div class="col-12">
        <div class="form-floating">
          <input class="form-control" id="inputCorreo" placeholder="Correo Electronico">
          <label for="inputCorreo" class="form-label">Correo Electronico</label>
        </div>
      </div>

      <div class="col-12 d-flex">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Aceptar tratamiento de datos
          </label>
        </div>
      </div>

    </form>

  </div>

</div>


  </form>


<div class="row flex-fill">
  <div class="col d-flex flex-column align-items-center justify-content-start">

        <router-link class="btn btn-primary btn-lg" to="/">
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
