<template>
    <el-container style="height:100%">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
        <el-header>
            <common-header></common-header>
        </el-header>
        <common-tag></common-tag>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import commonHeader from '../src/components/commonHeader.vue'
import commonAside from '../src/components/commonAside.vue'
import commonTag from '../src/components/commonTag.vue'
export default {
    name: 'Main',
    components: {
        commonAside,
        commonHeader,
        commonTag
    },
    data(){
        return{}
    }
}
</script>  
<style  scoped>
.el-header{
    background-color: #333;
}
.el-main {
    padding-top: 0;
}
</style>
