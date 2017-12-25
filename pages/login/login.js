Page({
  data: {
    loginMode: "center"
  },  
  login: function(e) {
    var that = this;
    this.setData({loginMode: "scaleToFill"});
    setTimeout(function () { that.setData({ loginMode: "center" });}, 700); 
    console.log("need to be implemented");
  },
})