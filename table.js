// document.write("<input type='submit' value = Submit id = 'sub'>");
function delEntireRow(flag){
    switch(flag){
        case 'row1':
            document.getElementById('row1').style.display = 'none';
            break
        case 'row2':
            document.getElementById('row2').style.display = 'none';
            break
        case 'row3':
            document.getElementById('row3').style.display = 'none';
            break
        case 'row4':
            document.getElementById('row4').style.display = 'none';
            break
    }
}
function edit(flag){
    switch(flag){
        case 'row1':
            document.write("<div style = 'width:800px'>");
            document.write("<table border ='1'><form>");
            document.write("<form><tr><th>S.No</th><th>First Name</th><th>Last Name</th>");
            document.write("<th>Class</th><th>Action</th></tr>");
            document.write("<tr>")
            document.write("<td>"+1+"</td>")
            document.write("<td><input type = 'text'></td>");
            document.write("<td><input type = 'text'></td>");
            document.write("<td><input type = 'text'></td>");
            document.write("<td><button>OK</button></td>")
            document.write("</tr>")
            document.write("<tr><td>2</td><td>Ahmed</td><td>Ali</td><td>7</td><td><button>OK</button></td></tr>")
            document.write("<tr><td>3</td><td>Hamza</td><td>Khan</td><td>2</td><td><button>OK</button></td></tr>")
            document.write("<tr><td>4</td><td>Behzad</td><td>Mirza</td><td>8</td><td><button>OK</button></td></tr>")
            break
    }
}