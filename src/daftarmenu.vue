<template>
    <div>
    <nav>
    <router-link to="/makanan">Makanan</router-link> |
    <router-link to="/minuman">Minuman</router-link> |
    <router-link to="/snack">Snack</router-link>
    </nav>
    <router-view/>
    </div>
</template>

<script>
export default {
    name:'daftarmenu'
}
</script>

<style lang="scss" scoped>

</style>