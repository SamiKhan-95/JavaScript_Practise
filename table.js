// document.write("<div style = 'width:800px'>");
// document.write("<table border ='1'><form>");
// document.write("<form><tr><th>S.No</th><th>First Name</th><th>Last Name</th>");
// document.write("<th>Class</th><th>Action</th></tr>");
// for (var i = 1; i <= 4; i++){
//     document.write("<tr><td>"+i+"</td>");
//     document.write("<td><input type = 'text'></td>");
//     document.write("<td><input type = 'text'></td>");
//     document.write("<td><input type = 'text'></td>");
//     document.write("<td><button onclick='edit()'>Edit</button><button onclick='delEntireRow(1)'>Del</button></td>");
//     document.write("</tr>")
// }
// document.write("</form>")
// document.write("</table>");
// document.write("</div><br/>");
// document.write("<input type='submit' value = Submit id = 'sub'>");
function delEntireRow(flag){
    document.getElementById('row').style.display = 'none';
}