window.onload = function(){

    var img = document.getElementsByClassName('f1')[0].getElementsByTagName('a');//声明变量img，使其等于类名为f1下的a标签自动生成为一个数组，数组名为img
    var text = document.getElementsByClassName('dian')[0].getElementsByTagName('a');
    var dian = document.getElementsByClassName('ul')[0].getElementsByTagName('li');


    var num = 1;
    //用作轮播器的循环，赋值为1的原因是因为下面轮播器的写法第一次调用时的值为当前值，因为
    //网页加载出来时自动显示第一张图片，当显示时间达到轮播器设定的轮播时间时，然后开始调用
    //轮播器，所以轮播器要从第二张图开始播放第二张图片在img数组里的位置为1，所以时num初始值为1
    
    
    dian[0].style.color = "red";//使第一个点变为红色
    var lbq;//声明一个变量，待会用来做计时器（轮播器）的名字




    function lb() {  //装轮播器的方法

        lbq = setInterval(function(){ //轮播器，并将其命名为lbq
        
            if(num == 5){
                num=0;
            }//当num等于5时就超出了img数组的范围，也就是没有了图片，要使num等于0然后继续数组的调用

            for( var i = 0; i < 5 ; i++){
                img[i].style.display = "none";//隐藏
                text[i].style.display = "none";//隐藏
                dian[i].style.color = "white";
            }//使用for循环让所有的图片和注释的css样式改为隐藏，所有的点变成白色

            img[num].style.display = "block";//使每次轮播对应的图片的css样式改为显示
            text[num].style.display = "block";//display为css样式中的显示类型，none：不显示次内容；block：显示为块级元素
            dian[num].style.color = "red";//使每次轮播对应点的css样式改为红色
            num++;//num自增

        },2000)//轮播器其实就是计时器，可以理解为延迟循环，这里设定为2000毫秒一次循环，每次循环num自增，通过此改变对应的信息
    }
    
    lb();//调用lb方法

        dian[0].onmouseover = function(){  //鼠标悬停事件onmouseover，这里是dian数组的第0位被悬停

                for( var i = 0; i < 5 ; i++){
                    img[i].style.display = "none";
                    text[i].style.display = "none";
                    dian[i].style.color = "white";
                }


                img[0].style.display = "block";
                text[0].style.display = "block";
                dian[0].style.color = "red";
                dian[0].style.cursor = "Pointer"//使对应点鼠标悬停时的css样式为一个手的形状
                clearInterval(lbq); //停止轮播器
            }

        dian[0].onmouseout = function(){   //鼠标移开事件onmousrout
            lb();//调用lb方法
        }//第一张
    
        dian[1].onmouseover = function(){
            for( var i = 0; i < 5 ; i++){
                img[i].style.display = "none";
                text[i].style.display = "none";
                dian[i].style.color = "white";
            }
            img[1].style.display = "block";
            text[1].style.display = "block";
            dian[1].style.color = "red";
            dian[1].style.cursor = "Pointer"
            clearInterval(lbq); 
            }
        dian[1].onmouseout = function(){
            lb();
        }//第二张

        dian[2].onmouseover = function(){
            for( var i = 0; i < 5 ; i++){
                img[i].style.display = "none";
                text[i].style.display = "none";
                dian[i].style.color = "white";
                
            }
            img[2].style.display = "block";
            text[2].style.display = "block";
            dian[2].style.color = "red";
            dian[2].style.cursor = "Pointer"
            clearInterval(lbq); 
            }
        dian[2].onmouseout = function(){
            lb();
        }//第三张

        dian[3].onmouseover = function(){
            for( var i = 0; i < 5 ; i++){
                img[i].style.display = "none";
                text[i].style.display = "none";
                dian[i].style.color = "white";
            }
            img[3].style.display = "block";
            text[3].style.display = "block";
            dian[3].style.color = "red";
            dian[3].style.cursor = "Pointer"
            clearInterval(lbq); 
            }
        dian[3].onmouseout = function(){
            lb();
        }//第四张


        dian[4].onmouseover = function(){
            for( var i = 0; i < 5 ; i++){
                img[i].style.display = "none";
                text[i].style.display = "none";
                dian[i].style.color = "white";
            }
            img[4].style.display = "block";
            text[4].style.display = "block";
            dian[4].style.color = "red";
            dian[4].style.cursor = "Pointer"
            clearInterval(lbq); 
            }
        dian[4].onmouseout = function(){
            lb();
        }//第五张

        



                

    
        
        
}
         