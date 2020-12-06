class Form{
    constructor(){
        this.input = createInput("Name ")
        this.button = createButton("Play")
        this.greeting = createElement("H3")

    }
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}

display(){
    var title = createElement("H2")
    title.html("Car Racing Game")
    title.position(500,0)
    
    this.input.position(500,160)
    
   
    this.button.position(500,200)
    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount ++
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("Hello "+player.name)
        this.greeting.position(500,160)

    })
    
}
}