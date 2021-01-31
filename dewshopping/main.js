const firstcontainer = document.querySelector('#firstcontainer');
const secondcontainer = document.querySelector('#secondcontainer');
var inputValue = document.querySelector('#input');
const add = document.querySelector('#add');
var todos = [];



class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
        input.disabled = true;
        input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
        edit.classList.add('edit');
    	edit.innerHTML = "Ändra";
        edit.addEventListener('click', () => this.edit(input, name));

        var done = document.createElement('button');
    	done.classList.add('done');
    	done.innerHTML = "Färdig";
        done.addEventListener('click', () => this.done(itemBox, input));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "Radera";
        remove.addEventListener('click', () => this.remove(itemBox, name));
       

    	firstcontainer.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(done);
        itemBox.appendChild(remove);

    }

    edit(input){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
         
        }
    
        let editError=""  
        
        if (input.value == null || input.value == "") {
            editError = "I'm gonna stay here until u write something..";
            document.getElementById("edit_Error").style.display="block"; 
            document.getElementById("edit_Error").innerHTML = editError;
            return false;
        } 

        else (input.value != null || input.value != ""); {
            editError = "";
            document.getElementById("edit_Error").style.display="none"; 
            document.getElementById("edit_Error").innerHTML = editError;
            return true;
       }  
      
} 
    

//Done button function have to have input aswell in the bracket otherwhise error didn't work

    done (itemBox, input){
 
        let editError=""
        
        if (input.value == null || input.value == "") {
            editError = "I'm gonna stay here until u write something..";
            document.getElementById("edit_Error").style.display="block"; 
            document.getElementById("edit_Error").innerHTML = editError;
            return false;
        } 

        else (input.value != null || input.value != ""); {
            editError = "";
            document.getElementById("edit_Error").style.display="none"; 
            document.getElementById("edit_Error").innerHTML = editError;
            
            secondcontainer.appendChild(itemBox);
            for (let element of secondcontainer.getElementsByClassName('done')){
                element.parentNode.removeChild(element);
                //or ( but will remain ) element.style.display="none";
    
            }
            return true;
        } 

        }
    

//Remove button function

    remove(itemBox){
        itemBox.parentNode.removeChild(itemBox);
    }
}


// Get the input element and adding keyboard enter as well as click.


var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 ) {
   event.preventDefault();
   document.getElementById("add").click();
  }
  add.addEventListener('click', check);



  // Check if input value in the first box is empty and if not add a new item.

function check(){


	 if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        inputValue.value = "";
       
    }


    }
 
});

for (var i = 0 ; i < todos.length ; i++){
    new item(todos[i]);
}













