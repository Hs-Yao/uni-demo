<template>
    <div>
        <div class="card">卡片</div>
        <slot name="name" :user="user" :info="info"></slot>
        <slot name="age" :goods="goods"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                sex: '男'
            },
            info: {
                age: 18
            },
            goods: {
                stock: 100,
                specification: '红色'
            }
        }
    }
}
</script>

<style scoped>
    .card {
        width: 50px;
        height: 50px;
    }
</style>