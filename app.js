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
            this.showEmail = "Email: " + this.email;
            this.showPassword = "password: " + this.password;
        }
    }
});