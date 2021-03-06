class Run {
    static all = [];           //static works like a class method (eg. @@all), keeps track of all onjects
    static container = document.getElementById("runs-container")        //grabbing an element by its ID in the "runs-container" in index.html and setting it equal to "container"

    constructor({id, time, distance, run_date, run_type, comments, runner_id, runner})       //using the "descructure" method here
    {
        this.id = id
        this.time = time
        this.distance = distance
        this.run_type = run_type            //"this" represents the class Object, like "self" in Ruby, in this example this = Run
        this.run_date = run_date
        this.comments = comments
        this.runner_id = runner_id
        this.runner = runner

        this.element = document.createElement('ul');   //creates an 'ul' item each time a new object is created
        this.element.dataset['id'] = id;                //creating 'id' variable inside 'ul'
        this.element.id = `run-${id}`;                  //setting the 'id' equal to 'run-{dataset_id}'
        this.element.addEventListener('click', this.handleClick)
        Run.all.push(this)         //pushes each object("this") that is created into the "all" Array defined on line 2
    }
        

    render(){                               //this.element represents 'ul' as defined in line 15 above
        this.element.innerHTML = `                      
        <div id="runs-card">
            <div data-id="${this.id}">             
                <h2 class= "runner_id">-${this.runner.name}-</h3>
                <h3 class= "run_type">${this.run_type}</h3>
                <h3 class= "run_date">${this.run_date}</h3>
                <h2 class= "distance">${this.distance}</h2> Miles<br>
                <h2 class= "time">${this.time}</h2> Minutes
                <p class= "comments">Notes:<br> ${this.comments}</p>
</div>
            
                <!-- <button class="edit" data-id=${this.id} id="EditRunButton">Edit Run</button> -->
                <button class="delete" data-id=${this.id} id="DeleteRunButton">Delete Run</button>   
        </div>
        `
        return this.element         //explicitly calling a return 
    }

    

    handleClick = (e) => {              //important for handleClick to be an arrow function becuase of .this
        if(e.target.innerText === "Submit"){
            console.log(e.target)
            e.target.innerText = "Update Run"
            this.createEditForm()
        }
        else if
        (e.target.innerText === "Delete Run"){
            console.log(e.target)
            runCall.deleteRun(e)
        }
    
        // else if(e.target.innerText === "Save Run"){
        //     console.log('Saved')
        // }   
    }

    // createEditForm(){
    //     const div = this.element.querySelector('div');
    //     for(const element of div.children){
    //         let inputValue = element.innerText;
    //         let name = element.classList[0];
    //         element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
    //     }
    //     // debugger
    // }

    // updateItemInfo(){
    //     this.distance = this.element.querySelector(".edit-distance").value;
    //     this.time = this.element.querySelector(".edit-time").value;
    //     this.comment = this.element.querySelector(".edit-comment").value;
    //     runCall.updateRun()
    // }

    attachToDom(){
        Run.container.appendChild(this.render())
    }

}