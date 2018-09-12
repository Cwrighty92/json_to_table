$(document).ready(function() {
  $("#table").append("<table></table>");
  let table = $("#table").children();
  $.ajax({
    url:
      "https://jkq0dchnp0.execute-api.eu-west-1.amazonaws.com/dev/get-json-data",
    type: "GET",
    data: {
      format: "json"
    },
    success: function(response) {
      table.append(
        `<th>ID</th><th>Vendor</th><th>Title</th><th>No of variants</th><th>No of options</th><th>No of images</th>`
      );
      for (i = 0; i < response.products.length; i++) {
        table.append(`<tr><td>${response.products[i].id}</td>
        <td>${response.products[i].vendor}</td>
        <td>${response.products[i].title}</td>
        <td>${response.products[i].variants.length}</td>
        <td>${response.products[i].options.length}</td>
        <td>${response.products[i].images.length}</td>
      `);
      }
    },
    error: function() {
      $("#table").append("<p> Server Error</p>");
    }
  });
});
