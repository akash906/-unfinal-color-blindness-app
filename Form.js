class Form{
    constructor(){
        this.start=createButton("Lets Get Started!");
       this.title=createElement('h1',"Colour Blindness App");
        this.orange=createImg("orange.jpg");
        this.orange.hide();
        this.intro=createElement('h2',"Welcome to the app.Color blindness test at your finger tips.")
        this.start1=createButton("Start")
        this.start1.hide();
        this.intro.hide();
        this.input1=createInput("Type The Color");
        this.input1.hide();
        this.go1=createButton("submit");
        this.go1.hide();
        this.ry=createImg("ry.png");
        this.ry.hide();
        this.input2=createInput("Type The First Color");
        this.input3=createInput("Type The Second Color");
        this.input2.hide();
        this.input3.hide();
        

      
    }
    display(){
        this.title.position(displayWidth/2-200,150)
        this.start.position(displayWidth/2-100,300);
        this.start.mousePressed(()=>{
            this.title.hide();
            this.start.hide();
            this.intro.show()
            this.intro.position(displayWidth/2-200,displayHeight/2-200);
            this.start1.show();
            this.start1.position(displayWidth/2-50,displayHeight/2);
        })
        this.start1.mousePressed(()=>{
            this.intro.hide();
            this.start1.hide();
            this.orange.show();
            this.orange.position(displayWidth/2-100,100)
            this.input1.show();
            this.input1.position(displayWidth/2,450);
            this.go1.show();
            this.go1.position(displayWidth/2,500);
        })
        this.go1.mousePressed(()=>{
            this.orange.hide();
            this.input1.hide();
            this.go1.hide();
            ans1=this.input1.value().toLowerCase();
            if(ans1==="orange"){
                
                c=1
            }
            else{
                alert("You Have Color Blindness");
            }
        })
        if(c===1){
            c=0
            this.ry.show();
            this.ry.position(displayWidth/2-100,100);
            this.input2.hide();
            this.input2.position(displayWidth/2-200,450);
            this.input3.hide();
            this.input3.position(displayWidth/2+200,450)
        }
    }
}
