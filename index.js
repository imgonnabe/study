
// scope 를 보장받기위해 즉시실행함수를 사용한다.

(function ($) {

    $(function () {
        // onload event

        // $.alert('hello world')
        // .then(() => {
        //     alert('close or ok')
        // })

        $.confirm('확인 또는 취소')
        .then((result) => {
            if(result) alert('확인')
            else alert('취소')
        })        
        // 사용자가 확인, 닫는경우 콜백을 받고싶다.
        // (1) Promise (2) function 파라미터
        
        // $.static();
        // $('h1').instance();
        $('#only-number').onInputOnlyNumber()
    })  




})(jQuery);