function $(id) { return document.getElementById(id); }
      
function $attr(x, y) {
  var attr = (x.attributes) ? x.attributes[y] : null;
  return (attr) ? attr.value : null;
}
      
var comments = $("comments").getElementsByTagName("div");
for (var i = 0; i < comments.length; i++) {
  var x = comments[i];
  if ($attr(x, "class") != "comment") continue;
    
  var parentId = $attr(x, "parentId");
  if (!parentId) continue;
    
  $(parentId).appendChild(x);
}
