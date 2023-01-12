<template>
  <h1>Selamat Datang di Aplikasi Jajanan</h1>
  <p>Silahkan Dipesan</p>
  <div>  
  <nav>
    <router-link to="/makanan">Makanan</router-link> |
    <router-link to="/minuman">Minuman</router-link> |
    <router-link to="/snack">Snack</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #FFA07A;
}
template {
  background-color:white;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:#FFA07A;
}

nav a.router-link-exact-active {
  color: #FF0000;
}
</style>
