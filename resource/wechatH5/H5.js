$(function(){
  $(".audio").click(function(){
    $(this).toggleClass("play");
    console.log("00");
    var audio=document.getElementById('audio');
    if(audio!==null){
    //检测播放是否已暂停.audio.paused 在播放器播放时返回false
    console.log(11);
     if(audio.paused)                     {
      audio.play();//audio.play();// 这个就是播放
      console.log(22);
      }else{
        audio.pause();// 这个就是暂停
        console.log(33);
      }
 }
});



  // 让每个列表充满整个屏幕
  $(".divList").css("height",$(window).height());
  // 初始化数据，其中listNum为当前列表的个数
  var arr=[0,0],listNum=6,startY=0,deltaY=0,canMove=false,tar=0,timer=null;
  document . addEventListener ( "touchstart" , function ( e ) {
    // e . preventDefault ( ) ;
    // 获取开始触屏时的位置
    var touch = e . touches [ 0 ] ;
    // startX = touch . pageX ;
    startY = touch . pageY ;
    arr[0]=startY; //保存刚开始触屏时的数据
    console.log("start:"+startY);
  });
  document . addEventListener ( "touchmove" , function ( e ) {
    e . preventDefault ( ) ;
    var touch = e . touches [ 0 ] ;
    // deltaX = touch . pageX -startX;
    deltaY = touch . pageY;
    canMove=true;  //判断是触屏还是点击屏幕，如果为点击，canMove默认为false
    console.log(canMove);
  });
  document . addEventListener ( "touchend" , function ( e ) {
    // e . preventDefault ( ) ;
    console.log("end:"+deltaY);
    arr[1]=deltaY; //保存触屏结束的数据
    if(canMove&&arr[1]-arr[0]<-30){
      tar=parseInt($(".divList.active").attr("data-tar"))+1;
      if(tar>=listNum+1){tar=1;} //如果切换的是最后一个，则循环播放
      console.log("下个现实的列表为:"+tar);
      // 让要现实的列表瞬间下移动自己的高度
      $("[data-tar='"+tar+"']").css("transform","translateY(100%)");
      // 添加transition，block样式，下滑时的定位z-index:2
      $("[data-tar='"+tar+"']").addClass("active current");
      // 一次性定时器，形成一个瞬间时间差，然后可以让动画在上移回来
      timer=setTimeout(function(){
        // 执行动画缓慢上滑
        $("[data-tar='"+tar+"']").css("transform","translateY(0)");
        clearTimeout(timer);
        timer=null;//清除定时器放在下一个之前，不然下一个定时器不执行
        /*$(".divList>p").removeClass("active actives");
          在执行元素的动画之前，先清除上次执行过的动画
          现在上个列表内元素已经执行过的动画，还存在
          而此时(上个列表动画还没有结束)清楚的话，用户会看到清楚的过程，有bug
          应该放在上个列表动画执行后清楚（下个定时器启动的时候，动画执行完）
        */
        // 列表css动画结束后，要执行的元素的动画，等待的时间为css动画的时间
        timer=setTimeout(function(){
          $(".divList>p").removeClass("active actives");//在执行元素的动画之前，先清除上次执行过的动画

          // 动画结束后，要移除上一个列表的属性z-index:0,同时目标z-index恢复1，清楚上个列表的执行过的样式
          console.log((tar-1)<=0?listNum:tar-1);
          $("[data-tar='"+((tar-1)<=0?listNum:tar-1)+"']").removeClass("active");
          $("[data-tar='"+tar+"']").removeClass("current");
          // 底部的进度条，翻页
          $(".page").html(tar+"/"+listNum);
          $(".go").width((tar/listNum)*100+"%");
          // 动画结束后，可以给列表内的元素添加移动的样式了
          $("[data-tar='"+tar+"']>p").addClass("active");
          clearTimeout(timer);
          timer=null;
          // 留给列表内同一元素执行二次动画的
          // timer=setTimeout(function(){
          //   $("[data-tar='"+tar+"']>p").addClass("actives");
          //   clearTimeout(timer);
          //   timer=null;
          // },400);
        },400);
      },100);
    }else if(canMove&&arr[1]-arr[0]>=30){
      tar=parseInt($(".divList.active").attr("data-tar"))-1;
      if(tar<=0){tar=listNum;}
      console.log("上移的目标位:"+tar);
      $("[data-tar='"+tar+"']").css("transform","translateY(-100%)");
      $("[data-tar='"+tar+"']").addClass("active current");
      timer=setTimeout(function(){
        $("[data-tar='"+tar+"']").css("transform","translateY(0)");
        clearTimeout(timer);
        timer=null;
        timer=setTimeout(function(){
          $(".divList>p").removeClass("active actives");//在执行元素的动画之前，先清除上次执行过的动画
          $("[data-tar='"+((tar+1)>listNum?1:tar+1)+"']").removeClass("active");
          $("[data-tar='"+tar+"']").removeClass("current");
          // 底部的进度条，翻页
          $(".page").html(tar+"/"+listNum);
          $(".go").width((tar/listNum)*100+"%");
          clearTimeout(timer);
          timer=null;
          $("[data-tar='"+tar+"']>p").addClass("active");
          // timer=setTimeout(function(){
          //   $("[data-tar='"+tar+"']>p").addClass("actives");
          //   clearTimeout(timer);
          //   timer=null;
          // },400);
        },400);
      },100);
    }
    canMove=false;
  });
});
