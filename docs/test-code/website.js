function changeObj(o) {
  o.siteURl = "https://www.baidu.com"
  o = new Object()
  o.siteURl = "https://www.google.com"
}
var webSite = new Object()
changeObj(webSite)
console.log(webSite.siteURl) // https://www.baidu.com