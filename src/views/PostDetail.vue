<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
    <b-container fluid class="mt-30">
      <b-row class="mt-3">
        <b-col xl="12" class="mb-5 mb-xl-0">
          <b-card
              border-variant="primary"
              header="Comments"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
          >
            <dynamic-table table-name="comments" :items="commentList" :fields="commentFields"></dynamic-table>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </base-header>
</template>
<script>

import axios from "axios";
import DynamicTable from "@/components/DynamicTable";

export default {
  name: 'postDetails',
  components: {
    DynamicTable
  },
  data() {
    return {
      postId: this.$route.params.id,
      commentList: [],
      commentFields: [
        { key: 'id', label: 'Id', sortable: true, sortDirection: 'desc'},
        { key: 'postId', label: 'PostId', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Person e-mail', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ]
    };
  },
  methods: {
  },
  watch: {
    "$route"(to,from) {
      this.postId = to.params.id;
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + this.postId + "/comments")
        .then(response => {
          this.commentList = response.data
        })
        .catch(e => console.log((e)));
  },
  mounted() {
  }
};
</script>
<style>
</style>
