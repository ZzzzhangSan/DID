<template>
    <div style="margin-bottom: 30px;">
        <div style="height: 200px;text-align: center;font-size: 40px;line-height: 200px;">
            {{ title }}
        </div>
        <div style="height: 500px;width: 1400px;  margin: 0 auto;">
            xxxxx
        </div>
    </div>
</template>

<script>

export default {
    name: 'index',
    data() {
        return {
            title: '',
        }
    },
    mounted() {
        this.title = this.$route.query.content
    }
}


</script>

<style lang="less" scoped></style>