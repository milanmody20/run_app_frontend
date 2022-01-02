class Run {
    static all = [];           //static works like a class method (eg. @@all), keeps track of all onjects
    static container = document.getElementById("runs-container")
    
    constructor({id, time, distance, run_type, comments, runner_id, runner})
    {
        this.id = id
        this.time = time
        this.distance = distance
        this.run_type = run_type
        this.comments = comments
        this.runner_id = runner_id
        this.runner = runner

        this.element = document.createElement('ul');
        this.element.dataset['id'] = id;
        this.element.id = `run-${id}`;
        this.element.addEventListener('click', this.handleClick)
        Run.all.push(this)         //pushes all the created objects into the "all" Array defined on line 2
    }
        

    render(){
        this.element.innerHTML = `
        <div id="runs-card">
            <div data-id="${this.id}">
                <h2 class= "runner_id">-${this.runner.name}-</h3>
                <h3 class= "run type">${this.run_type}</h3>
                <h2 class= "distance">${this.distance}</h2> Miles<br>
                <h2 class= "time">${this.time}</h2> Minutes
                <p class= "comments">Notes:<br> ${this.comments}</p>
</div>
            
                <button class="delete" data-id=${this.id} id="DeleteRunButton">Delete Run</button>   
        </div>
        `
        return this.element
    }

    handleClick = (e) => {
        e.target.innerText === "Delete Run"
            runCall.deleteRun(e)
    }

    attachToDom(){
        Run.container.appendChild(this.render())
    }

}