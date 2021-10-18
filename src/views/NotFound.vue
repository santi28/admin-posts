<template>
  <div class="not_found">
    <img src="../assets/404.svg" alt="">
    <h1>Ups! Página no encontrada</h1>
    <v-btn class="primary button" to='/'>Volver al inicio</v-btn>
  </div>
</template>

<style scope>
  .not_found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    widows: 100%;
    height: 100%;

    font-family: Poppins;
  }

  .not_found img {
    width: 90%;
    max-width: 500px;
  }

  .not_found h1 {
    font-weight: 700;
    font-size: 1.5rem;

    text-align: center;
  }

  .not_found .button { margin-top: 20px; }
</style>
