<template>
    <header>
        <div class="header_wrap">   
            <div class="nav">               
                <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.isHidden">
                        <el-submenu :index="index+''" v-if="!item.leaf">
                            <template slot="title"><span  @click.stop='changeRouter(item)'>{{item.name}}</span></template>
                            <el-menu-item v-for="(child,idx) in item.children" :index="child.path" v-show="!child.isHidden"  :key="idx">{{child.name}}
                            <i :class="item.iconCls">&#xe6a7;</i></el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf && item.children.length > 0" :index="item.children[0].path">
                            <i :class="item.iconCls"></i>{{item.children[0].name}}
                        </el-menu-item>
                    </template>
                </el-menu>
            </div>
            <div class="logo">
                
            </div>
        </div>            
    </header>
</template>
<script type="text/javascript">
    import { bus } from '../components/bus'
    export default{       
        data(){
            return{
                pageName:''                
            }
        },
        created(){
            const self = this;
            var page = window.localStorage.getItem('pageName');
            self.pageName = page;
            
        },
        methods:{
            goBack(){
                window.history.back();
            },
            changeRouter(row){
                if(row.name == '关于我们'){ 
                    this.$router.push({path:'/pages/about'});
                }else if(row.name == '公告动态'){ 
                    this.$router.push({path:'/pages/industry'});
                }else if(row.name == '业务介绍'){ 
                    this.$router.push({path:'/pages/business'});
                }
            }
        }        
    }
</script>