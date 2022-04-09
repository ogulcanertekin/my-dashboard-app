<template>
  <b-container fluid class="pt-100">
    <card>
      <b-row align-v="center" slot="header" >
        <b-col cols="8">
          <h3 class="mb-0">Create New Post </h3>
        </b-col>
      </b-row>

      <b-form @submit.prevent="updateProfile">
        <h6 class="heading-small text-muted mb-4">User information</h6>

        <div class="pl-lg-4">
          <b-row>l
            <b-col lg="6">
              <base-input
                  type="text"
                  label="User Id"
                  placeholder="User Id"
                  v-model="newPost.userid"
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input
                  type="text"
                  label="Title"
                  placeholder="title"
                  v-model="newPost.title"
              >
              </base-input>
            </b-col>
          </b-row>
        </div>
        <hr class="my-4">
        <div class="pl-lg-4">
          <b-form-group label="Body" label-class="form-control-label" class="mb-0" label-for="body-form-textaria">
            <b-form-textarea
                rows="4"
                type="text"
                label="body"
                placeholder="body"
                v-model="newPost.body"
            >
            </b-form-textarea>
          </b-form-group>
        </div>
        <div class="pl-lg-4 mt-4 text-right">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </card>
  </b-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      newPost: {
        userid: '',
        title:'',
        body:''
      }
    };
  },
  methods: {
    updateProfile() {
      axios.post("https://jsonplaceholder.typicode.com/posts/",this.newPost)
        .then(response => {
          alert("Post has been created ! ");
        })
        .catch(e => console.log((e)));
    }
  }
};
</script>
<style></style>
