<template>
    <div>
      <nav class="navbar">
          <span v-if="$store.getters.isLogged" class="mr-2">{{$store.getters.email}}</span>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #a95ea6;
    padding: 16px;
    color: white;
  }
  
  </style>
  