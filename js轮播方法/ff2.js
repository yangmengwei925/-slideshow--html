window.onload = function(){
        var img = document.getElementById('js');
        var txt = document.getElementById('txt');
            var dian = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
            var lbq;//轮播器
            var num=1;//图片路径初始值
            

            var aa = '第一张图片';
            var bb = '第二张图片';
            var cc = '第三张图片';
            var dd = '第四张图片';
            var ee = '第五张图片';
            var text = [aa,bb,cc,dd,ee];
            // 图片注释文字，使用数组装起来，方便待会轮播循环调用
            

            dian[num-1].style.color = "red" ;
            // 初始点的颜色



            function myjs(){

                lbq = setInterval(function() {
                    
                    num++;//每次循环num自增

                    if(num==6){
                        num = 1;
                    }//当num等于6时时num变回1，否者下边图片路径出错
                    
                    img.src= num +".jpg";//改变图片路径

                        for(i=0; i < dian.length ; i++){
                        dian[i].style.color = "white";
                        }//使用for循环，让所以点变为白色
                    dian[num-1].style.color = "red" ;//使图片对应点变为红色
                    txt.innerHTML = text[num - 1];//使用innerHtml改变注释文字内容    
                }, 2000);//轮播器，可以理解为延迟循环，这里是延迟2000毫秒做一次循环

            }//装轮播器的方法，方便后边调用




            myjs();//调用上边刚刚写的轮播器的方法

            dian[0].onmouseover = function(){  //onmousover鼠标悬停事件，悬停调用以下方法，当前是第一个点被鼠标悬停
            img.src= 1 +".jpg";//改变图片路径
            for(i=0; i < dian.length ; i++){
                dian[i].style.color = "white";
            }//使用for循环，让所以点变为白色
            dian[0].style.color = "red";//使图片第一个点变为红色
            dian[0].style.cursor = 'Pointer';//改变鼠标悬停时的样子
            clearInterval(lbq);//停止轮播器
            txt.innerHTML = text[0];//改变对应的注释    
                }
            dian[0].onmouseout = function(){  //onmouseout鼠标移开事件
                myjs();//鼠标移开后调用轮播器的方法
                
            }//1

            dian[1].onmouseover=function(){
            img.src= 2 +".jpg";
            for(i=0; i < dian.length ; i++){
                dian[i].style.color = "white";
            }
            dian[1].style.color = "red";
            dian[1].style.cursor = 'Pointer';
            txt.innerHTML = text[0];
            clearInterval(lbq);    
                }
            dian[1].onmouseout = function(){
                myjs();
                
            }//2

            dian[2].onmouseover=function(){
            img.src= 3 +".jpg";
            for(i=0; i < dian.length ; i++){
                dian[i].style.color = "white";
            }
            dian[2].style.color = "red";
            dian[2].style.cursor = 'Pointer';
            txt.innerHTML = text[0];
            clearInterval(lbq);    
                }
            dian[2].onmouseout = function(){
                myjs();
                
            }//3

            dian[3].onmouseover=function(){
            img.src= 4 +".jpg";
            for(i=0; i < dian.length ; i++){
                dian[i].style.color = "white";
            }
            dian[3].style.color = "red";
            dian[3].style.cursor = 'Pointer';
            txt.innerHTML = text[0];
            clearInterval(lbq);    
                }
            dian[3].onmouseout = function(){
                myjs();
                
            }//4

            dian[4].onmouseover=function(){
            img.src= 5 +".jpg";
            for(i=0; i < dian.length ; i++){
                dian[i].style.color = "white";
            }
            dian[4].style.color = "red";
            dian[4].style.cursor = 'Pointer';
            txt.innerHTML = text[0];
            clearInterval(lbq);    
                }
            dian[4].onmouseout = function(){
                myjs();
                
            }//5

}