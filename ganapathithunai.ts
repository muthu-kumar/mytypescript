// interface product {
//     name:string,
//     prize:number,
//     description:string,
// }
// let pencil:product = {
//     name:"pencil",
//     prize:5,
//     description:"natraj"
// }
class item{
    name:string;
    prize:string;
    description:string;
    image:string;
    assignvaluetoitems(){

        document.getElementById("itemimage").setAttribute('src',this.image);
        document.getElementById("itemprize").innerText = this.prize;
        document.getElementById("itemdescription").innerHTML = this.description;
        document.getElementById("itemname").innerHTML = this.name;
        
    }

    constructor(_name:string,_prize:string,_description:string,_image:string){
        this.name=_name;
        this.prize=_prize;
        this.description=_description;
        this.image=_image;
        
    }
}
let itemsarray:{name:string,prize:string,description:string,image:string}[]=[
    {name:"pencil",prize:"12",description:"natraj",image:"./images/nataraj-pencil-500x500.jpg"},
    {name:"peas",prize:"10",description:"local",image:"./images/green-peas-thumb.jpg"}
    ]
// let numofitems:number=itemsarray.length;
// let x:any;
// for (x in itemsarray){
//     let ab:string;
//     ab = "item"+x;
    
// }
let pencil = new item(itemsarray[0].name,itemsarray[0].prize,itemsarray[0].description,itemsarray[0].image);

//this is new 


pencil.assignvaluetoitems();