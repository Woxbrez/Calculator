new Vue({
    el:'#app',
    data:{
        txtSupport: '',
        expression: '',
    },
    methods:{
        clearExpression: function(){
            this.expression = '';
            this.txtSupport = '';
        },
        delExpression: function(){
            let aux = this.expression.toString();
            let array = aux.split(" ");
            aux = array[array.length-1];
            array[array.length-1] = aux.substring(0, aux.length-1);     
            this.expression = '';
            for(i = 0; i < array.length; i++){
                if(array[i] != ''){
                    this.expression += " " + array[i];
                }
            }
        },
        resultExpression: function(){
            let aux = this.expression.toString();
            let array = aux.split(" ");
            this.txtSupport = this.expression;
            for(i = 0; i < array.length; i++){
                if(/[0-9]/.exec(array[i])){
                    array[i] = parseFloat(array[i]);
                }
                switch(array[i]){
                    case "%":
                        array[i] = array[i-1]  %  array[i+1];
                        array.splice(i-1, 1);
                        array.splice(i, 1);
                        i = 0;
                        break;
                    case "*":
                        array[i] = array[i-1]  *  array[i+1];
                        array.splice(i-1, 1);
                        array.splice(i, 1);
                        i = 0;
                        break;
                    case "/":
                        array[i] = array[i-1]  /  array[i+1];
                        array.splice(i-1, 1);
                        array.splice(i, 1);
                        i = 0;
                        break;
                    default:
                        break;
                }
            }
           
            for(i = 0; i < array.length; i++){
                switch(array[i]){
                    case "-":
                        array[i] = array[i-1]  -  array[i+1];
                        array.splice(i-1, 1);
                        array.splice(i, 1);
                        i = 0;
                        break;
                    case "+":
                        array[i] = array[i-1]  +  array[i+1];
                        array.splice(i-1, 1);
                        array.splice(i, 1);
                        i = 0;
                        break;
                    default:
                        break;
                }
            }
            this.expression = array[0];
        },
        addExpression: function(c){
            this.expression +=  c;
        },
        addOperator: function(c){
            let aux = this.expression.toString();
            let array = aux.split(" ");
            if(/[0-9]/.exec(array[array.length-1])){
                this.expression += " " + c + " ";
            }
            
        },
    }
})