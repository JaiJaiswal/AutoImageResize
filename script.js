function resizeImage() {
	var input = document.getElementById("image");
	var preview = document.getElementById("preview");
	var download = document.getElementById("download");

	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			var img = new Image();
			img.src = e.target.result;

			img.onload = function() {
				var canvas = document.createElement("canvas");
				var ctx = canvas.getContext("2d");

				var width = document.getElementById("width").value;
				var height = document.getElementById("height").value;

				canvas.width = width;
				canvas.height = height;

				ctx.drawImage(img, 0, 0, width, height);

				var dataURL = canvas.toDataURL("image/jpeg");

				preview.innerHTML = '<img src="' + dataURL + '">';
				download.href = dataURL;
				download.style.display = "inline-block";
			}
		}

		reader.readAsDataURL(input.files[0]);
	}
}