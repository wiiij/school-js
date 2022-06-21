# school-js
자바스크립트는 웹의 동작을 구현할때 사용되며 웹페이지 뿐만 아닌 여러 방면에 사용되는 언어입니다.<br>
문법으로는 세미콜론(;)으로 구분이 됩니다.<br>
먼저 처음으로 작성된 코드로 넘어가자면<br>
![image](https://user-images.githubusercontent.com/102115231/173488482-93b9c847-8886-4e10-999a-e1fb9e859a41.png)<br>
자바스크립트는 특이하게 <head> 안에 <script> 태그를 사용하여 작성을 합니다.<br>
  일단 먼저 var 변수를 설정을 해주고,<br>
  ![image](https://user-images.githubusercontent.com/102115231/173488685-fdf16417-935d-4f48-af97-183534c7ec55.png)<br>
  다음은 이중 for문을 사용해 for문 내에 <tr>, <td>를 만들어서 표를 만듭니다.<br>
이후 실행을 하면 이렇게 나옵니다.  <br>
  ![image](https://user-images.githubusercontent.com/102115231/173491836-2fac7116-3066-4ee1-9f01-0baec62ea59b.png)<br>
──────────────────────────────────────────────────────────── <br>
이번에는 가위바위보 게임을 한번 만들어봤습니다. <br>
  ![image](https://user-images.githubusercontent.com/102115231/173522517-515eee23-99c7-4596-92c8-8052bebf4946.png)<br>
먼저 여기서 가위, 바위, 보 중 사용자가 입력을 한 것에 대한 switch값을 GameNum에 값으로 바뀐다.<br>
  ![image](https://user-images.githubusercontent.com/102115231/173522883-191b9f28-4240-4359-8b82-9eb6039d9930.png)<br>
여기서 랜덤 함수를 지정을 해주고 난 뒤,<br>
  ![image](https://user-images.githubusercontent.com/102115231/173522975-ab16ae93-21f1-4995-b17a-1970a464ffce.png)<br>
그리고 사용자가 입력한 값에 맞는 이미지를 출력하게 되도록 하여 이렇게 나왔습니다.<br>
 이겼을 때,<br>
  ![image](https://user-images.githubusercontent.com/102115231/173523368-b7049d24-e008-4c5d-8b75-4254bd47c80f.png)<br>
  졌을 때,<br>
  ![image](https://user-images.githubusercontent.com/102115231/173523236-441060f1-dc6e-4b15-9b8f-9e9c506fd558.png)<br>
──────────────────────────────────────────────────────────── <br>
  이번에는 자바 스크립트로 시계를 만들어봤습니다.<br>
  ![image](https://user-images.githubusercontent.com/102115231/174732103-0e7b908d-e2c0-4305-8a22-89563119ea37.png)<br>
  기본 실행 화면 입니다.<br>
  ![image](https://user-images.githubusercontent.com/102115231/174730967-208f0167-9ea1-4e69-8c8c-fa8439553640.png)<br>
  디자인 코드로는 먼저 시계의 위치 자체를 가운데로 옮기고 난 뒤, 테두리와 배경을 넣어 꾸며주었습니다.<br>
  ![image](https://user-images.githubusercontent.com/102115231/174732494-58d00a50-ffae-40cd-89c6-d7b4bd4264b8.png)<br>
  스크립트 코드 입니다.<br>
  hand에 초기 값은 0이기에 go 버튼을 누르지 않는한 바뀌지 않습니다.<br>
  ![image](https://user-images.githubusercontent.com/102115231/174733323-c89cedeb-e481-42de-b88a-be6406c92046.png)<br>
  ![image](https://user-images.githubusercontent.com/102115231/174733643-ec170a15-90ec-4dbe-b9fc-00a36e021f7c.png)<br>
  버튼을 만들어줄 코드입니다.<br>
  go버튼을 눌렀을때 hand에 값이 0이면 setInterval에 값을 넣어 시계가 돌아가도록 하는 것입니다.<br>
  반대로 stop을 누르면 0이 되어 다시 돌아가지 않도록 하는 것입니다.<br>
  
  
  
  
  
