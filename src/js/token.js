function getToken(){
    const token = localStorage.getItem("token");
    if (token === "" || token == null) {
        this.$message({
            showClose: true,
            message: "请先登录",
            type: "error",
            duration: "3000"
        });
        this.$router.push({ path: "/" });
    }
    return token;
}

function setToken(token){
    localStorage.setItem("token", token);
}
export default {
    set : function(token){
        return setToken(token)
    },
    get : function(){
        return getToken()
    }
}