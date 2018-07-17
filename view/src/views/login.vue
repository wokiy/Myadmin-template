<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录爱极云后台管理系统
                </p>
                <div class="form-con">  
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem class="loginBtn">
                            <Button size="large" @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem> 
                    </Form>

                    <span class="imgOne">
                        <img src="http://49.4.64.6:8080/images/temp/s40.png" alt=""/>
                        S40-E地面站
                    </span>
                    <span class="imgTwo">
                        <img src="http://49.4.64.6:8080/images/temp/s40.png" alt=""/>
                        爱极云APP
                    </span>

                    <p class="login-tip">jasonlwy编写加监制</p>
                </div>
            </Card>
        </div>
    </div>
</template>
<style lang="less">
    @import './login.less';
</style>
<script>

import Cookies from 'js-cookie';
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'https://avatars3.githubusercontent.com/u/31529401?s=460&v=4');
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        }
    }
};
</script>

<style>

</style>
