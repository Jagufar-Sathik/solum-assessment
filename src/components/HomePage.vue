<template>
    <div>
        <h1>Welcome {{ email }}</h1>
        <DataTable :table-data="tableData" />
    </div>
</template>

<script>
import axios from 'axios';
import DataTable from '@/components/DataTable.vue';

export default {
    components: {
        DataTable
    },
    data() {
        return {
            tableData: [],
            headers: [
                { text: 'User ID', value: 'userId', sortable: true },
                { text: 'ID', value: 'id', sortable: true },
                { text: 'Title', value: 'title', sortable: true },
                { text: 'Body', value: 'body', sortable: true }
            ],
            search: ''
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        email() {
            return this.$store.getters.email;
        },
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this.tableData = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }


    }
};
</script>