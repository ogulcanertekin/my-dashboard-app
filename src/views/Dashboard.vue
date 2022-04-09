<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="Total Comments"
                      type="gradient-red"
                      :sub-title= "totalComments"
                      icon="ni ni-active-40"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Total Posts"
                      type="gradient-orange"
                      :sub-title="totalPosts"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Total Albums"
                      type="gradient-green"
                      :sub-title="totalAlbums"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Total Todos"
                      type="gradient-info"
                      :sub-title="totalTodos"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt-30">
      <b-row class="mt-3">
        <b-col xl="12" class="mb-5 mb-xl-0">
          <b-card
              border-variant="primary"
              header="Posts"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
          >
            <dynamic-table table-name="posts" :items="postList" :fields="postFields"></dynamic-table>
          </b-card>
        </b-col>
      </b-row>
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
<!--      <b-row class="mt-3">
        <b-col xl="6" class="mb-5 mb-xl-0">
          <b-card
              border-variant="primary"
              header="Albums"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
          >
            <dynamic-table :items="commentList" :fields="fields"></dynamic-table>
          </b-card>
        </b-col>
        <b-col xl="6" class="mb-5 mb-xl-0">
          <b-card
              border-variant="primary"
              header="Todos"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
          >
            <dynamic-table :items="commentList" :fields="fields"></dynamic-table>
          </b-card>
        </b-col>
      </b-row>-->
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>

  // Components
  import StatsCard from '@/components/Cards/StatsCard';
  import BaseInput from "@/components/Inputs/BaseInput";
  import DynamicTable from "@/components/DynamicTable";
  import axios from "axios";

  export default {
    components: {
      DynamicTable,
      BaseInput,
      StatsCard
    },
    data() {
      return {
        commentList: [],
        totalComments:0,
        commentFields: [
          { key: 'id', label: 'Id', sortable: true, sortDirection: 'desc'},
          { key: 'postId', label: 'PostId', sortable: true, sortDirection: 'desc' },
          { key: 'email', label: 'Person e-mail', sortable: true, sortDirection: 'desc' },
          { key: 'actions', label: 'Actions' }
        ],
        postList:[],
        totalPosts:0,
        postFields: [
          { key: 'id', label: 'Id', sortable: true, sortDirection: 'desc'},
          { key: 'userId', label: 'User Id', sortable: true, sortDirection: 'desc' },
          { key: 'title', label: 'Title', sortable: true, sortDirection: 'desc' },
          { key: 'actions', label: 'Actions' }
        ],
        albumList: [],
        totalAlbums:0,
        albumFields: [

        ],
        todoList: [],
        totalTodos:0,
        todoFields: [
          { key: 'id', label: 'Id', sortable: true, sortDirection: 'desc'},
          { key: 'userId', label: 'User Id', sortable: true, sortDirection: 'desc' },
          { key: 'title', label: 'Title', sortable: true, sortDirection: 'desc' },
          {
            key: 'isActive',
            label: 'Is Active',
            formatter: (value, key, item) => {
              return value ? 'Yes' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'actions', label: 'Actions' }
        ],
      };
    },
    methods: {
    },
    created() {
      axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
          console.log(response);
          this.commentList = response.data
          this.totalComments = response.data.length
        })
        .catch(e => console.log((e)));
      axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(response => {
            console.log(response);
            this.postList = response.data
            this.totalPosts = response.data.length
          })
          .catch(e => console.log((e)));
      axios.get("https://jsonplaceholder.typicode.com/albums")
          .then(response => {
            console.log(response);
            this.albumList = response.data
            this.totalAlbums = response.data.length
          })
          .catch(e => console.log((e)));
      axios.get("https://jsonplaceholder.typicode.com/todos")
          .then(response => {
            console.log(response);
            this.todoList = response.data
            this.totalTodos = response.data.length
          })
          .catch(e => console.log((e)));
    },
    mounted() {
    }
  };
</script>
<style>
</style>
