logsArray = JSON.parse(logsArray);
$(document).ready(function () {
  function reload(arr) {
    var table =
      "<thead><tr><th>Device ID</th><th>Name</th><th>Action</th><th>Date</th></tr></thead><tbody>";
    for (let i = 1; i <= arr.length; i++) {
      table +=
        "<tr><td>" +
        i +
        "</td><td>" +
        arr[i - 1].name +
        "</td><td>" +
        arr[i - 1].action +
        "</td><td>" +
        arr[i - 1].created +
        "</td></tr>";
    }
    table += "</tbody>";
    $("table").html(table);
  }

  var arr = logsArray;
  reload(arr);

  function pagination(arr) {
    $("#container-pagination").empty();
    var rowsShow = 8;
    var rowsTotal = arr.length;
    var numPages = rowsTotal / rowsShow;
    for (i = 0; i < numPages; i++) {
      var pageNum = i + 1;
      $("#container-pagination").append(
        '<a href="#" rel="' + i + '">' + "<div>" + pageNum + "</div></a>"
      );
    }
    $("#table thead tr").show();
    $("#table tbody tr").hide();
    $("#table tbody tr").slice(0, rowsShow).show();
    $("#container-pagination a:first").addClass("active");
    $("#container-pagination a").bind("click", function () {
      $("#container-pagination a").removeClass("active");
      $(this).addClass("active");
      var currPage = $(this).attr("rel");
      var startItem = currPage * rowsShow;
      var endItem = startItem + rowsShow;
      $("#table tbody tr")
        .css("opacity", "0.0")
        .hide()
        .slice(startItem, endItem)
        .css("display", "table-row")
        .animate({ opacity: 1 }, 300);
    });
  }
  pagination(arr);

  $("#search").click(function () {
    x = [];
    var name = $("#input-search").val().toUpperCase();
    if (name == "") alert("Invalid input");
    else {
      for (let i = 0; i < logsArray.length; i++) {
        if (
          logsArray[i].name.toUpperCase() == name ||
          logsArray[i].name.includes(name) == true
        ) {
          x.push(logsArray[i]);
          console.log(logsArray[i].id);
        }
      }
      reload(x);
    }
  });
});
