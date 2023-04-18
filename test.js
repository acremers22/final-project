document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

window.onload = function() {
    var name = prompt("What's your name?");
    document.getElementById("bucketList").innerHTML = name + "'s Travel Bucket List!";
  }

const input = document.querySelector('#newtask input');
const maxLength = 50; // Change this value to set a different maximum length

input.addEventListener('input', () => {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
});