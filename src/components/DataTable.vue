<template>
    <v-container>
        <v-data-table :headers="headers" :items="filteredData" :search="search" class="elevation-1">
            <template v-slot:top>
                <v-text-field v-model="search" variant="outlined" label="Search" class="mx-4"
                    prepend-inner-icon="mdi-magnify"></v-text-field>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {
    props: {
        tableData: Object
    },
    data() {
        return {
            headers: [
                { text: 'User ID', value: 'userId', sortable: true },
                { text: 'ID', value: 'id', sortable: true },
                { text: 'Title', value: 'title', sortable: true },
                { text: 'Body', value: 'body', sortable: true }
            ],
            search: ''
        };
    },
    computed: {
        email() {
            return this.$store.getters.email;
        },
        filteredData() {
            return this.tableData.filter(post => {
                const searchTerm = this.search.toLowerCase();
                return post.title.toLowerCase().includes(searchTerm) ||
                    post.body.toLowerCase().includes(searchTerm) ||
                    post.userId.toString().includes(searchTerm) ||
                    post.id.toString().includes(searchTerm);
            });
        }
    },
}
</script>

<style scoped>
h1 {
    margin-bottom: 20px;
}
</style>