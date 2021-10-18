<template>
  <header>
    <h1>LOGO</h1>
    <img
      src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
      alt="Active User Avatar"
      class="avatar">
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-height: 45px;

    box-sizing: border-box;
    padding: 20px;

    background: #7bc6cc;
    background: -webkit-linear-gradient(to right, #be93c5, #7bc6cc);
    background: linear-gradient(to right, #be93c5, #7bc6cc);
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 1.7rem;

    color: white;
  }

  img.avatar {
    width: 50px;
    border-radius: 50%;
  }
</style>
