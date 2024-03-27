
const $question = document.querySelector('.question');
const $result = document.querySelector('.result');
const $questionbtn = document.querySelector('.questionbtn');
const $submitbtn = document.querySelector('.submitbtn');
const $answersForm = document.getElementById('answersForm');

// let random;
let currentAnswer = '';
// let answers=[];

const data =[
  { name: 'concat()', result: '두 개 이상의 배열을 합쳐 새 배열을 만듭니다.' },
  { name: 'includes()', result: '배열이 특정 요소를 포함하고 있는지 여부를 판단합니다.' },
  { name: 'sort()', result: '배열의 요소를 적절한 위치에 정렬합니다. 기본적으로 문자열로 취급하여 정렬합니다.' },
  { name: 'push()', result: '배열의 끝에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다.' },
  { name: 'pop()', result: '배열의 마지막 요소를 제거하고, 그 요소를 반환합니다.' },
  { name: 'shift()', result: '배열의 첫 번째 요소를 제거하고, 그 요소를 반환합니다.' },
  { name: 'unshift()', result: '배열의 앞에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다.' },
  { name: 'slice()', result: '배열의 일부를 얕게 복사하여 새 배열 객체로 반환합니다.' },
  { name: 'splice()', result: '배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.' },
  { name: 'map()', result: '배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새 배열을 반환합니다.' },
  { name: 'filter()', result: '주어진 함수의 테스트를 통과하는 모든 요소를 모아 새 배열로 반환합니다.' },
  { name: 'reduce()', result: '배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환합니다.' },
]


$questionbtn.addEventListener('click',e=>{
   const randomidx = Math.floor(Math.random() * data.length);
   currentAnswer = data[randomidx].result;
   $question.textContent= `문제 : ${data[randomidx].name} 에 대해 알맞은것은??`;
   
    $answersForm.innerHTML = '';
    $result.textContent = '';

    
    let answers = data.map(a => a.result); // 될수있는 모든 답변
    answers.sort(()=> Math.random() - 0.5); // 답변섞기
    answers = answers.slice(0,5) // 임의로 3개 선택
    if(!answers.includes(currentAnswer)){
        answers.pop(); // 마지막 항목을 제거하고 정답을 추가한다
        answers.push(currentAnswer);
    }
    answers.sort(()=>Math.random() - 0.5);

    for(let i=0 ; i < answers.length ; i++){
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'radio';
        checkbox.name ='answer';
        checkbox.value=answers[i];

        label.classList.add('answerlabel')

        label.append(checkbox);
        label.append(document.createTextNode(` ${i + 1} : ${answers[i]}`));
        $answersForm.append(label);
        $answersForm.append(document.createElement('br'));
    }

    // $submitbtn.classList.remove();
    $submitbtn.classList.add('on');

})
$submitbtn.addEventListener('click',e=>{
    // 선택한 라디오 찾기
    const selected = document.querySelector('input[name="answer"]:checked');
    //셀렉티드가 nul이 아니라면 값을 읽고 못읽으면 작동x
    if(!selected) {
        $result.textContent='답변을 선택해주세요!';
        return;
    }
    const select = selected.value;



    if(select === currentAnswer){
        $result.textContent='정답입니다 ! 다른문제도 풀어보세요!!';
    }else{
        $result.innerHTML = `오답입니다 ! <br>  정답 : ${currentAnswer} .`
       
    }

})

function Clock() {
    let date = new Date();
    let hours = Time(date.getHours());
    let minutes = Time(date.getMinutes());

    Write( hours , minutes)

    function Time(num){
        return(num < 10 ? 'O'+num: ''+ num);
    }
    function Write(hours , minutes , seconds){
        let Clock = document.getElementById("Clock");
        Clock.innerText = hours + ':' + minutes;
    }
}
setInterval(Clock,1000); // 1초마다 클락함수
