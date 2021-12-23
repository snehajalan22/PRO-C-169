AFRAME.registerComponent("markerHandler",{
    init:async function(){
        this.el.addEventListner("markerfound",()=>{
            console.log("marker is found")
            this.handlemarkerfound()
        })
        this.el.addEventListner("markerlost",()=>{
            console.log("marker is lost")
            this.handlemarkerlost()
        })
    },
    handlemarkerfound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "felx"
        var ratingButton = document.createElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListner("click",function(){
            swal({
                icon:"warning",
                title:"Rate Dish",
                text:"work in progress"
            })
        })
        orderButton.addEventListner("click",function(){
            swal({
                icon:"https://imgur.com/4NZ6uLY",
                title:"thank you for the order",
                text:"your order will be served soon at your table"
            })
        })
    },
handlemarkerlost:function(){
    var buttonDiv = document.getElementById("button-div")
    buttonDiv.style.display = "none"
}
})