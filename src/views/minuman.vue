<template>
    <div> <img src="../assets/lemontea.jpg" alt="lemontea">
    <h2>Lemon Tea Rp 15.000</h2>
  </div>

  <div>
    <img src="../assets/icetea.jpg" alt="icetea">
    <h2>Ice Tea Rp 10.000</h2>
  </div>

  <div>
    <img src="../assets/greentea.jpg" alt="greentea">
  <h2>Green Tea Rp 20.000</h2>
  </div>
</template>

<script>
export default {
  name: 'minuman',
  data() {
    return{
        lemontea:15000,
        icetea:10000,
        greentea:20000
    }
    
  },
}
</script>
