new Vue({
    el:'#login',
    data:{   
         email: "",
                password: "",
                showEmail:"",
                showPassword:""
            
    },
    methods:{
        saveDetail: function() {
            this.showEmail = this.email;
            this.showPassword = this.password;
        }
    }
});