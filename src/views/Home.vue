<template>
  <div class="home">
    <Navbar title="Usuarios"/>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title><span class="text-h5">Editar Usuario</span></v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="emailRules"
                  v-model="modify.email"
                  label="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="modify.phone"
                  label="Télefono"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="websiteRules"
                  v-model="modify.website"
                  label="Website"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="modify.company.name"
                  label="Nombre de la empresa"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>
          <v-btn
            color="green"
            text
            :loading="saveLoading"
            @click="editUserInformation"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Table
      :data="tableData"
      @posts="(id) => $router.push(`posts/${id}`)"
      @edit="editUser"
      @delete="deleteUser" />
  </div>
</template>

<script>
import axios from 'axios';
import Table from '../components/Table.vue';
import Navbar from '../components/Navbar.vue';

const modifyReset = {
  id: null,
  email: null,
  phone: null,
  website: null,
  company: { name: null },
};

export default {
  name: 'Home',
  components: {
    Table,
    Navbar,
  },
  data: () => ({
    tableData: [],
    dialog: false,
    modify: modifyReset,
    saveLoading: false,
    emailRules: [(v) => /.+@.+\..+/.test(v) || 'Ingrese un email valido'],
    websiteRules: [
      (v) => /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
        v,
      ) || 'Ingrese un sitio web valido',
    ],
  }),
  methods: {
    async deleteUser(user) {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${user}`,
      );
      this.tableData = this.tableData.filter((elem) => elem.id !== user);
      console.log(res);
    },
    editUser(user) {
      this.modify.id = user;
      this.dialog = true;
    },
    async editUserInformation() {
      this.saveLoading = true;
      const { id } = this.modify;
      const i = this.tableData.findIndex((elem) => elem.id === id);

      this.tableData[i].email = this.modify.email || this.tableData[i].email;
      this.tableData[i].phone = this.modify.phone || this.tableData[i].phone;
      this.tableData[i].website = this.modify.website || this.tableData[i].website;
      this.tableData[i].company.name = this.modify.company.name || this.tableData[i].company.name;

      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        this.modify,
      );
      console.log(res);

      this.modify = {
        id: null,
        email: null,
        phone: null,
        website: null,
        company: { name: null },
      };

      this.dialog = false;
      this.saveLoading = false;
    },
  },
  async mounted() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.tableData = res.data;
  },
};
</script>

<style scoped>
.home {
  width: 95%;
  max-width: 1500px;
  margin-top: 25px;
}
</style>
