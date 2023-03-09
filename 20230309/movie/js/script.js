/*메인 네비게이션에 있는 아이디 선택자 중에서 클릭이벤트를 발생한다면 다음과 같이 실행되어라.
let 은 변수(인포메이션,캐릭터,멀티미디어,다운로드) 담을 그릇 
메인 네비게이션에서 클릭이 된 값의 속성을 attr로 표현
속성이 li에 있지 않은 애(download)를 클릭한다면 remove
속성이 li에 존재해 active */ 
$(document).ready(function() {
  $('#main_navigation a').click(function(){
    let target = $(this).attr('data-target')
    $(':not([data-name='+ target +'])').removeClass('active')
    $('[data-name='+ target + ']').addClass('active');
  });
  
  // === 화면의 왼쪽 버튼 === // 
  let currentPosition = 1; 
  $('#character > a:nth-child(1)').click(function() {
    currentPosition -= 1; /*1에서 숫자하나 빼고 줘라 = 0*/
    if ( currentPosition < 1); {
      currentPosition = 3;
    } /*1보다 작다면 3으로 인식한다 = 1~3 무한 반복  */


    $('article').removeClass('show');
    $('article:nth-of-type(' + currentPosition + ')').addClass('show');
  }); // 각각의 값(커런트 포지션)이 선택 되었을 때 ex.아티클의 두번째한테 할당이 된다면 class 값으로 show를 줘라 .. / 선택되지 않은건 show remove로 안보이게. 

  // === 화면의 오른쪽 버튼 === //
  $('#character > a:nth-child(2)').click(function() {
    currentPosition += 1;
    if (currentPosition > 3) {
      currentPosition =1;
    }
    $('article').removeClass('show');
    $('article:nth-of-type(' + currentPosition + ')').addClass('show');
  });   // 아이ㅣ 선택자에 나오는 두번째 앵커테그를 클릭하면 자기가 갖고 있느 숫자에 1씩 더해. 4가 된다면 1로 돌아가라 (3>2>1 순으로 무한반복)
});   

// 