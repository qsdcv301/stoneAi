$(document).ready(function () {
    /*********************************************************************************/
    /**********************        헤더 페이지 스크립트         ************************/
    /*********************************************************************************/
// 각 메인 메뉴에 대응하는 소메뉴 내용
    const submenuContents = {
        brand: `<div class="row justify-content-center">
                <div class="hd-navmenu col-4 d-flex mx-4 px-4 justify-content-center bg-white pt-4">
                    <div class="col-3">
                        <h5>
                            <a href="#" class="text-decoration-none pl-5" data-category="nike">NIKE</a>
                        </h5>
                        <ul class="list-unstyled pl-5">
                            <li><a href="#" data-category="nike" data-subcategory="lifestyle">LifeStyle</a></li>
                            <li><a href="#" data-category="nike" data-subcategory="running">Running</a></li>
                            <li><a href="#" data-category="nike" data-subcategory="activity">Activity</a></li>
                            <li><a href="#" data-category="nike" data-subcategory="etc">ETC</a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h5>
                            <a href="#" class="text-decoration-none  pl-5" data-category="adidas">ADIDAS</a>
                        </h5>
                        <ul class="list-unstyled pl-5">
                            <li><a href="#" data-category="adidas" data-subcategory="lifestyle">LifeStyle</a></li>
                            <li><a href="#" data-category="adidas" data-subcategory="running">Running</a></li>
                            <li><a href="#" data-category="adidas" data-subcategory="activity">Activity</a></li>
                            <li><a href="#" data-category="adidas" data-subcategory="etc">ETC</a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h5>
                            <a href="#" class="text-decoration-none pl-5" data-category="vans">VANS</a>
                        </h5>
                        <ul class="list-unstyled pl-5">
                            <li><a href="#" data-category="vans" data-subcategory="lifestyle">LifeStyle</a></li>
                            <li><a href="#" data-category="vans" data-subcategory="running">Running</a></li>
                            <li><a href="#" data-category="vans" data-subcategory="activity">Activity</a></li>
                            <li><a href="#" data-category="vans" data-subcategory="etc">ETC</a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h5>
                            <a href="#" class="text-decoration-none pl-5" data-category="etc">ETC</a>
                        </h5>
                        <ul class="list-unstyled pl-5">
                            <li><a href="#" data-category="etc" data-subcategory="lifestyle">LifeStyle</a></li>
                            <li><a href="#" data-category="etc" data-subcategory="running">Running</a></li>
                            <li><a href="#" data-category="etc" data-subcategory="activity">Activity</a></li>
                            <li><a href="#" data-category="etc" data-subcategory="etc">ETC</a></li>
                        </ul>
                    </div>
                </div>
            </div>`
    };


// 메인 메뉴 항목에 마우스를 올렸을 때 소메뉴 내용을 표시
    $('.nav-item').hover(
        function () {
            const submenuType = $(this).data('submenu');
            $('.header-menu')
                .html(submenuContents[submenuType])  // 해당 메뉴에 맞는 내용으로 변경
                .stop()
                .show();  // 소메뉴를 바로 표시
        },
        function () {
            // 마우스를 메뉴 항목에서 벗어날 때는 소메뉴가 바로 사라지지 않도록
            // .header-menu로 마우스가 이동했는지를 확인
        }
    );

// .header-menu에도 마우스 이벤트를 추가하여 유지되도록 설정
    $('.header-menu').hover(
        function () {
            $(this).stop().show();
        },
        function () {
            $(this).stop().hide();  // 마우스를 벗어나면 바로 숨김
        }
    );

// 전체 헤더 영역에서 마우스를 벗어나면 소메뉴를 숨김
    $('header').mouseleave(function () {
        $('.header-menu').stop().hide();  // 슬라이드 없이 바로 숨김
    });

// 동적 링크 설정: 메뉴 항목 클릭 시 URL에 데이터를 추가
    $('header').on('click', '[data-category]', function (event) {
        event.preventDefault(); // 기본 링크 동작 방지

        const category = $(this).data('category');
        const subcategory = $(this).data('subcategory');
        const item = $(this).data('item');

        // 카테고리 데이터가 존재하는지 확인
        if (!category) {
            console.warn('카테고리가 정의되지 않았습니다.');
            return;
        }

        // 동적 URL 생성
        let newUrl = `/products?category=${category}`;
        if (subcategory) {
            newUrl += `&subcategory=${encodeURIComponent(subcategory)}`;
        }
        if (item) {
            newUrl += `&item=${encodeURIComponent(item)}`;
        }

        // URL 리디렉션
        window.location.href = newUrl;
    });
    /*********************************************************************************/
    /**********************       헤더 페이지 스크립트 끝       ************************/
    /*********************************************************************************/


    /*********************************************************************************/
    /**********************       메인 페이지 스크립트 시작       ************************/
    /*********************************************************************************/

    //메인페이지 상품 데크(5개 가로배열 돼 있는 곳) 버튼 누르면 이동
    const visibleCount = 5; // 화면에 보일 이미지 개수
    const sliderItems = $('.slider-items');
    const cards = $('.slider-items .card');
    const totalItems = cards.length;

    // 초기 설정: 슬라이더 폭을 이미지 개수에 맞게 설정
    sliderItems.css('width', `${totalItems * 100 / visibleCount}%`);
    cards.css('width', `${100 / totalItems}%`);

    // 왼쪽 버튼 클릭 이벤트
    $('.left-btn').click(function () {
        sliderItems.prepend(sliderItems.children().last());
    });

    // 오른쪽 버튼 클릭 이벤트
    $('.right-btn').click(function () {
        sliderItems.append(sliderItems.children().first());
    });


    /*********************************************************************************/
    /**********************       메인 페이지 스크립트 끝       ************************/
    /*********************************************************************************/


    /*********************************************************************************/
    /**********************      상품 메인 페이지 스크립트 시작      ************************/
    /*********************************************************************************/

    // 현재 페이지의 URL에서 쿼리 파라미터를 가져옴
    const params = new URLSearchParams(window.location.search);

    // 'category'와 'subcategory' 파라미터 값 가져오기
    const category = params.get('category');
    const subcategory = params.get('subcategory');

    // 가져온 파라미터 값으로 페이지의 특정 요소를 업데이트하거나 버튼에 설정
    if (category) {
        console.log(`Category: ${category}`);
        $('#category-button').text(category);
    }

    if (subcategory) {
        console.log(`Subcategory: ${subcategory}`);
        $('#subcategory-button').text(subcategory);
    }

    // 동적 링크 설정: 카테고리 및 서브카테고리 버튼 클릭 시 URL에 데이터를 추가하고 리디렉트
    $(document).on('click', '#category-button, #subcategory-button', function (event) {
        event.preventDefault(); // 기본 링크 동작 방지

        const category = $(this).data('category');
        const subcategory = $(this).data('subcategory');

        // URL 생성 시 undefined 또는 렌더링되지 않은 변수가 있으면 제외
        let newUrl = `/products?category=${category}`;

        if (subcategory && subcategory !== "${subcategory}") {
            newUrl += `&subcategory=${encodeURIComponent(subcategory)}`;
        }

        // URL 리디렉션
        window.location.href = newUrl;
    });

    /*********************************************************************************/
    /**********************      상품 메인 페이지 스크립트 끝     ************************/
    /*********************************************************************************/

    /*********************************************************************************/
    /**********************      상품 디테일 페이지 스크립트 시작      ************************/
    /*********************************************************************************/

//클릭한 이미지로 이미지 변경
    $(".simg").on('click', function () {
        //클릭한 두 이미지의 src를 가져옴
        var mainImgSrc = $(".b-img img").attr('src');
        var subImgSrc = $(this).attr('src');

        //가져온 두 src값을 바꿈(이미지 이동)
        $('.b-img img').attr('src', subImgSrc);
        $(this).attr('src', mainImgSrc);
    });

    // 버튼 클릭 이벤트 처리
    $('#size-buttons .size-btn').on('click', function () {
        // 모든 버튼의 active와 faded 클래스를 초기화
        $('#size-buttons .size-btn').removeClass('active faded');

        // 클릭한 버튼에 active 클래스 추가
        $(this).addClass('active');

        // 클릭되지 않은 버튼들에 faded 클래스 추가
        $('#size-buttons .size-btn').not(this).addClass('faded');

        // 선택한 사이즈 값 가져오기
        const selectedSize = $(this).text();
        console.log('선택된 사이즈:', selectedSize);

        // 사이즈 가이드 링크에 선택한 사이즈 추가
        $('#size-guide-link').attr('href', '/size-guide?size=' + selectedSize);

        // 선택한 사이즈를 폼의 hidden input에 설정
        $('input[name="size"]').val(selectedSize);
    });

    $('form[name="addCart"]').on('submit', function (event) {
        event.preventDefault(); // 폼 제출을 막음

        // 폼 데이터를 객체로 변환
        var formData = {
            product_id: $(this).find('input[name="product_id"]').val(),
            size: $(this).find('input[name="size"]').val(),
            quantity: $(this).find('input[name="quantity"]').val()
        };

        if (!formData.size) {
            alert('사이즈를 선택 해야합니다.');
            return;
        }

        $.ajax({
            url: '/addCart', // 요청을 보낼 URL
            type: 'POST', // 요청 방식
            contentType: 'application/json', // 요청 본문 형식
            data: JSON.stringify(formData), // 폼 데이터 JSON 형식으로 변환
            success: function (response, status, xhr) {
                if (xhr.status === 200) { // HTTP 응답 코드가 200일 때만
                    if (response.redirect) {
                        // 로그인 페이지로 리디렉션
                        window.location.href = response.redirect;
                    } else {
                        alert('장바구니에 상품이 추가되었습니다!');
                        // 성공 시 추가적인 동작을 여기에 추가할 수 있음
                    }
                }
            },
            error: function (xhr, status, error) {
                let errorMessage = '상품 추가에 실패했습니다.';
                if (xhr.status === 401) {
                    // 로그인 필요
                    errorMessage = '로그인이 필요합니다. 로그인 페이지로 이동합니다.';
                    window.location.href = xhr.responseJSON.redirect; // 로그인 페이지로 리디렉션
                }
                alert(errorMessage);
                // 실패 시 추가적인 동작을 여기에 추가할 수 있음
            }
        });
    });
    /*********************************************************************************/
    /**********************       상품 디테일 페이지 스크립트 끝       ************************/
    /*********************************************************************************/


    /*********************************************************************************/
    /**********************    회원가입 페이지 스크립트    ************************/
    /*********************************************************************************/

    $("#checkUsername").click(function() {
        var uid = $("#uid").val(); // 입력된 아이디 가져오기

        $.ajax({
            type: "POST",
            url: "/duplicateId", // 중복 검사 요청을 받을 URL
            data: { uid: uid }, // uid 값을 서버에 보냄
            success: function(data) {
                if (data.isDuplicate) {
                    $("#usernameFeedback").text("이미 사용 중인 아이디입니다.").css("color", "red");
                } else {
                    $("#usernameFeedback").text("사용 가능한 아이디입니다.").css("color", "green");
                }
            },
            error: function() {
                $("#usernameFeedback").text("서버 오류가 발생했습니다.").css("color", "red");
            }
        });
    });

    // 주소 검색
    $('#searchAddress').click(function () {
        new daum.Postcode({
            oncomplete: function (data) {
                var addr = '';
                var extraAddr = '';

                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                if (data.userSelectedType === 'R') {
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    $('#addrl').val(extraAddr);
                } else {
                    $('#addrl').val('');
                }

                $('#addrf').val(data.zonecode);
                $('#addrs').val(addr);
                $('#addrt').focus();
            }
        }).open();
    });

    // 이메일 도메인 선택 또는 직접 입력
    $('#emailDomainSelect').change(function () {
        var domain = $(this).val();
        if (this.value === 'direct') {
            emailDomainDirect.style.display = 'block';
            emailDomainDirect.value = '';
            emailDomainDirect.focus();
            this.style.display = 'none';
        } else {
            emailDomainDirect.style.display = 'none';
            emailDomainDirect.value = this.value;
            this.style.display = 'block';
        }
        combineEmail();
    });

    $('#emailDomainDirect').on('blur', function () {
        if ($(this).val() === '') {
            $(this).hide();
            $('#emailDomainSelect').show().val('');
        }
    });

    // 이메일 조합
    function combineEmail() {
        var emailId = $('#emailId').val();
        var emailDomain = $('#emailDomainDirect').val() || $('#emailDomainSelect').val();
        if (emailId && emailDomain) {
            $('#fullEmail').val(emailId + '@' + emailDomain);
        }
    }

    $('#emailId, #emailDomainDirect').on('input', combineEmail);

    // 생년월일 유효성 검사
    function validateBirthdate() {
        const birthdate = $('#birthdate').val();
        const regex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

        if (!regex.test(birthdate)) {
            alert("생년월일을 올바른 형식(YYYYMMDD)으로 입력해주세요.");
            $('#birthdate').val('');
            return false;
        }

        const year = parseInt(birthdate.substring(0, 4));
        const month = parseInt(birthdate.substring(4, 6));
        const day = parseInt(birthdate.substring(6, 8));
        const date = new Date(year, month - 1, day);

        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            alert("유효하지 않은 날짜입니다. 다시 확인해주세요.");
            $('#birthdate').val('');
            return false;
        }

        return true;
    }

    $('#signupForm').submit(function (e) {
        e.preventDefault(); // 기본 폼 제출 방지
        combineEmail(); // 이메일 조합 함수 호출

        var formData = {
            name: $('#name').val(),
            uid: $('#uid').val(),
            pw: $('#pw').val(),
            tel: $('#phone').val(),
            addrf: $('#addrf').val(),
            addrs: $('#addrs').val(),
            addrt: $('#addrt').val(),
            addrl: $('#addrl').val(),
            email: $('#fullEmail').val(),
            gender: $('input[name="gender"]:checked').val(),
            birthday: $('#birthdate').val()
        };

        // 생년월일 유효성 검사 후 AJAX 요청
        if (validateBirthdate()) {
            $.ajax({
                url: '/register',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function (response) {
                    window.location.href = '/'; // 성공적으로 가입한 경우 리다이렉트
                },
                error: function (error) {
                    console.error("Error:", error);
                    alert("가입 중 오류가 발생했습니다. 다시 시도해주세요."); // 오류 메시지
                }
            });
        } else {
            alert("유효하지 않은 생년월일입니다."); // 유효성 검사 실패 메시지
        }
    });
    /*********************************************************************************/
    /**********************    회원가입  페이지 스크립트    ************************/
    /*********************************************************************************/

    /*********************************************************************************/
    /**********************    상품 장바구니 페이지 스크립트    ************************/
    /*********************************************************************************/


    /*********************************************************************************/
    /**********************  상품 장바구니 페이지 스크립트 끝   ************************/
    /*********************************************************************************/

//     tou
    $('#allCheck').on('change', function () {
        $('#termsCheck').prop('checked', this.checked);
        $('#privacyCheck').prop('checked', this.checked);
    });

    $('#termsCheck, #privacyCheck').on('change', function () {
        const allChecked = $('#termsCheck').is(':checked') && $('#privacyCheck').is(':checked');
        $('#allCheck').prop('checked', allChecked);
    });

    $('#termsForm').on('submit', function (e) {
        e.preventDefault();
        if ($('#termsCheck').is(':checked') && $('#privacyCheck').is(':checked')) {
            alert('약관에 동의하셨습니다. 회원가입 페이지로 이동합니다.');
            window.location.href = '/registerOk';
        } else {
            alert('모든 약관에 동의해주세요.');
        }
    });


    /*********************************************************************************/
    /**********************  마이 페이지 스크립트   ************************/
    /*********************************************************************************/

    /********************************************************************************/
    /**********************  마이 페이지 스크립트 끝   ************************/
    /*********************************************************************************/

});
