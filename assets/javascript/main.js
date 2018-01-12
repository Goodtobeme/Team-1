function call_api_chuck () {
    $.ajax({
      url: "http://api.icndb.com/jokes/random",
      jsonp: "callback",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        $("#author").remove();
        $("#quote").append(data["value"]["joke"]);
      },
      xhrFields: {
        withCredentials: false
      }
    });
  };