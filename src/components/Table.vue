<template>
  <div class="table_wrapper">

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Website</th>
          <th>Nombre de la empresa</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="field in data" :key="field.id">
          <td>{{field.name}}</td>
          <td>{{field.username}}</td>
          <td>{{field.email}}</td>
          <td>{{field.phone}}</td>
          <td>{{field.website}}</td>
          <td>{{field.company.name}}</td>
          <td class="options">
            <button
              @click="$emit('delete', field.id)"
              class="material-icons">&#xe872;</button>
            <button
              @click="$emit('edit', field.id)"
              class="material-icons-round">&#xe3c9;</button>
            <button
              @click="$emit('posts', field.id)"
              class="material-icons-round">&#xe037;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.table_wrapper { overflow: auto; }

table {
  font-family: Poppins;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: collapse;
  margin: auto;
  padding:15px;
  width: 100%;
}

th {
  color:#666666;;
  background:#dddddd;

  border-bottom:1px solid #C1C3D1;
  padding:15px;

  font-size:1rem;
  font-weight: 500;
  text-align:left;
  vertical-align:middle;
}

tr {
  color:#000000;;
  background:#fafafa;

  border-bottom:1px solid #C1C3D1;

  font-size:1rem;
  font-weight: 400;
  text-align:left;
  vertical-align:middle;
}

th, tr { white-space: nowrap; width: auto; }

tr:last-child { border-bottom:none; }
td { padding: 5px 15px; }

.options { user-select: none; }
</style>
