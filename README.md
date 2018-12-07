create 페이지
  1.submit을 하고 파일 생성이 느린건지는 모르겠지만 제대로 redirection 이 되질 않음.
    새로고침을 해야 함.
  2.한글 입력 시 undefined 파일이 생성되고, 새로고침해도 redirection 안됨.
    => response.writeHead에 'utf8'이 제대로 삽입 되지를 않고 object 로 해야함.
       번거롭더라도 기능만 제대로 되면 상관이 없으나 제대로 안되는 느낌.
       이고잉 센세도 'utf'로 넣었다.
  3.goorm에 올려서 사용해 보니 length에서 또 걸린다. undefined로 인식됨. 
