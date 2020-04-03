<template>
    <div>
        <div @click="handleClick(123)">123</div>
        <div>654</div>
        <card>
            <template v-slot:name="{user,info}">
                <div @click="handleClick(user,info)">小明</div>
                <div>{{user.sex}}</div>
            </template>
            <template v-slot:age="{goods}">
                <div @click="jiegou(goods)">小红</div>
            </template>
        </card>
        <div>{{value | status}}</div>
    </div>
</template>

<script>
import card from '../../components/card'
export default {
    components: {
        card,
    },
    filters: {
        status(item) {
            console.log(item);
            return item == 18 ? item : 20
        }
    },
    data() {
        return {
            value: 18
        }
    },
    methods: {
        handleClick(scoped,info) {
            console.log(777,info);
            console.log(11,scoped);
        },
        jiegou(scoped) {
            console.log(scoped);
        }
    }
}
</script>

<style scoped>

</style>