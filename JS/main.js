(function(){
  'use strict';

let price = document.getElementById('price');
let num = document.getElementById('num');
let btn = document.getElementById('btn');

let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let reset = document.getElementById('reset');
const kits = document.querySelectorAll("div.radio input[name='kit']");
const kitsArr =Array.prototype.slice.call(kits); //キットを配列に変換
const op_few=500




// ただのチェック機能
  function checkInput() {
  // /^[1-9][0-9]*$/
  if ( price.value.match(/^[1-9][0-9]*$/) !== null &&
    num.value.match(/^[1-9][0-9]*$/) !== null
  ) {
    btn.classList.remove('disabled');
  } else {
    btn.classList.add('disabled');
  }
 };

  btn.addEventListener('click', function click()  {
   
    let selectedKit;
    let str;
    let str2;
    
    // ラジオボタンの値を取得
    kitsArr.forEach(function (kit){
      if (kit.checked === true) {
      
        selectedKit = kit.value;
        if(num.value<op_few && selectedKit==3000){
          str=(price.value-selectedKit*1.2)*num.value;//OP500未満かつ、キットAの場合は1.2倍してコスト削減額を表示する
        }
        else{
          str=(price.value-selectedKit)*num.value; //そうでなければコスト削減額を表示する
        }

        if(str<1){
          result.textContent="申し訳ございません";
          result2.textContent ="下記フォームよりお問合せ下さい";
          result3.textContent="";
        }else{
          result.textContent='コスト削減額は' ;
          setTimeout(function(){
            result2.textContent=str.toLocaleString() +' 円です ';
            result3.textContent="詳しいお見積りは下記フォームよりお問合せ下さい";
          },500);
        }
        reset.classList.remove('hidden');
        document.getElementById("textfield5").value=price.value //フォームに納入金額を代入
        document.getElementById("textfield6").value=num.value //フォームに使用数量を代入

        
        // 1秒後にメッセージを表示
        setTimeout(function(){
          alert('コスト試算頂きありがとうございます!下記のフォームからお問合せ頂けます。');
        },1000);
        // setTimeout(() => {
        //   scrollTo({
        //     top:100,
        //     left:0,
        //     behavior:'smooth'});
        //   document.getElementById("textfield").focus();
        // }, 3000);

    }
    });    
  });
    
  // リセットボタン （機能させてない）
    reset.addEventListener('click', function() {
      result.textContent = 'ここに結果を表示します';
      price.value = '';
      num.value = '';
      result3.value='';

      // for(i=0;i<3;i++){
        // document.getElementsByName('kit') .checked= false;
      // };
      btn.classList.add('disabled');
      this.classList.add('hidden');
    });
    
    price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);
  // kits[0].focus();
  })();