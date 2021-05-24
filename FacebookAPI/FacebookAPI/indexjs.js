axios
  .get(
    "https://graph.facebook.com/votanlepy/posts?fields=likes.summary(true),comments,message&access_token=EAAAAZAw4FxQIBAMO2ZAUZAbNGstdDSF26FHvuxgnL4VpUWPJPGMZAyPdWskYbzQe2PquapeC20LFhCo0iIQtpyytxbDdZCOlcYbrH7svzml3Uzj0MZAstQZCKqqOsqX1nuxkQxpCwxNQgcSUkc2F5eNHGdTx2omvfuspMawqlQWFwZDZD"
  )
  .then((response) => {
    var output = "";
    output +=
      " <span> <b>Thông tin bài viết 1</b></span></br> Status: " +
      response.data.data[0].message +
      "</br> Like: " +
      response.data.data[0].likes.summary.total_count +
      "</br>";

    output +=
      " <span> <b>Thông tin bài viết 2 </b></span></br> Status: " +
      response.data.data[1].message +
      "</br> Like: " +
      response.data.data[1].likes.summary.total_count +
      "</br>";

    output +=
      " <span> <b>Thông tin bài viết 3 </b></span></br> Status: " +
      response.data.data[2].message +
      "</br> Like: " +
      response.data.data[2].likes.summary.total_count;
    document.getElementById("Content").innerHTML = output;
  });
